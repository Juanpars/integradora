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
exports.updateController = void 0;
const database_1 = __importDefault(require("../database"));
class UpdateController {
    getRecentDocuments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tables = ['areas', 'usuarios', 'formatos', 'its', 'instrucciones_formatos', 'procedimientos', 'procedimientos_formatos', 'procedimientos_instrucciones'];
            const results = {};
            try {
                for (const table of tables) {
                    const query = `SELECT * FROM ${table} WHERE updated_at >= NOW() - INTERVAL 10 MINUTE`;
                    const data = yield database_1.default.query(query);
                    results[table] = data;
                }
                res.json(results);
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching recent documents', error });
            }
        });
    }
    getDocumentsWithStatusAlta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tables = ['formatos', 'its', 'procedimientos'];
            const results = {};
            try {
                for (const table of tables) {
                    // Ajustar la consulta SQL para incluir una condición de status 'alta'
                    const query = `SELECT * FROM ${table} WHERE status = 'alta'`;
                    const data = yield database_1.default.query(query);
                    results[table] = data;
                }
                res.json(results);
            }
            catch (error) {
                res.status(500).json({ message: 'Error fetching documents with status alta', error });
            }
        });
    }
}
exports.updateController = new UpdateController();
