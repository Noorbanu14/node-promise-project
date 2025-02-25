const fs = require('fs').promises;

const displayMessage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, this is a Promise in Node.js!");
        }, 2000);
    });
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
