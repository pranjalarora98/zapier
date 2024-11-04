interface KafkaInterface {
    sendMessage :(topic: string,message: string)=>void;
    disconnect: Function;
    connect: Function;
}

export default KafkaInterface;