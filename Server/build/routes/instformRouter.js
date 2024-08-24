"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const instformController_1 = require("../controllers/instformController");
class Instrucciones_formatosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', instformController_1.instrucciones_formatosController.list);
        this.router.get('/:id', instformController_1.instrucciones_formatosController.getOne);
        this.router.post('/', instformController_1.instrucciones_formatosController.create);
        this.router.put('/:id', instformController_1.instrucciones_formatosController.update);
        this.router.delete('/:id', instformController_1.instrucciones_formatosController.delete);
    }
}
const instrucciones_formatosRoutes = new Instrucciones_formatosRoutes();
exports.default = instrucciones_formatosRoutes.router;
