// MQTT
const TOPIC_UPDATE = "v1/table/update";
const TOPIC_STATUS = "v1/table/status";

const def_settings = {
  server: "broker.hivemq.com",
  port: 8000,
  path: "/",
};

const saved_settings = localStorage.getItem("settings");
const settings = JSON.parse(saved_settings) || def_settings;
console.log("Settings: ", settings);

const mqtt_server = settings.server;
const mqtt_port = settings.port;
const mqtt_path = settings.path;

const client_id = "client_" + Math.random().toString(36).substring(2, 15);

var client = new Paho.MQTT.Client(mqtt_server, mqtt_port, mqtt_path, client_id);

function mqttConnect() {
  client.connect({
    onSuccess: onConnect,
    // userName: "swarm_user",
    // password: "swarm_usere15",
    useSSL: true,
    keepAliveInterval: 360,
    cleanSession: false,
    onSuccess: () => {
      console.log(">> MQTT: Success");
      //   onConnect();

      client.onMessageArrived = onMessageArrived;
      client.onConnectionLost = onConnectionLost;

      client.subscribe(TOPIC_STATUS);
    },
    onFailure: () => {
      console.log("MQTT: connection failed");
    },
  });
}

function onConnect() {}

function sendCommand(text) {
  try {
    message = new Paho.MQTT.Message(text);
    message.destinationName = TOPIC_UPDATE;
    client.send(message);

    console.log("> Send: ", text);
  } catch (err) {}
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:" + responseObject.errorMessage);
  }
}

function update(str) {}
function onMessageArrived(message) {
  const result = message.payloadString.trim();
  const topic = message.destinationName;

  console.log(topic, result);
  $("#status").text(result);
}
