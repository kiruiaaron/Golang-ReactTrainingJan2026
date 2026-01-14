import React from 'react'
import { Component } from 'react';
import './ChatHistory.scss'
class ChatHistory extends Component {
    render() {
        const messages = this.props.ChatHistory.map((msg, index) => (
            <p key={index}>{msg}</p>
        ));
        return (
            <div className='ChatHistory'>
                <h2>Chat History</h2>
                {messages}
            </div>
        );
    }
}

export default ChatHistory