// Function to add a message to the chat box
function addMessage(message, sender) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to simulate AI responses
function getAIResponse(userMessage) {
  const responses = {
      'hello': 'Hello! How can I assist you today?',
      'hi': 'hi! How can I assist you today?',
      'how are you': 'I am Fine and you?',
      'fine': 'Nice to hear.',
      'i am also fine': 'Nice to hear.',
      'bye': 'bye! If you have more questions, feel free to ask.',
      'what is your name': 'My Name is Ask Anything.'
  };

  return responses[userMessage.toLowerCase()] || "I'm not sure how to respond to that.";
}

// Function to handle user input
function handleUserInput() {
  const userInput = document.getElementById('user-input');
  const userMessage = userInput.value.trim();

  if (userMessage !== '') {
      addMessage(userMessage, 'user');

      // Simulate AI response
      const aiResponse = getAIResponse(userMessage);
      addMessage(aiResponse, 'ai');

      userInput.value = ''; // Clear the input field
  }
}

// Event listener for the send button
const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', handleUserInput);

// Event listener for pressing Enter in the input field
const userInput = document.getElementById('user-input');
userInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      handleUserInput();
  }
});