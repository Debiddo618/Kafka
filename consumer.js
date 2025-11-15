import { Kafka } from "kafkajs";

const client = new Kafka({ brokers: ["localhost:9092"], clientId: "myapp" });

// can create topics
const consumer = client.consumer({ groupId: "notification-group" });

async function run() {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: "notification", fromBeginning: true });
    await consumer.run({
        eachMessage: (payload) => {
            // throw new Error("HardCoded Error");
            console.log("-------------------- Message Starts --------------------------------")
            console.log(payload.topic);
            console.log(payload.partition);
            console.log(payload.message.value.toString());
            console.log(payload.message.offset);
            console.log("-------------------- Message Ends --------------------------------")
        }
    });
  } catch (error) {
    console.log(error);
  }
}
run();
