document.addEventListener('DOMContentLoaded', () => {
    const openChatButton = document.getElementById('open-chat');
    const closeChatButton = document.getElementById('close-chat');
    const chatSection = document.getElementById('chat-section');
    const sendButton = document.getElementById('send');
    const inputField = document.getElementById('input');
    const messagesContainer = document.getElementById('messages');
  
    openChatButton.addEventListener('click', () => {
      chatSection.classList.add('show');
    });
  
    closeChatButton.addEventListener('click', () => {
      chatSection.classList.remove('show');
    });
  
    sendButton.addEventListener('click', async () => {
      const userMessage = inputField.value.trim();
      if (userMessage === '') return;
  
      const userMessageElement = document.createElement('div');
      userMessageElement.classList.add('bg-blue-100', 'p-2', 'rounded-lg', 'text-blue-800', 'self-end', 'max-w-xs', 'mb-2');
      userMessageElement.textContent = userMessage;
      messagesContainer.appendChild(userMessageElement);
  
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
      const messages = [
        { role: "system", content: "You're an expert bot in programming." },
        { role: "user", content: userMessage },
      ];
  
      // Ensure options object is correctly defined
      const options = { provider: 'Nextway', model: 'gpt-4o-free' };
      
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages, options })
        });
        const data = await response.json();
  
        if (!data.text) {
          console.error('Response does not contain text:', data);
          return;
        }
  
        const botMessageElement = document.createElement('div');
        botMessageElement.classList.add('bg-gray-100', 'p-2', 'rounded-lg', 'text-gray-800', 'self-start', 'max-w-xs', 'mb-2');
        botMessageElement.innerHTML = marked.parse(data.text);
  
        messagesContainer.appendChild(botMessageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      } catch (error) {
        console.error('Error:', error);
      }
  
      inputField.value = '';
    });
  });
  