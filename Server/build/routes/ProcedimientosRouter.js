"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const procedimientosController_1 = require("../controllers/procedimientosController");
class ProcedimientosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', procedimientosController_1.procedimientosController.list);
        this.router.get('/:id', procedimientosController_1.procedimientosController.getOne);
        this.router.post('/', procedimientosController_1.procedimientosController.create);
        this.router.put('/:id', procedimientosController_1.procedimientosController.update);
        this.router.delete('/:id', procedimientosController_1.procedimientosController.delete);
    }
}
const procedimientosRoutes = new ProcedimientosRoutes();
exports.default = procedimientosRoutes.router;
