const displayMessage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello, this is a Promise in Node.js!");
        }, 2000);
    });
};

displayMessage().then(message => console.log(message)).catch(err => console.error(err));
