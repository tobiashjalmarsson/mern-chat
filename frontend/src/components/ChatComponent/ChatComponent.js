import React, { useState, useEffect } from 'react';
import {io} from 'socket.io-client';

const ENDPOINT = "localhost:3000";
const socket = io(ENDPOINT);

function ChatComponent() {
    const [response, setResponse] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        console.log("USE EFFECT")
        //const socket = io(ENDPOINT);
        socket.on("FromAPI", data => {
            setResponse(data);
        });
    }, []);

    const handleChange = (e) => {
        e.preventDefault(); 
        setMessage(e.target.value)
        console.log("Handle change")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Handle submit: message: ${message}`)

        socket.emit("data", "data is emitted");

    }

    return (
        <div>
            <h1>ChatComponent</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={message} onChange={handleChange}/>
                <button>Send</button>
            </form>
        </div>

    );
}

export default ChatComponent;
