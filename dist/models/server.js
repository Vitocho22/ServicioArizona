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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const User_1 = __importDefault(require("../routes/User"));
const Rebuses_1 = __importDefault(require("../routes/Rebuses"));
const rerutas_1 = __importDefault(require("../routes/rerutas"));
const encomienda_1 = __importDefault(require("../routes/encomienda"));
const pasajero_1 = __importDefault(require("../routes/pasajero"));
const alquiler_1 = __importDefault(require("../routes/alquiler"));
const personal_1 = __importDefault(require("../routes/personal"));
const user_1 = require("./user");
const rebuses_1 = require("./rebuses");
const rerutas_2 = require("./rerutas");
const encomienda_2 = require("./encomienda");
const pasajero_2 = require("./pasajero");
const alquiler_2 = require("./alquiler");
const personal_2 = require("./personal");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = parseInt(process.env.PORT || '3001', 10);
        this.server = http_1.default.createServer(this.app);
        this.io = new socket_io_1.Server(this.server, {
            cors: {
                origin: "*",
                methods: ["GET", "POST"]
            }
        });
        this.listen();
        this.middlewares();
        this.routes();
        this.sockets();
        this.dbConnect();
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log('Aplicación corriendo en el puerto ' + this.port);
        });
    }
    routes() {
        this.app.use('/api/users', User_1.default);
        this.app.use('/api/', Rebuses_1.default);
        this.app.use("/api/", rerutas_1.default);
        this.app.use("/api/", encomienda_1.default);
        this.app.use("/api/", pasajero_1.default);
        this.app.use("/api/", alquiler_1.default);
        this.app.use("/api/", personal_1.default);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    sockets() {
        this.io.on('connection', (socket) => {
            console.log('Nuevo cliente conectado:', socket.id);
            socket.on('locationUpdate', (location) => {
                console.log('Ubicación recibida:', location);
                this.io.emit('locationUpdate', location);
            });
            socket.on('disconnect', () => {
                console.log('Cliente desconectado:', socket.id);
            });
        });
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_1.User.sync();
                yield rebuses_1.Rebus.sync();
                yield rerutas_2.Ruta.sync();
                yield encomienda_2.Encomienda.sync();
                yield pasajero_2.Pasajero.sync();
                yield alquiler_2.Alquiler.sync();
                yield personal_2.Personal.sync();
                console.log('Conexión a la base de datos establecida correctamente.');
            }
            catch (error) {
                console.error('No se puede conectar a la base de datos:', error);
            }
        });
    }
}
exports.default = Server;
