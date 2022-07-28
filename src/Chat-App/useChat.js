import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";

const NEW_MESSAGE_EVENT = "newMessage";
const SOCKET_SERVER_URL = "http://localhost:4000";

const useChat = (id) =>{
    const [msg,setmsg] = useState([]);
    const socketRef = useRef();

    useEffect(() => {
        socketRef.current = socketIOClient(SOCKET_SERVER_URL,{
            query:{id},
        });
        socketRef.current.on(NEW_MESSAGE_EVENT,(msg) =>{
            const incomingmsg = {
                ...msg,ownedByCurrentUser:msg.senderId === socketRef.current.id,
            }
            setmsg((msg) => [...msg,incomingmsg]);
        })
        return () =>{
            socketRef.current.disconnect();
        }
    },[id]);
    const sendmsg = (msgBody) =>{
        socketRef.current.emit(NEW_MESSAGE_EVENT,{
            body:msgBody,
            senderId:socketRef.current.id,
        });
    };
    return { msg,sendmsg };
};

export default useChat;
