import { Kafka } from "kafkajs";
import kafkaInterface from './kafkaInterface';

class KafkaClass implements kafkaInterface  {
    
    private producer;
    

    constructor(){
        const kafka = new Kafka({
            clientId:'my-app',
            brokers:['localhost:9092']
        })

       this.producer = kafka.producer();
    //    this.producer.connect();
    }
    
    async  connect() {
        await this.producer.connect();
    }
     
    async disconnect() {
        await this.producer.disconnect();
    }
    
     async sendMessage(topic: string,message: string) {
         await this.producer.send({topic,messages:[{value:message}] })
     }

}

export default KafkaClass;