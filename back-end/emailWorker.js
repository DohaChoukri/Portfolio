require('dotenv').config();
const amqp       = require('amqplib');
const nodemailer = require('nodemailer');

module.exports = async function startEmailWorker() {
  const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://localhost';

  const connection = await amqp.connect(RABBITMQ_URL);
  const channel    = await connection.createChannel();
  await channel.assertQueue('email_queue');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  console.log('📧 Email worker prêt, en attente sur email_queue');

  channel.consume('email_queue', async (msg) => {
    if (!msg) return;

    const data = JSON.parse(msg.content.toString());
    console.log('➡️  Message reçu :', data);

    const mailOptions = {
      from: '"Site Contact" <' + process.env.EMAIL_USER + '>',
      to: process.env.EMAIL_USER,
      replyTo: data.email,
      subject: `Message de ${data.name} (${data.email})`,
      text: `De: ${data.name} (${data.email})\n\n${data.message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('✅ Email envoyé');
      channel.ack(msg);
    } catch (err) {
      console.error('❌ Erreur envoi email', err);
    }
  });
};
