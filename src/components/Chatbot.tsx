import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import './Chatbot.css';

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: '¡Hola! Soy Maya, tu asistente de Olivia & Asociados.', sender: 'bot' },
        { id: 2, text: '¿En qué puedo ayudarte hoy?', sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;

        const newUserMsg: Message = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, newUserMsg]);
        setInput('');

        // Simulate bot thinking
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            const botReply: Message = {
                id: Date.now() + 1,
                text: '¡Excelente! Uno de nuestros asesores expertos te contactará pronto para darte una propuesta personalizada.',
                sender: 'bot'
            };
            setMessages(prev => [...prev, botReply]);
        }, 1500);
    };

    return (
        <>
            <div className="chat-trigger" onClick={() => setIsOpen(true)}>
                <MessageSquare color="white" />
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chat-window glass"
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                    >
                        <div className="chat-header">
                            <div className="bot-info">
                                <div className="bot-avatar">M</div>
                                <div>
                                    <h4>Maya</h4>
                                    <span>En línea</span>
                                </div>
                            </div>
                            <X className="close-chat" onClick={() => setIsOpen(false)} />
                        </div>

                        <div className="chat-messages" ref={scrollRef}>
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, x: msg.sender === 'bot' ? -20 : 20, y: 10 }}
                                    animate={{ opacity: 1, x: 0, y: 0 }}
                                    className={`message-bubble ${msg.sender}`}
                                >
                                    {msg.text}
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div className="message-bubble bot typing">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </motion.div>
                            )}
                        </div>

                        <div className="chat-input-area">
                            <input
                                type="text"
                                placeholder="Escribe un mensaje..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button onClick={handleSend} className="send-btn">
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
