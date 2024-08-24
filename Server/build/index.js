"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const areaRouter_1 = __importDefault(require("./routes/areaRouter"));
const formatoRouter_1 = __importDefault(require("./routes/formatoRouter"));
const instformRouter_1 = __importDefault(require("./routes/instformRouter"));
const itsRouter_1 = __importDefault(require("./routes/itsRouter"));
const ProcedimientosRouter_1 = __importDefault(require("./routes/ProcedimientosRouter"));
const proceformRouter_1 = __importDefault(require("./routes/proceformRouter"));
const proinstRouter_1 = __importDefault(require("./routes/proinstRouter"));
const loginRoutes_1 = __importDefault(require("./routes/loginRoutes"));
const UpdateRouter_1 = __importDefault(require("./routes/UpdateRouter"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        // Initialize multer with original file name
        this.upload = (0, multer_1.default)({
            storage: multer_1.default.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, path_1.default.join(__dirname, '/uploads')); // Store in uploads folder
                },
                filename: (req, file, cb) => {
                    // Use only the original file name, avoiding prefixes
                    cb(null, file.originalname);
                }
            }),
            limits: { fileSize: 1024 * 1024 * 5 } // Limit file size to 5MB
        });
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        // Serve uploaded files statically
        this.app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/user', usuarioRoutes_1.default);
        this.app.use('/api/login', loginRoutes_1.default);
        this.app.use('/api/area', areaRouter_1.default);
        this.app.use('/api/formato', formatoRouter_1.default);
        this.app.use('/api/Instrucciones_formatos', instformRouter_1.default);
        this.app.use('/api/its', itsRouter_1.default);
        this.app.use('/api/procedimientos', ProcedimientosRouter_1.default);
        this.app.use('/api/Procedimientos_formatos', proceformRouter_1.default);
        this.app.use('/api/Procedimientos_instrucciones', proinstRouter_1.default);
        this.app.use('/api/update', UpdateRouter_1.default);
        // Archivo: src/server.ts
        this.app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
        // File upload route
        this.app.post('/api/upload', this.upload.single('documento'), (req, res) => {
            if (req.file) {
                const fileName = req.file.originalname; // Use the original name
                // Now you can save the fileName to your database
                res.json({ message: 'File uploaded successfully!', fileName: fileName });
            }
            else {
                res.status(400).json({ message: 'No file uploaded' });
            }
        });
        // Serve uploaded files by filename
        this.app.get('/uploads/:filename', (req, res) => {
            const fileName = req.params.filename;
            const filePath = path_1.default.join(__dirname, 'uploads', fileName);
            res.sendFile(filePath, err => {
                if (err) {
                    res.status(404).send('Archivo no encontrado');
                }
            });
        });
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on Port", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
