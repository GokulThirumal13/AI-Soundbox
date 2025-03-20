const mqtt = require('mqtt');

const options = {
    host: '0b9888df92bf42ab82d56106d0ae8e1d.s1.eu.hivemq.cloud',           
    port: 8883,
    protocol: 'mqtts',
    username: 'hivemq.webclient.1742489466392',
    password: ',<21e3S.>h0RVQyzTaOq'
};

const client = mqtt.connect(options);

client.on('connect', () => {
    console.log("✅ Subscriber connected to HiveMQ Cloud");

    client.subscribe('Gokul', { qos: 0 }, (err) => {
        if (err) {
            console.error("❌ Subscribe error:", err);
        } else {
            console.log("📥 Subscribed to topic: Gokul");
        }
    });
});

client.on('message', (topic, message) => {
    console.log(`📨 Message received on ${topic}: ${message.toString()}`);


    client.end();
});