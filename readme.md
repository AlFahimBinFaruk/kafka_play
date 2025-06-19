## Kafka Tutorial
* Client: Common kafka initialization.
* Admin: Used to create topics and partition for each topic
* Consumer: Used to consume the messages.
* Producer: Used to send the messages.
### Run the docker image
```cmd
docker run -p 9092:9092 \
  -e CLUSTER_ID=abcd1234ef567890abcd1234ef567890 \
  -e KAFKA_PROCESS_ROLES=broker,controller \
  -e KAFKA_NODE_ID=1 \
  -e KAFKA_CONTROLLER_QUORUM_VOTERS=1@localhost:9093 \
  -e KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092,CONTROLLER://0.0.0.0:9093 \
  -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://172.16.208.74:9092 \
  -e KAFKA_CONTROLLER_LISTENER_NAMES=CONTROLLER \
  -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
  confluentinc/cp-kafka:latest
```

### Test service
```cmd
node admin.js
node consumer.js group-1
node producer.js
```