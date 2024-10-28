// ChatComponent.jsx
import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { ref, onValue, push } from "firebase/database";

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        const messagesRef = ref(database, "messages");

        // Firebase에서 실시간으로 메시지 수신
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            const messagesList = data ? Object.values(data) : [];
            setMessages(messagesList);
        });
    }, []);

    const sendMessage = () => {
        if (newMessage.trim()) {
            const messagesRef = ref(database, "messages");
            push(messagesRef, { text: newMessage, sender: "react" });  // sender 필드 추가
            setNewMessage("");  // 입력 필드를 비움
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();  // 기본 Enter 키 동작을 막음 (줄바꿈 방지)
            sendMessage();
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="mx-auto">
                    <div className="card">
                        <div className="card-header text-center">Chat Room</div>
                        <div className="card-body" style={{overflowY: "auto"}}>
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`d-flex justify-content-${
                                        message.sender === "react" ? "end" : "start"
                                    } mb-2`}
                                >
                                    <div
                                        className={`bg-${message.sender === "react" ? "primary" : "success"} text-white p-2 rounded`}
                                        style={{maxWidth: "60%"}}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="card-footer">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type your message..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                />
                                <button className="btn btn-primary ms-2" onClick={sendMessage}>
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatComponent;
