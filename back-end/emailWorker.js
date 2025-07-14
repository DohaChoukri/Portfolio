require('dotenv').config();

const amqp = require('amqplib');
const nodemailer = require('nodemailer');

const RABBITMQ_URL = 'amqp://localhost';

async function start() {
  const connection = await amqp.connect(RABBITMQ_URL);
  const channel = await connection.createChannel();
  await channel.assertQueue('email_queue');

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    }
  });

  console.log('En attente des messages dans email_queue');

  channel.consume('email_queue', async (msg) => {
    if (msg !== null) {
      const data = JSON.parse(msg.content.toString());
      console.log('Nouveau message:', data);

      // Envoyer l’email
      console.log(data.email)
let mailOptions = {
  from: '"Site Contact" <dohachoukri116@gmail.com>', // toujours ton email ici
  to: 'dohachoukri116@gmail.com',
  replyTo: data.email, // l’email du client ici
  subject: `Message de ${data.name} (${data.email})`,
  text: `De: ${data.name} (${data.email})\n\n${data.message}`
};


      try {
        await transporter.sendMail(mailOptions);
        console.log('Email envoyé');
        channel.ack(msg); // confirmer le traitement
      } catch (err) {
        console.error('Erreur envoi email', err);
      }
    }
  });
}

start().catch(console.error);
