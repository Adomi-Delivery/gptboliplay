'use client'
import axios from 'axios';
import React, { useState } from 'react';


export default function BotOpenAi() {
  const [inputMessage, setInputMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ question: string; answer: any; }[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleChat = () => {
    setIsChatOpen((prevState) => !prevState);
  };

  // callendpointchat
  const sendMessageToChatGPT = async () => {
    try {
      const response = await axios.post('/api/chatgpt', { petition: inputMessage });

      // Actualizar el historial con la pregunta y la respuesta
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { question: inputMessage, answer: response.data.generatedMessage || 'No se recibió una respuesta válida.' },
      ]);

      // Actualizar el estado con la respuesta recibida del servidor
      setResponseMessage(response.data.generatedMessage || 'No se recibió una respuesta válida.');
      setInputMessage('');
    } catch (error) {
      console.error('Error al enviar mensaje al chat GPT:', error);
      setResponseMessage('Ocurrió un error al enviar el mensaje.');
    }
  };

  return (
    <>
      <button
        id="btnToggleChat"
        className={`fixed bottom-4 right-4  rounded-full text-white`}
        onClick={toggleChat}
      >
        <img
          src="/images/icon.jpg"
          alt="Chat Icon"
          className="h-20 w-20 rounded-full"
        />
      </button>

      {isChatOpen && (
        <div className="fixed bottom-20 right-8 w-96 bg-white border border-gray-300 rounded-lg shadow-lg p-5">
          
          {/* Mostrar el historial de preguntas y respuestas */}
          <textarea
            id="chatTextarea"
            value={chatHistory.map((item) => `${item.question ? `${item.question}` : ''}\n${item.answer}`).join('\n\n')}
            readOnly
            className="flex-grow mr-2 border border-gray-300 rounded-md py-2 px-3 custom-textarea"
            cols={20}
            rows={10}
            wrap="soft" // Puedes usar "soft" o "hard" según tus preferencias
            style={{
              maxWidth: '100%', // Limita el ancho máximo al 100% del contenedor
              width: '100%', // Asegura que el textarea ocupe todo el ancho disponible
            }}
          />





          <div className="flex items-center">
            <input
              type="text"
              id="messageInput"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-grow mr-2 border border-gray-300 rounded-md py-2 px-3"
            />
            <button
              id="btnSend"
              className="btn btn-success rounded-full bg-green-500 hover:bg-green-600 text-white p-2 w-10 h-10 flex items-center justify-center"
              onClick={sendMessageToChatGPT}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
