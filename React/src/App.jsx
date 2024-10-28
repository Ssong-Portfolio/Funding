// App.[jsx
import React, { useEffect, useState } from "react";
import { database } from "./firebaseConfig.jsx"
import { ref, set, onValue } from "firebase/database";

const App = () => {
    const [data, setData] = useState("");
    const [inputValue, setInputValue] = useState("");

    // 실시간으로 데이터 받기
    useEffect(() => {
        const dataRef = ref(database, 'messages/');
        onValue(dataRef, (snapshot) => {
            const newData = snapshot.val();
            setData(newData);
        });
    }, []);

    // 데이터 보내기
    const sendData = () => {
        const dataRef = ref(database, 'messages/');
        set(dataRef, inputValue);
        setInputValue("");
    };

    return (
        <div>
            <h1>Firebase Realtime Database Example</h1>
            <div>
                <h2>Received Data: {data}</h2>
            </div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={sendData}>Send Data</button>
        </div>
    );
};

export default App;
