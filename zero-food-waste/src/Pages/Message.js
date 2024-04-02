import React, { useState } from 'react';
import '../CSS/Message.css'; // Import your CSS file where you define the layout styles

// Mock data
const mockConversations = [
  { id: 1, user: 'Alice', messages: ['Hi', 'How are you?'] },
  { id: 2, user: 'Bob', messages: ['Hello', 'Good morning'] },
  // ... other conversations
];

function ConversationsList({ onSelectConversation, conversations }) {
  return (
    <div className="conversationsList">
      <input type="search" placeholder="Search" className="searchBar"/>
      {conversations.map((conversation) => (
        <div key={conversation.id} className="conversationItem" onClick={() => onSelectConversation(conversation.id)}>
          <img src={conversation.avatarUrl} alt={`${conversation.user}'s avatar`} className="avatar" />
          <div className="conversationInfo">
            <h3 className="conversationUser">{conversation.user}</h3>
            <p className="conversationPreview">{conversation.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


function ConversationDetails({ conversation }) {
  return (
    <div className="conversationDetails">
      <div className="header">
        <button className="backButton">⬅</button>
        <img src={conversation.avatarUrl} alt={`${conversation.user}'s avatar`} className="avatar" />
        <h3 className="conversationUser">{conversation.user}</h3>
      </div>
      <div className="messages">
        {conversation.messages.map((message, index) => (
          <div key={index} className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="messageInput">
        <input type="text" placeholder="Type new message here" />
        <button className="sendButton">➤</button>
      </div>
    </div>
  );
}

function Message() {
  const [activeConversationId, setActiveConversationId] = useState(null);

  const handleSelectConversation = (id) => {
    setActiveConversationId(id);
  };

  const activeConversation = mockConversations.find(
    (conversation) => conversation.id === activeConversationId
  );

  return (
    <div className="appContainer">
      <ConversationsList
        conversations={mockConversations}
        onSelectConversation={handleSelectConversation}
      />
      {activeConversation && <ConversationDetails conversation={activeConversation} />}
    </div>
  );
}

export default Message;
