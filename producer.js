import { Kafka } from "kafkajs";

const client = new Kafka({ brokers: ["localhost:9092"], clientId: "myapp" });

// can create topics
const producer = client.producer();

async function run() {
  try {
    await producer.connect();
    await producer.send({ 
        topic: "notification", 
        messages:[{value:"Hello, This is a new message", partition: 0}]})
    console.log("Sent!");
  } catch (error) {
    console.log(error);
  } finally{
    await producer.disconnect();
  }
}
run();