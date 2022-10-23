
#include <Arduino.h>
#include "define.h"
#include "neopixel.h"

#ifndef UNIT_TEST

void setup()
{

    // Enables Serial Communication with baudRate of 115200
    Serial.begin(115200);
    Serial.println("PlatformIO ESP32 Boilerplate started...");

    neopixel_begin();
}

void loop()
{
    // Red
    Serial.println("Red");
    setColor(255, 0, 0);
    delay(3000);

    // Green
    Serial.println("Green");
    setColor(0, 255, 0);
    delay(3000);

    // Blue
    Serial.println("Blue");
    setColor(0, 0, 255);
    delay(3000);
}

#endif
