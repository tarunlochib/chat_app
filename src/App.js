import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";

import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
            height="100vh"
            projectID="7b8466c5-dd07-432d-b7ae-c29f7a3ad5cd"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppprops) => <ChatFeed {...chatAppprops} /> }
        />
    )
}

export default App;