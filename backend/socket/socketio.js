import { Server } from "socket.io";
import http from 'http';
import express from "express";
const app = express();

// creating a io server on express server
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:["http://localhost:3000"],
        methods:["GET","POST"]
    }
});

export const getRecieverSocketId = (recieverId)=>{
    return userSocketMap[recieverId];
}

const userSocketMap = {}

io.on('connection',(socket)=>{
    // console.log("User connected",socket.id);

    const userId = socket.handshake.query.userId;
    if(userId!== undefined){
        userSocketMap[userId]=socket.id;
    }

    // socket.on is used for listening the events. It can be used on both client and server side
    socket.on("disconnect",()=>{
        // console.log("user diconnected",socket.id);
        delete userSocketMap[userId];
    })
})


export {app, io, server};