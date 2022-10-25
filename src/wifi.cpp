#include "wifi.h"

void beginWiFi()
{
    WiFi.mode(WIFI_STA);
    WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
    Serial.println("");

    int startTime = millis();

    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
        Serial.print(".");

        if ((millis() - startTime) > 10 * 1000)
        {
            // allow 20sec, if not connected, reset
            ESP.restart();
        }
    }
    Serial.println("");
    Serial.println("WiFi: Connected");
}