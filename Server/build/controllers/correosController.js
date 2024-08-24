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
exports.correosController = void 0;
const database_1 = __importDefault(require("../database"));
class CorreosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const act = yield database_1.default.query('SELECT * FROM correos');
            res.json(act);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM correos WHERE id = ?', [id]);
            res.json({ message: 'El correo se eliminó' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.body;
            // Verificar si el correo ya existe
            const existingCorreo = yield database_1.default.query('SELECT * FROM correos WHERE email = ?', [email]);
            if (existingCorreo.length > 0) {
                res.status(400).json({ message: 'El correo ya está suscrito' });
            }
            else {
                yield database_1.default.query('INSERT INTO correos SET ?', [req.body]);
                res.json({ message: 'Correo guardado correctamente' });
            }
        });
    }
    // Nuevo método para verificar si el correo existe
    // src/controllers/correosController.ts
    check(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.query;
            const existingCorreo = yield database_1.default.query('SELECT * FROM correos WHERE email = ?', [email]);
            if (existingCorreo.length > 0) {
                res.json(true);
            }
            else {
                res.json(false);
            }
        });
    }
}
exports.correosController = new CorreosController();
