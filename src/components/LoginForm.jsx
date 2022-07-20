import { useState } from "react";
import axios from "axios";


const LoginFrom = () => {
    const [username, setUserName] = useState('');

    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // USERNAME / PASSWORD => Chatengine -> give messages

        const authObject = { 'Project-ID': "7b8466c5-dd07-432d-b7ae-c29f7a3ad5cd", 'User-Name': username, 'User-Secret': password }

        try {
           await axios.get('https://api/chatengine.io/chats', { headers: authObject });

           localStorage.setItem('username', username);
           localStorage.setItem('password', password);

           window.location.reload();
        } catch (error) {
            setError('oops, Incorrect Credentitals!');
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span> 
                        </button>
                    </div>
                    <h2 className="error">{ error }</h2>
                </form>
            </div>
        </div>
    );
}

export default LoginFrom;