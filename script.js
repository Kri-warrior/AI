// Function to add a message to the chat box
function addMessage(message, sender) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to simulate AI responses
function getAIResponse(userMessage) {
  const responses = {
    hello: "Hello! How can I assist you today?",
    hi: "hi! How can I assist you today?",
    "how are you": "I am Fine and you?",
    fine: "Nice to hear.",
    "i am also fine": "Nice to hear.",
    bye: "bye! If you have more questions, feel free to ask.",
    ok: "What else can i do for you?",
    okay: "What else can i do for you?",
    "what is your name": "My Name is AI Chatbot.",
    //gk questions
    "when is earth day celebrated": "22 April",
    "where is bandipur national park situated":"Karnataka",
    "what is the full form of ISRO":"Indian Space Research Organisation",
    "name the state that has the longest coastline in india": "Gujarat",
    "what is the largest planet in the solar system": "Jupiter",
    "when was the camera invented": "1816",
    "name the longest river on the earth": "Nile",
    "how many mb's are there in 1 gb": "1024",
    "who was the first female indian astronaut": "Kalpana Chawla",
    "who founded google": "Larry Page & Sergey Brin",
    "when does national science day celebrate": "February 28",
    "what is the national sport of tajikistan": "Wrestling",
    "what is the currency of japan": "Japanese Yen",
    "what is the world's first artificial satellite": "Sputnik 1",
    "what is the full form of nasa": "National Aeronautics and Space Administration",
    "which animal never drinks water in its entire life": "Kangaroo rat",
    "what is the full form of led":"Light Emitting Diode",
    "what is the largest flower in the world":"Rafflesia arnoldii",
    "how many states are there in india":"28",
    "what is the full form of who":"World Health Organization",
    "who is the prime minister of india":"Narendra Modi",
    "who is the president of india":"Droupadi Murmu",
    "who is the president of usa":"Joe Biden",
    "who is the first person who stepped on moon":"Neil Armstrong",
    "how many continents are there in the world":"7",
    //computer questions
    "what is the full form of cpu": "Central Processing Unit",
    "what is the full form of ram": "Random Access Memory",
    "what is an ai": "AI, or Artificial Intelligence, refers to computer systems that can perform tasks requiring human-like intelligence, such as understanding language, recognizing patterns, and making decisions. There are two main types: Narrow AI (specialized tasks) and General AI (human-like intelligence). AI includes subfields like Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision, each with specific applications.",
    "who created telephone": "The telephone was invented by **Alexander Graham Bell**. He is credited with obtaining the first patent for the invention of the telephone in 1876.",
    "what is the full form of ascii": "American Standard Code for Information Interchange",
    "what is the full form of www": "World Wide Web",
    "the first computers were programmed using": "Machine Language/Binary code",
    "what is the full form of lan": "Local Area Network",
    "what is the full form of bios": "Basic Input Operating System",
    "what is computer": "A computer is a machine that can be instructed to carry out sequences of arithmetic or logical operations automatically via computer programming.Modern computers have the ability to follow generalized sets of operations, called programs. These programs enable computers to perform an extremely wide range of tasks.",
    "what is the full form of ai": "Artificial Intelligence",
    "what is the purpose of an operating system":"An operating system (OS) is software that manages computer hardware and provides services for computer programs. Its primary purpose is to act as an intermediary between the user and the computer hardware, enabling users to interact with the computer system and run various software applications. The OS also handles tasks like memory, file, and device management.",
    "what is a browser":": A browser is a software application used to access and view websites on the internet. Examples include Google Chrome, Mozilla Firefox, and Microsoft Edge.",
    "what is cloud computing":"Cloud computing is the practice of using remote servers hosted on the internet to store, manage, and process data, instead of using local resources.",
    "what is firewall":"A firewall is a security tool that monitors and controls incoming and outgoing network traffic, helping to prevent unauthorized access and potential cyberattacks.",
    "what are the benefits of computers":"High Speed,Accuracy,Automation,Storage,Multitasking and more.",
    "what converts an entire program into machine language":"Compiler",
    "what is dos":"A DOS, or disk operating system, is an operating system that runs from a disk drive.",
    "what is nos":"A network operating system (NOS) is a computer operating system (OS) that's designed primarily to support workstations, PCs and, in some instances, older terminals that are connected on a local area network (LAN).",
    "who invented javascript":"JavaScript was invented by Brendan Eich in 1995. It was developed for Netscape 2, and became the ECMA-262 standard in 1997. After Netscape handed JavaScript over to ECMA, the Mozilla foundation continued to develop JavaScript for the Firefox browser.",
    "who invented internet":"TIM BERNERS-LEE (1955–) Creator of the World Wide Web who developed many of the principles we still use today, such as HTML, HTTP, URLs and web browsers.",
    "who invented robots":"The first digitally operated and programmable robot was invented by George Devol in 1954 and was ultimately called the Unimate. This ultimately laid the foundations of the modern robotics industry.",
    "what is the function of processor":"The processor, also known as the CPU, provides the instructions and processing power the computer needs to do its work. The more powerful and updated your processor, the faster your computer can complete its tasks. By getting a more powerful processor, you can help your computer think and work faster.",
    "what are the tips for buying a computer":"Budget. Of course, your budget is one of the most important factors to consider when choosing a PC,Processor. An important factor to consider when buying any PC is the processor.Memory,Graphics Card,Os,Warranties and returns,etc",
    "which is better laptop or pc":"The decision between a laptop and a PC ultimately hinges on your individual preferences and requirements. Laptops offer unmatched portability, making them ideal for individuals who need to work or access their digital resources while on the move. They are versatile and can serve both personal and professional purposes. On the other hand, PCs, with their fixed setup, tend to be more powerful and customizable than laptops. If you require high-performance computing for tasks like gaming, graphic design, or video editing, a PC may be the better choice. Additionally, PCs often provide more value for your money compared to laptops with similar specs. Your choice should factor in your mobility needs, computing demands, and budget constraints.",
    //science questions
    "what is the full form of co2":"Carbon Dioxide",
    "what is the full form of o2":"Oxygen",
    "explain the third law of newton":"Newton's Third Law of Motion states that for every action, there is an equal and opposite reaction. When one object exerts a force on another object, the second object exerts an equal force in the opposite direction. This law explains why objects move and interact with each other.",
    "what is oxygen":"Oxygen is a chemical element essential for life. It makes up about 21% of Earth's atmosphere and is vital for respiration, enabling organisms to extract energy from food. Oxygen is a colorless, odorless gas and plays a crucial role in supporting life on our planet.",
    "what is carbon dioxide":"Carbon dioxide (CO2) is a colorless, odorless gas composed of carbon and oxygen atoms. It's naturally present in Earth's atmosphere and is produced through various processes, including respiration, combustion, and natural geological activity. Carbon dioxide is essential for photosynthesis in plants but is also a greenhouse gas that contributes to climate change when its levels in the atmosphere increase significantly due to human activities like burning fossil fuels.",
    "what is force":"Force is a push or pull that can change an object's motion or shape. It's described by its magnitude (strength) and direction and is measured in units called Newtons (N). Forces can make objects speed up, slow down, change direction, or deform them.",
    "what is gravity":"Gravity is the natural force of attraction between two objects with mass. It is a fundamental force of nature that pulls objects with mass towards each other. The strength of this attraction depends on the masses of the objects and the distance between them. On Earth, gravity is what gives weight to objects and keeps them anchored to the ground. It's responsible for the motion of celestial bodies, such as the Earth orbiting the Sun. Sir Isaac Newton described the laws of gravity in the late 17th century, which paved the way for a better understanding of the motion of objects in the universe.",
    "what is friction":"Friction is a force that resists the motion or attempted motion of two objects in contact. It can prevent objects from moving (static friction) and opposes their motion once they're in motion (kinetic friction). It arises from the interaction between the surfaces of the objects in contact and can make it harder to slide, roll, or move objects.",
    "how many planets are there in solar system":"8",
    "what is electricity":"Electricity is a form of energy generated by the movement of charged particles, like electrons. It powers our homes, devices, and industries, enabling electrical gadgets to work, lights to shine, and much more. It's a fundamental force in the modern world.",
    "what is light":"Light is a form of electromagnetic radiation that is visible to the human eye. It consists of tiny packets of energy called photons, which travel in waves at the speed of light. Light is the reason we can see objects, colors, and the world around us. It also plays a crucial role in various natural processes, including photosynthesis, vision, and the behavior of celestial objects. Light can be produced naturally, like sunlight, or artificially, such as the light from a lamp or a screen. It has both wave-like and particle-like properties, as described by the theory of wave-particle duality in physics.",
    "what is the speed of light":"The speed of light in a vacuum is approximately 299,792,458 meters per second (about 186,282 miles per second). This value is often denoted by the symbol. It's the maximum speed at which information or energy can travel through the universe, according to Albert Einstein's theory of relativity.",
    "who is Albert Einstein":"Albert Einstein was a renowned physicist who developed the theory of relativity, one of the pillars of modern physics. He was born in Germany in 1879 and later became a Swiss and then an American citizen. His famous equation, E=mc², revolutionized our understanding of the relationship between energy, mass, and the speed of light. Einstein's work on the theory of relativity had a profound impact on physics and led to many technological advancements. He received the Nobel Prize in Physics in 1921 for his explanation of the photoelectric effect. Einstein is widely regarded as one of the most brilliant scientists in history and is known for his contributions to our understanding of space, time, and the nature of the universe.",
    "who created video games":"Video games were created through the collaborative efforts of many individuals and companies. Pioneers like Nolan Bushnell (Atari),Ralph H Baer and Shigeru Miyamoto (Nintendo) played key roles in their development. The industry has evolved over time, and today, it's a diverse field with numerous contributors.",
    "what is h2o":"Water",
    "what is the size of the earth":"Earth has an average diameter of about 12,742 kilometers (7,918 miles) and a circumference of around 40,075 kilometers (24,901 miles). Its total surface area is roughly 510.1 million square kilometers (196.9 million square miles), and its volume is approximately 1 trillion cubic kilometers (260 billion cubic miles).",
    "what are the three states of matter":"Solid,Liquid and Gas",
    "what is cng":"CNG stands for Compressed Natural Gas. It is a type of alternative fuel used primarily as a cleaner-burning substitute for gasoline and diesel in vehicles. CNG is composed mostly of methane and is stored in high-pressure tanks. It is considered environmentally friendly because it produces fewer emissions, such as carbon dioxide and nitrogen oxides, compared to traditional fossil fuels. CNG is commonly used in public transportation, commercial fleets, and some personal vehicles.",
    "there is how much distance between earth and mars":"The distance between Earth and Mars varies as both planets have elliptical orbits around the Sun. On average, Mars is about 225 million kilometers (about 140 million miles) away from Earth. However, this distance can change significantly as both planets move in their respective orbits. At its closest approach to Earth (opposition), Mars can be as close as about 54.6 million kilometers (about 33.9 million miles), while at its farthest (conjunction), it can be about 401 million kilometers (about 249 million miles) away. These distances are approximate and vary with each Mars opposition, which occurs approximately every 26 months.",
    "how many bone are there in a human body":"206 bones",
    "what is the weight of the earth":"5,974,000,000,000,000,000,000,000 kilograms). Since Earth is too big to be placed on a scale, scientists use mathematics and the laws of gravity to figure out Earth's weight.",
    "what is the first law of newton":"An object at rest tends to stay at rest, and an object in motion tends to stay in motion with the same speed and in the same direction unless acted upon by an unbalanced external force.",
    "why is the sky blue":"Sunlight reaches Earth's atmosphere and is scattered in all directions by all the gases and particles in the air. Blue light is scattered more than the other colors because it travels as shorter, smaller waves. This is why we see a blue sky most of the time.",
    "what is atmosphere":"The atmosphere is a mixture of gases that surrounds the Earth. It helps make life possible by providing us with air to breathe, shielding us from harmful ultraviolet (UV) radiation coming from the Sun, trapping heat to warm the planet, and preventing extreme temperature differences between day and night.",
    "what is black hole":"A black hole is an area in space where matter (what everything is made of) has collapsed in on itself.This means a lot of matter takes up only a tiny amount of space.",
    "why do we need food":"Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes.",
    "how is petroluem formed":"Petroleum was formed from dead organisms that got buried in the sea millions of years ago. These dead bodies got covered with layers of sand and clay. Lack of air, high temperature, and high pressure transformed these dead organisms into petroleum and natural gas.",
    "what is the smallest planet in our solar system":"Mercury",
    "what is the purpose of a solar panel":"The purpose of a solar panel is to convert sunlight into electricity.",
    //maths questions
    "what is the value of pi":"3.14159 and counting.",
    "what is a prime number":"A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. In other words, a prime number is a whole number that cannot be evenly divided by any other whole number except for 1 and itself.",
    "what is a fraction":"A fraction is a mathematical expression that represents a part or a division of a whole. It consists of two numbers separated by a horizontal line or slash (/). The number above the line is called the numerator, and the number below the line is called the denominator.",
    "explain the concept of decimals.":"Decimals are a way of representing numbers that fall between whole numbers or integers. They are a fundamental part of our number system and are used to express values that are not exact integers. The term 'decimal' comes from the Latin word 'decimus', which means tenth, and that's a key idea behind decimals: they are based on powers of 10.",
    "what is the formula for calculating the perimeter of rectangle":"2(length + breadth)",
    "what is an acute angle":"An acute angle is an angle that measures less than 90 degrees. In other words, it is an angle that is smaller than a right angle.",
    "what is a polygon":"Polygon is a simple closed figure made up of line segments.",
    "what is the formula for calculating the perimeter of a square":"Side * Side",
    "define congruent shapes.":"Congruent shapes are geometric figures that have the same size and shape.",
    "what is the formula for finding the volume of a cube?":"Side^3",
    "explain the concept of a right angled triangle.":"A right triangle is a specific type of triangle that has a unique characteristic: it contains one angle that measures exactly 90 degrees. This angle is called a right angle, and it is typically denoted by a small square placed in the corner where the right angle is formed.",
    "Define the term quadrilateral":"A quadrilateral is a polygon with four sides, four vertices (corners), and four angles. Quadrilaterals can vary widely in terms of their shape and properties, but they all share the common characteristic of having exactly four sides.",
    "what is the square root of 64":"4096",
    "explain the order of operations in mathematics.":"The order of operations, often abbreviated as PEMDAS, is a set of rules used in mathematics to determine the sequence in which calculations are performed when evaluating an expression that contains multiple operations. Following the order of operations ensures that everyone arrives at the same correct result when solving mathematical expressions. PEMDAS stands for:1. **P** - Parentheses: Perform calculations inside parentheses first. Start with the innermost parentheses and work your way out. 2. **E** - Exponents: Next, calculate any exponentiation (raising a number to a power). This includes operations like squaring (raising to the power of 2) or cubing (raising to the power of 3).3. **M** and **D** - Multiplication and Division: Perform multiplication and division from left to right. These operations have the same level of precedence, so they are done in the order they appear in the expression. 4. **A** and **S** - Addition and Subtraction: Finally, perform addition and subtraction from left to right. Like multiplication and division, these operations are done in the order they appear in the expression.Remembering PEMDAS helps avoid ambiguity in mathematical expressions and ensures that calculations are done consistently. If an expression doesn't contain parentheses or exponents, you simply work from left to right, performing multiplication and division before addition and subtraction.",
    "define the term composite numbers":"A composite number is a positive integer greater than 1 that has more than two distinct positive divisors, meaning it can be evenly divided by at least one positive integer other than 1 and itself. In other words, a composite number is a natural number that is not a prime number.",
    "what is the formula for calculating the circumference of a circle?":"pi r^2",
    "define the term equilateral triangle":"An equilateral triangle is a special type of triangle characterized by three equal-length sides and three equal interior angles. In other words, all three sides of an equilateral triangle have the same length, and all three angles inside the triangle are congruent (equal) and each measures 60 degrees.",
    "explain th concept of probability":"Probability is a mathematical concept used to quantify the likelihood or chance of an event occurring. It is a measure of uncertainty or randomness in various situations. Probability is expressed as a number between 0 and 1, where 0 represents an event that is impossible, 1 represents an event that is certain, and values between 0 and 1 represent the degree of likelihood.",
    "define the term isosceles triangle":"An isosceles triangle is a type of triangle that has two sides of equal length and two angles of equal measure",
    "explain the concept of a line segment.":"A line segment is a straight and finite portion of a straight line. It is a fundamental concept in geometry and has several defining characteristics:"
  };

  return (
    responses[userMessage.toLowerCase()] ||
    "I'm not sure how to respond to that."
  );
}

// Function to handle user input
function handleUserInput() {
  const userInput = document.getElementById("user-input");
  const userMessage = userInput.value.trim();

  if (userMessage !== "") {
    addMessage(userMessage, "user");

    // Simulate AI response
    const aiResponse = getAIResponse(userMessage);
    addMessage(aiResponse, "ai");

    userInput.value = ""; // Clear the input field
  }
}

// Event listener for the send button
const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", handleUserInput);

// Event listener for pressing Enter in the input field
const userInput = document.getElementById("user-input");
userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleUserInput();
  }
});
