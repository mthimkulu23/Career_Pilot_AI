import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Maximize2, Bot } from 'lucide-react';

const AICoach = ({ userProfile, onSendMessage, initialMessage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState(
    initialMessage 
      ? [{ id: 1, type: 'bot', text: initialMessage }]
      : [{
          id: 1,
          type: 'bot',
          text: "Hi! I'm your AI Career Coach. I can help you with job applications, salary negotiations, skill development, and career planning. What would you like to know?"
        }]
  );
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    const messageToSend = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Call the parent function to handle the message
    if (onSendMessage) {
      try {
        const response = await onSendMessage(messageToSend, userProfile);
        const botResponse = {
          id: messages.length + 2,
          type: 'bot',
          text: response || "I'm processing your request. Please try again in a moment."
        };
        setMessages(prev => [...prev, botResponse]);
      } catch (error) {
        const botResponse = {
          id: messages.length + 2,
          type: 'bot',
          text: "Sorry, I encountered an error. Please try again."
        };
        setMessages(prev => [...prev, botResponse]);
      }
    } else {
      // Fallback if no handler provided
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "How do I negotiate my salary?",
    "What skills should I learn next?",
    "How can I improve my resume?",
    "What should I expect in interviews?"
  ];

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          className="coach-toggle"
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare size={24} />
          <span className="toggle-label">Career Coach</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`coach-window ${isMinimized ? 'minimized' : ''}`}>
          {/* Header */}
          <div className="coach-header">
            <div className="coach-info">
              <div className="coach-avatar">
                <Bot size={20} />
              </div>
              <div>
                <h4 className="coach-name">AI Career Coach</h4>
                <span className="coach-status">Online</span>
              </div>
            </div>
            <div className="coach-controls">
              <button
                className="control-btn"
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? 'Expand' : 'Minimize'}
              >
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button
                className="control-btn close-btn"
                onClick={() => setIsOpen(false)}
                title="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="coach-messages">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`message ${message.type}`}
                  >
                    <div className="message-content">
                      {message.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="message bot typing">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions */}
              {messages.length <= 2 && (
                <div className="suggested-questions">
                  <p className="suggested-label">Try asking:</p>
                  <div className="suggested-buttons">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        className="suggested-btn"
                        onClick={() => {
                          setInputValue(question);
                          handleSendMessage();
                        }}
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="coach-input">
                <textarea
                  className="message-input"
                  placeholder="Ask me anything about your career..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  rows={1}
                />
                <button
                  className="send-btn"
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send size={18} />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <style>{`
        .coach-toggle {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border: none;
          border-radius: 9999px;
          padding: 1rem 1.5rem;
          color: white;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
          transition: all var(--transition-fast);
          z-index: 1000;
        }

        .coach-toggle:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(99, 102, 241, 0.5);
        }

        .toggle-label {
          font-size: 0.95rem;
        }

        .coach-window {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 400px;
          max-height: 600px;
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          z-index: 1000;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .coach-window.minimized {
          max-height: auto;
        }

        @media (max-width: 480px) {
          .coach-window {
            width: calc(100% - 2rem);
            right: 1rem;
            bottom: 1rem;
            max-height: 80vh;
          }

          .coach-toggle {
            right: 1rem;
            bottom: 1rem;
          }
        }

        .coach-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--border-glass);
          background: rgba(99, 102, 241, 0.1);
        }

        .coach-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .coach-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .coach-name {
          font-size: 0.95rem;
          font-weight: 600;
          margin: 0;
          color: var(--text-primary);
        }

        .coach-status {
          font-size: 0.75rem;
          color: #10b981;
        }

        .coach-controls {
          display: flex;
          gap: 0.5rem;
        }

        .control-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .control-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
        }

        .close-btn:hover {
          background: rgba(244, 63, 94, 0.2);
          color: #f87171;
        }

        .coach-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          min-height: 300px;
          max-height: 400px;
        }

        .message {
          display: flex;
          max-width: 85%;
        }

        .message.bot {
          align-self: flex-start;
        }

        .message.user {
          align-self: flex-end;
          margin-left: auto;
        }

        .message-content {
          padding: 0.875rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .message.bot .message-content {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
        }

        .message.user .message-content {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          color: white;
        }

        .typing-indicator {
          display: flex;
          gap: 0.25rem;
          padding: 0.875rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          width: fit-content;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--color-primary);
          animation: typing 1.4s infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-8px);
            opacity: 1;
          }
        }

        .suggested-questions {
          padding: 0 1.25rem 1rem;
          border-top: 1px solid var(--border-glass);
        }

        .suggested-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-bottom: 0.75rem;
        }

        .suggested-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .suggested-btn {
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: var(--color-primary);
          padding: 0.625rem 1rem;
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }

        .suggested-btn:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: var(--color-primary);
        }

        .coach-input {
          display: flex;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          border-top: 1px solid var(--border-glass);
          background: rgba(255, 255, 255, 0.02);
        }

        .message-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-size: 0.9rem;
          resize: none;
          font-family: inherit;
          min-height: 44px;
          max-height: 120px;
        }

        .message-input:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .message-input::placeholder {
          color: var(--text-muted);
        }

        .send-btn {
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border: none;
          border-radius: var(--radius-md);
          padding: 0.75rem;
          color: white;
          cursor: pointer;
          transition: all var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .send-btn:hover:not(:disabled) {
          transform: scale(1.05);
        }

        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default AICoach;
