"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formatoController_1 = require("../controllers/formatoController");
class FormatoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', formatoController_1.formatoController.list);
        this.router.get('/:id', formatoController_1.formatoController.getOne);
        this.router.post('/', formatoController_1.formatoController.create);
        this.router.put('/:id', formatoController_1.formatoController.update);
        this.router.delete('/:id', formatoController_1.formatoController.delete);
    }
}
const formatoRoutes = new FormatoRoutes();
exports.default = formatoRoutes.router;
