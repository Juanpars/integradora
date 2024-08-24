import nodemailer from 'nodemailer';
import express from 'express';

export const sendMail = async (req: express.Request, res: express.Response) => {
    const { to, subject, text, html } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587, // Use 465 if you set secure: true
        secure: false, // Set to true for port 465
        auth: {
            user: "brayandaniel993@gmail.com",
            pass: "fzpllaapyemckgky ", // Ensure this is a valid app password
        },
    });

    try {
        const info = await transporter.sendMail({
            from: '"Gestor Documetns" <brayandaniel993@gmail.com>',
            to: to,
            subject: subject,
            text: text,
            html: html,
        });

        console.log("Message sent: %s", info.messageId);
        res.status(200).json({ message: 'Email sent', messageId: info.messageId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email', error });
    }
};
