import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_DhiVaWyf_E4WoXnRak8k7LNALwhBFzXcf');

export default async function handler(req: any, res: any) {
  // Solo permitir peticiones POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { name, email, message } = req.body;

  // Validación básica
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }

  try {
    const { data, error } = await resend.emails.send({
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
      console.error('Error enviando email:', error);
      return res.status(500).json({ error: 'Error al enviar el correo.' });
    }

    return res.status(200).json({ message: 'Enviado con éxito', data });
  } catch (error: any) {
    console.error('Error en el servidor:', error);
    return res.status(500).json({ error: error.message || 'Error interno del servidor.' });
  }
}
