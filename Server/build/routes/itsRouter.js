"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itsController_1 = require("../controllers/itsController");
class ItsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', itsController_1.itsController.list);
        this.router.get('/:id', itsController_1.itsController.getOne);
        this.router.post('/', itsController_1.itsController.create);
        this.router.put('/:id', itsController_1.itsController.update);
        this.router.delete('/:id', itsController_1.itsController.delete);
    }
}
const itsRoutes = new ItsRoutes();
exports.default = itsRoutes.router;
