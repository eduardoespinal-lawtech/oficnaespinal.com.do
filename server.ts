import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;
  
  // Use built-in middleware for JSON
  app.use(express.json());

  // Email service initialization (Lazy)
  let resend: Resend | null = null;
  const getResend = () => {
    if (!resend) {
      // Using the key provided by the user for immediate functionality
      const apiKey = process.env.RESEND_API_KEY || 're_DhiVaWyf_E4WoXnRak8k7LNALwhBFzXcf';
      if (!apiKey || apiKey === 're_...') {
        throw new Error('RESEND_API_KEY environment variable is required for sending emails.');
      }
      resend = new Resend(apiKey);
    }
    return resend;
  };

  // API Endpoint for Contact Form
  app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    try {
      const client = getResend();
      const { data, error } = await client.emails.send({
        from: 'Espinal & Almonte Web <onboarding@resend.dev>',
        to: ['eduardoespinaldeaza@gmail.com'],
        subject: `Nueva Consulta Legal: ${name}`,
        replyTo: email,
        text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 40px;">
            <h2 style="color: #002244; border-bottom: 2px solid #E31837; padding-bottom: 15px;">Nueva Consulta Jurídica</h2>
            <p style="margin-top: 25px;">Se ha recibido una nueva solicitud a través del portal web institucional.</p>
            <div style="background-color: #f5f5f5; padding: 25px; margin-top: 20px;">
              <p><strong>Remitente:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Mensaje:</strong></p>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            <p style="font-size: 11px; color: #999; margin-top: 30px; text-transform: uppercase; letter-spacing: 2px;">© 2024 Espinal, Almonte & Ricth | Privacidad Protegida</p>
          </div>
        `,
      });

      if (error) {
        console.error('Resend Error:', error);
        return res.status(500).json({ error: 'Error enviando el correo.' });
      }

      res.status(200).json({ message: 'Consulta enviada exitosamente.', data });
    } catch (error: any) {
      console.error('Contact API Error:', error);
      res.status(500).json({ 
        error: error.message || 'Error interno del servidor.',
        isConfigMissing: error.message.includes('RESEND_API_KEY')
      });
    }
  });

  // Vite integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
