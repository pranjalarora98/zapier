import KafkaClass from "./kafka";

let kafkaInstance:KafkaClass;

const getInstance = () => {
    if(kafkaInstance)
        return kafkaInstance;
    else
    {
        kafkaInstance = new KafkaClass();
        return kafkaInstance;
    }
}