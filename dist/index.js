"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//Configuration the .env file
dotenv_1.default.config();
//Create Express APP
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
//Define the first route of app
app.get('/', (req, res) => {
    res.send('APP Express + ts + swagger + nodemon + jest+ mongoose');
});
app.get('/hello', (req, res) => {
    res.status(200).send({ data: { message: 'Goodbye,world' } });
});
app.listen(port, () => console.log(`EXPRES SERVER: Running at http://localhost:${port}`));
//# sourceMappingURL=index.js.map