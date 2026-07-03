import React, { useEffect, useMemo, useRef, useState } from 'react';
import { MessageSquare, Send, X, Sparkles } from 'lucide-react';

/**
 * Employer <-> Candidate messaging UI (frontend-only):
 * - Threads are persisted to localStorage
 * - Candidate can send messages
 * - “Employer” replies are simulated via preset options (for UI/UX preview)
 */
const EmployerChatWidget = ({ employerId = 'default-employer', candidateEmail, employerName }) => {
  const threadKey = useMemo(() => {
    const e = employerId || 'default-employer';
    const c = candidateEmail || 'anonymous';
    return `thread_${c}__${e}`;
  }, [candidateEmail, employerId]);

  const displayName = employerName || 'Employer';

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([]);

  // Small UI helper: a few canned employer replies
  const employerPresets = useMemo(
    () => [
      {
        label: 'Request interview time',
        text: "Thanks! Please share your availability (dates + timezone) and we’ll propose interview slots.",
      },
      {
        label: 'Ask about compensation',
        text: "Thanks for your question. We can discuss compensation after we confirm the role fit and next steps.",
      },
      {
        label: 'Follow up on portfolio',
        text: "Great—please send your portfolio/GitHub link(s). We’ll review them and get back to you.",
      },
      {
        label: 'Confirm receipt',
        text: "Thanks! We’ve received your message and will get back to you shortly.",
      },
    ],
    []
  );

  const endRef = useRef(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(threadKey);
      if (raw) setMessages(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, [threadKey]);

  useEffect(() => {
    try {
      localStorage.setItem(threadKey, JSON.stringify(messages));
    } catch {
      // ignore
    }
  }, [messages, threadKey]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const pushMessage = (type, text) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${Date.now()}_${Math.random().toString(16).slice(2)}`,
        type,
        text,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const sendCandidateMessage = async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    pushMessage('candidate', text);
    setInput('');
    // Simulated “typing” to make the UI feel real
    setIsTyping(true);
  };

  // After candidate sends, auto-enable typing; we don’t auto-reply immediately.
  // User can choose a preset (employer) to preview the conversation UI.
  useEffect(() => {
    if (!isTyping) return;

    const t = setTimeout(() => {
      setIsTyping(false);
    }, 650);

    return () => clearTimeout(t);
  }, [isTyping]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendCandidateMessage();
    }
  };

  const sendEmployerPreset = (presetText) => {
    if (isTyping) return;
    setIsTyping(true);
    const t = setTimeout(() => {
      pushMessage('employer', presetText);
      setIsTyping(false);
    }, 650);
    return () => clearTimeout(t);
  };

  const clearConversation = () => {
    setMessages([]);
    setInput('');
    try {
      localStorage.removeItem(threadKey);
    } catch {
      // ignore
    }
  };

  const hasConversation = messages.length > 0;

  return (
    <>
      {!isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1000,
          }}
        >
          <button
            className="employer-chat-toggle"
            onClick={() => setIsOpen(true)}
            aria-label="Message Employer"
            title="Message Employer"
            type="button"
          >
            <MessageSquare size={24} />
            <span className="toggle-label">Message Employer</span>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="employer-chat-window" role="dialog" aria-label="Employer chat">
          <div className="employer-chat-header">
            <div className="employer-chat-title">
              <span className="employer-chat-dot" />
              <div>
                <div className="employer-chat-name">{displayName}</div>
                <div className="employer-chat-sub">In-app conversation</div>
              </div>
            </div>
            <button className="employer-chat-close" onClick={() => setIsOpen(false)} title="Close" type="button">
              <X size={18} />
            </button>
          </div>

          <div className="employer-chat-messages">
            {!hasConversation && (
              <div className="employer-chat-empty">
                <div className="employer-chat-empty-title">Start the conversation</div>
                <div className="employer-chat-empty-sub">
                  Send a message to your employer about your application.
                </div>
              </div>
            )}

            {messages.map((m) => (
              <div key={m.id} className={`employer-chat-bubble ${m.type}`}>
                <div className="employer-chat-bubble-text">{m.text}</div>
              </div>
            ))}

            {isTyping && (
              <div className="employer-chat-bubble employer">
                <div className="employer-chat-typing">Typing…</div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Employer reply UI preview */}
          <div className="employer-chat-presets">
            <div className="employer-chat-presets-title">
              <Sparkles size={16} />
              <span>Employer reply (demo)</span>
            </div>
            <div className="employer-chat-presets-grid">
              {employerPresets.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  className="employer-chat-preset"
                  onClick={() => sendEmployerPreset(p.text)}
                  disabled={isTyping}
                  title={p.label}
                >
                  {p.label}
                </button>
              ))}
              <button
                type="button"
                className="employer-chat-preset employer-chat-preset-secondary"
                onClick={clearConversation}
                disabled={isTyping || messages.length === 0}
                title="Clear conversation"
              >
                Clear
              </button>
            </div>
          </div>

          <div className="employer-chat-input">
            <textarea
              className="employer-chat-textarea"
              placeholder="Write your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              rows={1}
            />
            <button
              className="employer-chat-send"
              onClick={sendCandidateMessage}
              disabled={!input.trim() || isTyping}
              type="button"
              aria-label="Send"
              title="Send"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        .employer-chat-toggle {
          position: fixed;
          bottom: 7.5rem;
          right: 2rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 9999px;
          padding: 0.95rem 1.25rem;
          color: var(--text-primary);
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 8px 26px rgba(0,0,0,0.25);
          z-index: 1000;
          transition: transform var(--transition-fast);
        }
        .employer-chat-toggle:hover { transform: translateY(-2px); }
        .toggle-label { font-size: 0.95rem; color: var(--text-primary); }

        .employer-chat-window {
          position: fixed;
          bottom: 7.5rem;
          right: 2rem;
          width: 460px;
          max-width: calc(100vw - 2rem);
          height: 640px;
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          display: flex;
          flex-direction: column;
          z-index: 1000;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          overflow: hidden;
        }

        .employer-chat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--border-glass);
          background: rgba(16,185,129,0.12);
        }

        .employer-chat-title { display: flex; align-items: center; gap: 0.8rem; }
        .employer-chat-dot {
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          background: #10b981;
          box-shadow: 0 0 0 4px rgba(16,185,129,0.15);
        }
        .employer-chat-name { font-weight: 900; color: var(--text-primary); font-size: 0.95rem; }
        .employer-chat-sub { color: var(--text-muted); font-size: 0.8rem; margin-top: 0.1rem; }

        .employer-chat-close {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: var(--radius-sm);
        }
        .employer-chat-close:hover { background: rgba(255,255,255,0.08); color: var(--text-primary); }

        .employer-chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1rem 1.1rem;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .employer-chat-empty {
          margin-top: 4rem;
          text-align: center;
          color: var(--text-muted);
        }
        .employer-chat-empty-title { font-weight: 900; color: var(--text-primary); font-size: 1rem; }
        .employer-chat-empty-sub { margin-top: 0.4rem; font-size: 0.9rem; }

        .employer-chat-bubble {
          max-width: 85%;
          padding: 0.65rem 0.85rem;
          border-radius: 16px;
          border: 1px solid var(--border-glass);
          background: rgba(255,255,255,0.03);
        }
        .employer-chat-bubble.candidate {
          align-self: flex-end;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
          border-color: rgba(99,102,241,0.35);
          color: white;
        }
        .employer-chat-bubble.employer {
          align-self: flex-start;
          background: rgba(255,255,255,0.04);
        }
        .employer-chat-bubble-text { white-space: pre-wrap; word-break: break-word; font-size: 0.92rem; line-height: 1.45; }

        .employer-chat-typing { color: var(--text-secondary); font-size: 0.9rem; }

        .employer-chat-presets {
          padding: 0.75rem 1.1rem;
          border-top: 1px solid var(--border-glass);
          background: rgba(255,255,255,0.02);
        }
        .employer-chat-presets-title {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-secondary);
          margin-bottom: 0.6rem;
        }
        .employer-chat-presets-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.5rem;
        }
        .employer-chat-preset {
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          padding: 0.55rem 0.7rem;
          border-radius: var(--radius-md);
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 650;
          transition: transform var(--transition-fast), background var(--transition-fast), border-color var(--transition-fast);
          text-align: left;
        }
        .employer-chat-preset:hover:not(:disabled) {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.07);
          border-color: rgba(99,102,241,0.25);
        }
        .employer-chat-preset:disabled {
          opacity: 0.55;
          cursor: not-allowed;
          transform: none;
        }
        .employer-chat-preset-secondary {
          grid-column: span 2;
          background: rgba(255,255,255,0.03);
          border-color: rgba(239,68,68,0.25);
          color: #fecaca;
        }

        .employer-chat-input {
          padding: 0.9rem 1.1rem;
          border-top: 1px solid var(--border-glass);
          display: flex;
          gap: 0.75rem;
          background: rgba(255,255,255,0.02);
        }

        .employer-chat-textarea {
          flex: 1;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-md);
          padding: 0.7rem 0.9rem;
          color: var(--text-primary);
          font-size: 0.9rem;
          resize: none;
          font-family: inherit;
          min-height: 44px;
          max-height: 140px;
        }
        .employer-chat-textarea:focus {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
        }

        .employer-chat-send {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform var(--transition-fast), opacity var(--transition-fast);
        }
        .employer-chat-send:hover:not(:disabled) { transform: scale(1.05); }
        .employer-chat-send:disabled { opacity: 0.55; cursor: not-allowed; }

        @media (max-width: 480px) {
          .employer-chat-toggle,
          .employer-chat-window {
            right: 1rem;
            bottom: 6.5rem;
          }
          .employer-chat-toggle { bottom: 6.5rem; }
          .employer-chat-window { width: calc(100vw - 2rem); height: 66vh; }
          .employer-chat-presets-grid { grid-template-columns: 1fr; }
          .employer-chat-preset-secondary { grid-column: span 1; }
        }
      `}</style>
    </>
  );
};

export default EmployerChatWidget;


