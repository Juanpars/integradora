"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const sendMail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { to, subject, text, html } = req.body;
    const transporter = nodemailer_1.default.createTransport({
        host: "smtp.gmail.com",
        port: 587, // Use 465 if you set secure: true
        secure: false, // Set to true for port 465
        auth: {
            user: "brayandaniel993@gmail.com",
            pass: "fzpllaapyemckgky ", // Ensure this is a valid app password
        },
    });
    try {
        const info = yield transporter.sendMail({
            from: '"Gestor Documetns" <brayandaniel993@gmail.com>',
            to: to,
            subject: subject,
            text: text,
            html: html,
        });
        console.log("Message sent: %s", info.messageId);
        res.status(200).json({ message: 'Email sent', messageId: info.messageId });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send email', error });
    }
});
exports.sendMail = sendMail;
