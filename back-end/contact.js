const express = require('express');
const amqp    = require('amqplib');

const router = express.Router();

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://localhost';
let channel;

(async () => {
  try {
    const conn = await amqp.connect(RABBITMQ_URL);
    channel = await conn.createChannel();
    await channel.assertQueue('email_queue');
    console.log('✅ RabbitMQ connecté');
  } catch (err) {
    console.error('❌ Erreur RabbitMQ:', err);
  }
})();

router.use(express.json());

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs manquants' });
  }

  const msg = { name, email, message };
  channel?.sendToQueue('email_queue', Buffer.from(JSON.stringify(msg)));

  res.json({ status: 'Message reçu, email en cours d\'envoi' });
});

module.exports = router;
