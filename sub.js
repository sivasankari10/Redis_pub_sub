const Redis = require("ioredis");

const redis = new Redis();

// Function to subscribe to channel and listen for messages
const subscribeToChannel = () => {
  redis.subscribe("channel_pub_sub", (err, count) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`Subscribed to ${count} channels`);
    }
  });

  redis.on("message", (channel, message) => {
    console.log(`Received message from ${channel}:`, JSON.parse(message));
  });

  redis.on("error", (err) => {
    console.error('Redis error:', err);
  });
};

// Call the function to start subscribing to the channel
subscribeToChannel();
