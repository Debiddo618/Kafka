import { Kafka } from "kafkajs";

const client = new Kafka({ brokers: ["localhost:9092"], clientId: "myapp" });

// can create topics
const admin = client.admin();

async function run() {
  try {
    await admin.connect();
    await admin.createTopics({
      topics: [{ topic: "notification", numPartitions: 3 }],
    });
    console.log("Topic Created!");
  } catch (error) {
    console.log(error);
  } finally{
    await admin.disconnect();
  }
}

run();