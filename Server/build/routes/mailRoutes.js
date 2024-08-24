"use strict";
// mailRoutes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mailController_1 = require("../controllers/mailController");
const router = express_1.default.Router();
router.post('/send-mail', mailController_1.sendEmail);
exports.default = router;
