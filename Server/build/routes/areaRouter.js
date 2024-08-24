"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const areaControllers_1 = require("../controllers/areaControllers");
class AreaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', areaControllers_1.areaController.list);
        this.router.get('/:id', areaControllers_1.areaController.getOne);
        this.router.post('/', areaControllers_1.areaController.create);
        this.router.put('/:id', areaControllers_1.areaController.update);
        this.router.delete('/:id', areaControllers_1.areaController.delete);
    }
}
const areaRoutes = new AreaRoutes();
exports.default = areaRoutes.router;
