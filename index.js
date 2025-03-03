const fs = require('fs').promises;

const displayMessage = async () => {
    return "Hello, this is a Promise in Node.js!";
};

const createFile = async () => {
    try {
        const message = await displayMessage();
        await fs.writeFile("message.txt", message);
        console.log("File created successfully with message!");
    } catch (error) {
        console.error("Error creating file:", error);
    }
};

createFile();
