#include "mqtt.h"

WiFiClient espClient;
PubSubClient client(espClient);
long lastMsg = 0;
char tempString[256];

void beginMQTT()
{
    client.setServer(MQTT_SERVER, MQTT_PORT);
    client.connect(MQTT_CLIENT, MQTT_USERNAME, MQTT_PASSWORD);
    client.setCallback(callback);

    if (!client.connected())
    {
        reconnect();
    }
}

void subscribe()
{
    char subTopic[32];
    sprintf(subTopic, "%s", TOPIC_UPDATE);
    client.subscribe(subTopic);
}

void callback(char *topic, byte *message, unsigned int length)
{
    char msg[length + 1];
    msg[length] = '\0';

    for (int i = 0; i < length; i++)
        msg[i] = (char)message[i];
    Serial.printf("\n>> topic: %s msg:%s\n", topic, msg);

    if (String(topic).equals(TOPIC_UPDATE))
    {
        if (strncmp(msg, "m ", 2) == 0)
        {
            uint8_t m = (uint8_t)atoi(msg + 2);
            neopixel_setMode(m);

            Serial.printf("Set mode to %d - %s\n", m, ws2812fx_1.getModeName(ws2812fx_1.getMode()));

            // Update via Status Channel
            sprintf(tempString, "Set mode to %d - %s\n", m, ws2812fx_1.getModeName(ws2812fx_1.getMode()));
            client.publish(TOPIC_STATUS, tempString, true);
        }
    }
}

void reconnect()
{
    // Loop until we're reconnected
    while (!client.connected())
    {
        Serial.print("Attempting MQTT connection...");

        // Attempt to connect
        if (client.connect(MQTT_CLIENT, MQTT_USERNAME, MQTT_PASSWORD))
        {
            Serial.println("connected");
            subscribe();
        }
        else
        {
            Serial.print("failed, rc=");
            Serial.print(client.state());
            Serial.println(" try again in 3 seconds");

            // Wait 3 seconds before retrying
            delay(3000);
        }
    }
}
