const Redis = require("ioredis");

const redis = new Redis();

// Function to read input from command line and publish message
const readInputAndPublish = () => {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Prompt user to enter a message
  rl.question('Enter message to publish: ', (message) => {
    // Publish the message to the channel
    redis.publish("channel_pub_sub", JSON.stringify({ message }));
    console.log('Message published successfully');
    rl.close();
    // Recursive call to read next input
    //readInputAndPublish();
  });
};

// Call the function to start reading input and publishing messages
readInputAndPublish();
