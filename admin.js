const { kafka } = require("./client");

async function init() {
    const admin = kafka.admin();
    console.log("Admin connection...");
    admin.connect();
    console.log("Admin connection successful..");
    console.log("Creating Topic: [rider-update]");
    await admin.createTopics({
        topics: [
            {
                topic: "rider-update",
                numPartitions: 2,
            },
        ],
    });
    console.log("Topic created successfully...");
    console.log("Disconnecting admin...");
    await admin.disconnect();
}
init();
