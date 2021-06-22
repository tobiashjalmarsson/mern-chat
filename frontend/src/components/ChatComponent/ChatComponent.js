import React, { useState, useEffect } from 'react';
import {io} from 'socket.io-client';

const ENDPOINT = "localhost:3000";
const socket = io(ENDPOINT);

/*Message Structure (In conversations)
message: {
id: number
content: string
}
 Will need to be added to later with sender etc.
*/


function ChatComponent() {
    const [message, setMessage] = useState("")
    const [conversation, setConversation] = useState([])


    useEffect(() => {
        console.log("Inside useEffect");
        socket.on("FromAPI", data => {
            console.log(data);
            // Update the conversation
            setConversation([
                ...conversation,
                {
                    id: conversation.length,
                    content: data
                }
            ]);

        });

        // For debugging purposes

    }, []);

    const handleChange = (e) => {
        e.preventDefault(); 
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        conversation.forEach(convo => {
            console.log(convo);
        })
        socket.emit("data", message);

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
