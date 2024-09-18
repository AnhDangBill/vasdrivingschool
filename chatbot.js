// Toggle chatbot visibility
function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    const trigger = document.getElementById('chatbotTrigger');
    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        chatbot.style.display = 'flex';
        trigger.style.display = 'none';
    } else {
        chatbot.style.display = 'none';
        trigger.style.display = 'block';
    }
}

// Handle sending a message
function sendMessage() {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput === '') return;  // Don't send empty messages

    // Display user's message
    addMessageToChat(userInput, 'user');

    // Get a bot response
    const botResponse = getBotResponse(userInput);

    // Simulate a bot delay to make it more conversational
    setTimeout(() => {
        addMessageToChat(botResponse, 'bot');
    }, 1000);

    // Clear input field after sending
    document.getElementById('userInput').value = '';
}

// Add message to the chat
function addMessageToChat(message, sender) {
    const chatOutput = document.getElementById('chatOutput');

    // Create a new message div
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-output', sender === 'user' ? 'user-message' : 'bot-message');
    messageElement.textContent = message;

    // Append the message to the chat output
    chatOutput.appendChild(messageElement);

    // Auto-scroll to the bottom of the chat
    chatOutput.scrollTop = chatOutput.scrollHeight;
}

// Handle Enter key press to send message
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Sample chatbot responses with more questions and answers
function getBotResponse(userInput) {
    const lowerInput = userInput.toLowerCase();

    // Class-related queries
    if (lowerInput.includes('class') || lowerInput.includes('schedule')) {
        return 'Our next class is on September 9th, 2024. You can sign up on our Programs page. Future classes are scheduled for October and November.';
    } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
        return 'Please contact us for pricing information at +1 (240) 688-5597. Payment plans are also available for students.';
    } else if (lowerInput.includes('register') || lowerInput.includes('sign up')) {
        return 'You can sign up for classes on our Programs page, or by visiting us in person at our office at 12621 Old Columbia Pike, Silver Spring MD 20904.';

        // Operating hours and location
    } else if (lowerInput.includes('hours') || lowerInput.includes('time') || lowerInput.includes('open')) {
        return 'Our operating hours are Monday to Wednesday, 10 AM to 4 PM, and Friday from 10 AM to 2 PM. We are closed on Thursdays, Saturdays, and Sundays.';
    } else if (lowerInput.includes('location') || lowerInput.includes('address')) {
        return 'We are located at 12621 Old Columbia Pike, Silver Spring MD 20904. You can find us on Google Maps by searching "VAS Driving School".';

        // COVID-19 safety measures
    } else if (lowerInput.includes('covid') || lowerInput.includes('safety')) {
        return 'We follow strict COVID-19 safety protocols, including mandatory masks for in-person classes and regular sanitizing of all vehicles after driving sessions.';

        // Car for MVA test
    } else if (lowerInput.includes('test') || lowerInput.includes('mva') || lowerInput.includes('skills test')) {
        return 'Yes, you can use our school car for the MVA skills test, subject to availability. Please contact us to schedule the car for your test.';

        // Parking and test locations
    } else if (lowerInput.includes('parking') || lowerInput.includes('test locations')) {
        return 'Our driving school provides pickup and drop-off services for MVA test locations in the area. Contact us for more details and to arrange a pickup.';

        // Driving practice and behind-the-wheel lessons
    } else if (lowerInput.includes('practice') || lowerInput.includes('behind-the-wheel') || lowerInput.includes('extra lessons')) {
        return 'We offer additional behind-the-wheel driving practice with our certified instructors. Sessions can be booked through our Programs page.';

        // Policies (payment, cancellation, refund)
    } else if (lowerInput.includes('payment') || lowerInput.includes('pay') || lowerInput.includes('cost')) {
        return 'We accept payments via credit cards, debit cards, and cash. Payment plans are also available for those who need them.';

        // Services provided
    } else if (lowerInput.includes('services') || lowerInput.includes('offer') || lowerInput.includes('programs')) {
        return 'We offer a variety of services including: the Full 36-Hour Driving Course, 3-Hour Drug and Alcohol Class, behind-the-wheel practice, and car rental for the MVA test.';

        // General driving-related questions
    } else if (lowerInput.includes('permit') || lowerInput.includes('learner\'s permit')) {
        return 'You don’t need to have a valid learner’s permit to enroll in our class but you do need to have a permit ready before you do your 6 hours behind the wheel sessions. You can obtain a learner’s permit from the MVA after passing a knowledge test.';
    } else if (lowerInput.includes('driving test') || lowerInput.includes('pass test')) {
        return 'To pass the driving test, you must demonstrate safe driving skills during the road test. Practice parallel parking, lane changes, and obeying traffic rules.';
    } else if (lowerInput.includes('age') || lowerInput.includes('young') || lowerInput.includes('minimum age')) {
        return 'In Maryland, the minimum age to get a learner’s permit is 15 years and 9 months. The minimum age for a provisional license is 16 years and 6 months.';
    } else if (lowerInput.includes('behind the wheel') || lowerInput.includes('driving lessons')) {
        return 'Our behind-the-wheel lessons consist of 6 hours of practice with an instructor. You will learn safe driving techniques and how to pass the road test.';

        // Miscellaneous
    } else if (lowerInput.includes('contact') || lowerInput.includes('phone')) {
        return 'You can contact us at +1 (240) 688-5597 or via email at info@vasdrivingschool.net.';
    } else if (lowerInput.includes('instructor') || lowerInput.includes('teacher')) {
        return 'Our instructors are certified by the Maryland MVA and have years of experience teaching students of all levels. They ensure a safe and comfortable learning environment.';
    } else if (lowerInput.includes('events') || lowerInput.includes('community')) {
        return 'We regularly participate in community events. Recently, we sponsored a lion dance at the Mid-Autumn Festival. Check our website for upcoming events!';

        // Default response
    } else {
        return 'I\'m sorry, I didn\'t understand your question. Please contact us at +1 (240) 688-5597 or info@vasdrivingschool.net for more information.';
    }
}

