
#include <Arduino.h>
#include "define.h"
#include "neopixel.h"
#include "wifi.h"
#include "mqtt.h"

void setup()
{
    Serial.begin(115200);
    neopixel_begin();

    beginWiFi();
    beginMQTT();

    subscribe();
}

void loop()
{
    if (!client.connected())
        reconnect();
    client.loop();

    ws2812fx_1.service();
    ws2812fx_2.service();

    recvChar(); // read serial comm

    if (scmd_complete)
    {
        process_command();
    }
}
