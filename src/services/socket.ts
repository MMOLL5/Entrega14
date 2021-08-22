import socketIo from 'socket.io';
import { formatMessages } from '../utils/messages';
import fs from 'fs';
import { Server } from 'http';

const data = {
  username: undefined,
  text: undefined,
};

export const initWsServer = (server: Server) => {
  const io = new socketIo.Server(server);

  io.on('connection', (socket: { on: (arg0: string, arg1: (msg: any, userName: any) => void) => void; }) => {
    console.log('Nueva Conexion establecida!');

    //Listen for chat messages
    socket.on('chatMessage', (msg, userName) => {
      data.username = userName;
      data.text = msg;
      fs.appendFileSync('historico.txt', JSON.stringify(formatMessages(data))+'\n');
      io.emit('message', formatMessages(data));
    });
  });

  return io;
};