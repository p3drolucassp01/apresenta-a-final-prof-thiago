import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Importando o Framer Motion
import './Styles/assistant.css';

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Olá! Como posso te ajudar hoje?', sender: 'bot' },
  ]);
  const [userMessage, setUserMessage] = useState('');

  const toggleChat = () => setIsOpen(!isOpen);

  const handleMessageSubmit = (e) => {
    e.preventDefault();

    if (userMessage.trim()) {
      // Mensagem do usuário
      const newMessages = [
        ...messages,
        { text: userMessage, sender: 'user' },
      ];

      // Resposta automática do bot
      let botResponse = '';

      if (userMessage.toLowerCase().includes('planos')) {
        botResponse = 'Temos planos mensais e trimestrais. Quer saber mais sobre os valores?';
      } else if (userMessage.toLowerCase().includes('whatsapp')) {
        botResponse = 'Claro! Meu número é +55 81 988872515. Fique à vontade para me chamar.';
      } else if (userMessage.toLowerCase().includes('dicas de treino')) {
        botResponse = 'Uma dica rápida: comece com exercícios compostos, como agachamentos e supino. Foque na forma antes do peso!';
      } else if (userMessage.toLowerCase().includes('qualidade de vida')) {
        botResponse = 'A qualidade de vida é essencial! Um bom treino, uma alimentação balanceada e descanso adequado são a chave!';
      } else if (userMessage.toLowerCase().includes('horário de funcionamento')) {
        botResponse = 'Estamos abertos de segunda a sexta, das 6h às 22h e aos sábados das 8h às 14h.';
      } else if (userMessage.toLowerCase().includes('como chegar')) {
        botResponse = 'Nosso endereço é Rua da Academia, 123. Podemos enviar o local no WhatsApp também!';
      } else {
        botResponse = 'Desculpe, não entendi sua pergunta. Você pode tentar perguntar sobre nossos planos, treinos ou horário de funcionamento.';
      }

      // Adiciona a resposta do bot
      setMessages([
        ...newMessages,
        { text: botResponse, sender: 'bot' },
      ]);
      
      // Limpar input
      setUserMessage('');
    }
  };

  return (
    <div>
      <motion.div
        className={`chat-icon ${isOpen ? 'active' : ''}`}
        onClick={toggleChat}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FaRobot size={30} color="white" />
      </motion.div>

      {isOpen && (
        <motion.div
          className="chat-window"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="chat-header">
            <h4>Assistente Virtual</h4>
            <button onClick={toggleChat}>Fechar</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                className={`message ${msg.sender}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.5 }}
              >
                <p>{msg.text}</p>
              </motion.div>
            ))}
          </div>
          <form className="chat-input" onSubmit={handleMessageSubmit}>
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Escreva sua mensagem..."
            />
            <button type="submit">Enviar</button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default Assistant;
