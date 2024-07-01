import express, { Application } from 'express';
import cors from 'cors';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';

import routerUsers from '../routes/User';
import routerRebus from '../routes/Rebuses';
import routerRuta from '../routes/rerutas';
import routerEncomienda from '../routes/encomienda';
import routerPasajero from '../routes/pasajero';
import routerAlquiler from '../routes/alquiler';
import routerPersonal from '../routes/personal';
import { User } from './user';
import { Rebus } from './rebuses';
import { Ruta } from './rerutas';
import { Encomienda } from './encomienda';
import { Pasajero } from './pasajero';
import { Alquiler } from './alquiler';
import { Personal } from './personal';

class Server {
    private app: Application;
    private port: number;
    private server: http.Server;
    private io: SocketIOServer;

    constructor() {
        this.app = express();
        this.port = parseInt(process.env.PORT || '3001', 10);
        
        this.server = http.createServer(this.app);
        this.io = new SocketIOServer(this.server, {
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
        this.app.use('/api/users', routerUsers);
        this.app.use('/api/', routerRebus);
        this.app.use("/api/", routerRuta);
        this.app.use("/api/", routerEncomienda);
        this.app.use("/api/", routerPasajero);
        this.app.use("/api/", routerAlquiler);
        this.app.use("/api/", routerPersonal);
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
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

    async dbConnect() {
        try {
            await User.sync();
            await Rebus.sync();
            await Ruta.sync();
            await Encomienda.sync();
            await Pasajero.sync();
            await Alquiler.sync();
            await Personal.sync();

            console.log('Conexión a la base de datos establecida correctamente.');
        } catch (error) {
            console.error('No se puede conectar a la base de datos:', error);
        }
    }
}

export default Server;