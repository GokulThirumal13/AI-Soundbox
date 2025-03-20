const mqtt = require('mqtt');

const options = {
    host: '0b9888df92bf42ab82d56106d0ae8e1d.s1.eu.hivemq.cloud',           
    port: 8883,
    protocol: 'mqtts',
    username: 'hivemq.webclient.1742489466392',
    password: ',<21e3S.>h0RVQyzTa0q'
};
const client = mqtt.connect(options);

client.on('connect', () => {
    console.log("✅ Publisher connected to HiveMQ Cloud");

    const random = Math.random() * 50;
    const message = `HiveMQ Cloud MQTT Test: ${random.toFixed(2)}`;

    client.publish('Gokul', message, { qos: 0 }, (err) => {
        if (err) {
            console.error("❌ Publish error:", err);
        } else {
            console.log("📤 Published:", message);
        }

        client.end(); 
    });
});