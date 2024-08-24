import express from 'express';
import mailRoutes from './routes/mailRoutes';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // Permite solicitudes de cualquier origen

// Rutas
app.use('/api/mail', mailRoutes);

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});