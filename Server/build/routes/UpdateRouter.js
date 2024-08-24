"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const updateController_1 = require("../controllers/updateController");
class AreaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/recent-documents', updateController_1.updateController.getRecentDocuments);
        this.router.get('', updateController_1.updateController.getDocumentsWithStatusAlta);
    }
}
const updateRouter = new AreaRoutes();
exports.default = updateRouter.router;
