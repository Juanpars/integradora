import { Request, Response } from 'express';
import { sendMail } from '../services/mailService';

// Controlador para manejar la solicitud de envío de correo
export const sendEmail = async (req: Request, res: Response) => {
    const { to, subject, text, html } = req.body;

    // Create a fake express request and response object
    req.body = { to, subject, text, html };
    try {
        await sendMail(req, res);
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ message: 'Error al enviar el correo' });
    }
};
