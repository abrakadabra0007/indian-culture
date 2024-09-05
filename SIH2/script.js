function openAssistant(){
    const width = 400;
    const height = 600;
    const left = screen.width - width; // Position the window on the right side
    const top = (screen.height - height) / 2; // Center the window vertically

    const assistantWindow = window.open(
        '',
        'AI Assistant',
        `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
    assistantWindow.document.write(`
        <html>
        <head>
            <title>AI Assistant</title>
            <style>
            body {
                    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    background-image: url('Heritage background.jpg.jpg'); /* Set the Indian flag as background */
                    background-size: cover;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }
                .chat-container {
                    background-color: #fff;
                    border-radius: 10px;
                    width: 100%;
                    height: 100%;
                    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                .chat-header {
                    background-color: #6200ea;
                    color: white;
                    padding: 15px;
                    text-align: center;
                }
                .chat-box {
                    flex: 1;
                    padding: 15px;
                    overflow-y: auto;
                    border-bottom: 1px solid #ddd;
                }
                .chat-message {
                    margin: 10px 0;
                    padding: 10px;
                    border-radius: 10px;
                    max-width: 80%;
                }
                .chat-message.assistant {
                    background-color: #6200ea;
                    color: white;
                    align-self: flex-start;
                }
                .chat-message.user {
                    background-color: #f1f1f1;
                    color: black;
                    align-self: flex-end;
                }
                .chat-input-container {
                    display: flex;
                    padding: 10px;
                    border-top: 1px solid #ddd;
                }
                .chat-input-container input {
                    flex: 1;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    margin-right: 10px;
                }
                .chat-input-container button {
                    background-color: #6200ea;
                    color: white;
                    padding: 10px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
            </style>
        </head>
        <body>
            <div class="chat-container">
                <div class="chat-header">
                    <h2>AI Assistant</h2>
                </div>
                <div class="chat-box" id="chat-box">
                    <div class="chat-message assistant">
                        Namaste!! How are you?
                    </div>
                </div>
                <div class="chat-input-container">
                    <input type="text" id="user-input" placeholder="Type your message here..." onkeypress="handleKeyPress(event)">
                    <button onclick="sendMessage()">Send</button>
                </div>
            </div>
            <script>
                function sendMessage() {
                    const userInput = document.getElementById('user-input').value.trim();
                    if (userInput) {
                        displayMessage(userInput, 'user');
                        getAssistantResponse(userInput);
                        document.getElementById('user-input').value = '';
                    }
                }

                function handleKeyPress(event) {
                    if (event.key === 'Enter') {
                        sendMessage();
                    }
                }

                function displayMessage(message, sender) {
                    const chatBox = document.getElementById('chat-box');
                    const messageDiv = document.createElement('div');
                    messageDiv.classList.add('chat-message', sender);
                    messageDiv.textContent = message;
                    chatBox.appendChild(messageDiv);
                    chatBox.scrollTop = chatBox.scrollHeight;
                }
                function getAssistantResponse(message) {
    const trimmedMessage = message.trim().toLowerCase();
    let response = "";

    switch(true) {
        case /hello/i.test(trimmedMessage):
            response = "Hello! How can I assist you today?";
            break;
        case /how are you\??/i.test(trimmedMessage):
            response = "I am just a bot, but thanks for asking!";
            break;
        case /what is your name\??/i.test(trimmedMessage):
            response = "I am your AI Assistant.";
            break;
        case /what are the significant indian festivals and their cultural importance\??/i.test(trimmedMessage):
            response = "India is home to a diverse array of festivals that reflect its rich cultural heritage. Key celebrations include Diwali, the Festival of Lights, symbolizing the victory of good over evil; Holi, the Festival of Colors, marking the arrival of spring and the joy of community; and Eid-ul-Fitr, which celebrates the end of Ramadan and embodies gratitude and charity. Navratri and Durga Puja honor the divine feminine energy, while Ganesh Chaturthi celebrates wisdom and prosperity. Harvest festivals like Pongal and Onam highlight agricultural abundance and regional traditions. These festivals are not just religious observances but also serve as unifying cultural events that strengthen social bonds and promote a sense of togetherness.";
            break;
        case /what role do indian festivals play in the country heritage\??/i.test(trimmedMessage):
            response = "These celebrations not only serve as platforms for religious expression but also cultivate a sense of unity among diverse communities. Aside from religious celebrations, India also observes numerous cultural festivals that spotlight the nation abundant artistic heritage.";
            break;
        case /what is the significance of the vedas in indian heritage\??/i.test(trimmedMessage):
            response = "The Vedas are ancient sacred texts that form the foundation of Indian spiritual and cultural heritage. Composed in Sanskrit, they consist of hymns, rituals, and philosophical teachings that date back over 3,000 years. The Vedas are revered as the source of knowledge and wisdom, influencing various aspects of Indian life, including religion, philosophy, science, and social structure. They have shaped the spiritual practices and beliefs of Hinduism, emphasizing concepts like dharma (duty), karma (action), and the pursuit of truth. The Vedas' significance lies in their role as timeless guides for moral and spiritual development, preserving the essence of India's spiritual legacy.";
            break;
        case /what are the major classical dance forms of india\??/i.test(trimmedMessage):
            response = "India's major classical dance forms are rich expressions of its cultural heritage, each with distinct styles and origins. Bharatanatyam from Tamil Nadu is characterized by precise movements and storytelling through dance. Kathak from North India blends rhythmic footwork with expressive gestures. Kathakali from Kerala is known for its elaborate costumes and dramatic performances. Odissi from Odisha features fluid movements and poses inspired by temple sculptures. Kuchipudi from Andhra Pradesh combines dance with speech, while Manipuri from Manipur is distinguished by its graceful and soft movements. Lastly, Mohiniyattam from Kerala is known for its elegant and lyrical style. These dance forms reflect India's diverse cultural tapestry and spiritual traditions.";
            break;
        case /how do indian marriage customs vary across different regions\??/i.test(trimmedMessage):
            response = "Indian marriage customs vary widely across regions, reflecting the country's cultural diversity. In North India, weddings are often grand and include rituals like the baraat (groom's procession) and saat phere (seven vows around the sacred fire). In South India, ceremonies like kanyadaanam (giving away of the bride) and mangalsutra tying are central, with simpler, temple-based rituals. In Eastern India, particularly in Bengali weddings, rituals like sindoor daan (applying vermilion) and subho drishti (auspicious sight) are significant. In the West, Gujarati weddings feature the pithi ceremony (applying turmeric) and garba dance. These regional customs, while different, all emphasize the sanctity of marriage and the union of families, rooted in deep cultural and religious traditions.";
            break;
        case /what is the role of indian literature in its heritage\??/i.test(trimmedMessage):
            response = "Indian literature plays a pivotal role in preserving and conveying the country's rich cultural and spiritual heritage. From ancient epics like the Mahabharata and Ramayana to classical texts like the Vedas and Upanishads, Indian literature has shaped the philosophical, religious, and ethical values of the nation. It has also documented historical events, social norms, and the evolution of languages and regional cultures. Through diverse literary forms—poetry, prose, drama—Indian literature reflects the complexities of human experience, fostering a deep sense of identity and continuity. It serves as a bridge between past and present, inspiring generations and keeping India's diverse traditions alive.";
            break;                
        default:
            response = "I am sorry, I did not understand that.";
    }

    setTimeout(() => displayMessage(response, 'assistant'), 1000);
}

                            </script>
        </body>
        </html>
    `);
    }
    
    