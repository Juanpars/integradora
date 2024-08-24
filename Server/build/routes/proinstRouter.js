"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proinstController_1 = require("../controllers/proinstController");
const multer_1 = __importDefault(require("multer"));
class Procedimientos_instruccionesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // Configure Multer inside the config method
        const storage = multer_1.default.diskStorage({
            destination: (req, file, cb) => {
                cb(null, 'uploads/'); // Specify your uploads directory
            },
            filename: (req, file, cb) => {
                cb(null, Date.now() + '-' + file.originalname); // Customize the filename
            }
        });
        const upload = (0, multer_1.default)({ storage });
        // Define routes and use the Multer middleware where necessary
        this.router.get('/', proinstController_1.procedimientos_instruccionesController.list);
        this.router.get('/:id', proinstController_1.procedimientos_instruccionesController.getOne);
        this.router.post('/', proinstController_1.procedimientos_instruccionesController.create);
        this.router.put('/:id', proinstController_1.procedimientos_instruccionesController.update);
        this.router.delete('/:id', proinstController_1.procedimientos_instruccionesController.delete);
    }
}
const procedimientos_instruccionesRoutes = new Procedimientos_instruccionesRoutes();
exports.default = procedimientos_instruccionesRoutes.router;
