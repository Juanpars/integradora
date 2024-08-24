"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proceformController_1 = require("../controllers/proceformController");
class Procedimientos_formatosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', proceformController_1.procedimientos_formatosController.list);
        this.router.get('/:id', proceformController_1.procedimientos_formatosController.getOne);
        this.router.post('/', proceformController_1.procedimientos_formatosController.create);
        this.router.put('/:id', proceformController_1.procedimientos_formatosController.update);
        this.router.delete('/:id', proceformController_1.procedimientos_formatosController.delete);
    }
}
const procedimientos_formatosRoutes = new Procedimientos_formatosRoutes();
exports.default = procedimientos_formatosRoutes.router;
