#include "neopixel.h"

WS2812FX ws2812fx_1 = WS2812FX(LED_COUNT_1, LED_PIN_1, NEO_GRB + NEO_KHZ800);
WS2812FX ws2812fx_2 = WS2812FX(LED_COUNT_2, LED_PIN_2, NEO_GRB + NEO_KHZ800);

char scmd[MAX_NUM_CHARS];   // char[] to store incoming serial commands
bool scmd_complete = false; // whether the command string is complete

void neopixel_begin()
{
    ws2812fx_1.init();
    ws2812fx_1.setBrightness(NEOPIXEL_BRIGHTNESS);
    ws2812fx_1.setSpeed(1000);
    // ws2812fx_1.setColor(0x007BFF);
    ws2812fx_1.setMode(FX_MODE_STATIC);
    ws2812fx_1.start();

    ws2812fx_2.init();
    ws2812fx_2.setBrightness(NEOPIXEL_BRIGHTNESS);
    ws2812fx_2.setSpeed(1000);
    // ws2812fx_2.setColor(0x007BFF);
    ws2812fx_2.setMode(FX_MODE_STATIC);
    ws2812fx_2.start();

    printModes();
    printUsage();
}

void neopixel_setMode(uint8_t mode)
{
    ws2812fx_1.setMode(mode);
    ws2812fx_2.setMode(mode);
}

void setColor(uint8_t r, uint8_t g, uint8_t b)
{
    ws2812fx_1.setColor(r, g, b);
    ws2812fx_2.setColor(r, g, b);
}

void process_command()
{
    if (strcmp(scmd, "b+") == 0)
    {
        ws2812fx_1.increaseBrightness(25);
        ws2812fx_2.increaseBrightness(25);
        Serial.print(F("Increased brightness by 25 to: "));
        Serial.println(ws2812fx_1.getBrightness());
    }

    if (strcmp(scmd, "b-") == 0)
    {
        ws2812fx_1.decreaseBrightness(25);
        ws2812fx_2.decreaseBrightness(25);
        Serial.print(F("Decreased brightness by 25 to: "));
        Serial.println(ws2812fx_1.getBrightness());
    }

    if (strncmp(scmd, "b ", 2) == 0)
    {
        uint8_t b = (uint8_t)atoi(scmd + 2);
        ws2812fx_1.setBrightness(b);
        ws2812fx_2.setBrightness(b);
        Serial.print(F("Set brightness to: "));
        Serial.println(ws2812fx_1.getBrightness());
    }

    if (strcmp(scmd, "s+") == 0)
    {
        ws2812fx_1.setSpeed(ws2812fx_1.getSpeed() * 1.2);
        ws2812fx_2.setSpeed(ws2812fx_2.getSpeed() * 1.2);
        Serial.print(F("Increased speed by 20% to: "));
        Serial.println(ws2812fx_1.getSpeed());
    }

    if (strcmp(scmd, "s-") == 0)
    {
        ws2812fx_1.setSpeed(ws2812fx_1.getSpeed() * 0.8);
        ws2812fx_2.setSpeed(ws2812fx_2.getSpeed() * 0.8);
        Serial.print(F("Decreased speed by 20% to: "));
        Serial.println(ws2812fx_1.getSpeed());
    }

    if (strncmp(scmd, "s ", 2) == 0)
    {
        uint16_t s = (uint16_t)atoi(scmd + 2);
        ws2812fx_1.setSpeed(s);
        ws2812fx_2.setSpeed(s);
        Serial.print(F("Set speed to: "));
        Serial.println(ws2812fx_1.getSpeed());
    }

    if (strncmp(scmd, "m ", 2) == 0)
    {
        uint8_t m = (uint8_t)atoi(scmd + 2);
        neopixel_setMode(m);

        Serial.print(F("Set mode to: "));
        Serial.print(ws2812fx_1.getMode());
        Serial.print(" - ");
        Serial.println(ws2812fx_1.getModeName(ws2812fx_1.getMode()));
    }

    if (strncmp(scmd, "c ", 2) == 0)
    {
        uint32_t c = (uint32_t)strtoul(scmd + 2, NULL, 16);
        ws2812fx_1.setColor(c);
        ws2812fx_2.setColor(c);
        Serial.print(F("Set color to: 0x"));
        Serial.println(ws2812fx_1.getColor(), HEX);
    }

    scmd[0] = '\0';        // reset the commandstring
    scmd_complete = false; // reset command complete
}

/*
 * Prints a usage menu.
 */
const char usageText[] PROGMEM = R"=====(
Usage:
m <n> : select mode <n>

b+    : increase brightness
b-    : decrease brightness
b <n> : set brightness to <n>

s+    : increase speed
s-    : decrease speed
s <n> : set speed to <n>

c 0x007BFF : set color to 0x007BFF

Have a nice day.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
)=====";

void printUsage()
{
    Serial.println((const __FlashStringHelper *)usageText);
}

/*
 * Prints all available WS2812FX_1 blinken modes.
 */
void printModes()
{
    Serial.println(F("Supporting the following modes: "));
    Serial.println();
    for (int i = 0; i < ws2812fx_1.getModeCount(); i++)
    {
        Serial.print(i);
        Serial.print(F("\t"));
        Serial.println(ws2812fx_1.getModeName(i));
    }
    Serial.println();
}

/*
 * Reads new input from serial to scmd string. Command is completed on \n
 */
void recvChar(void)
{
    static byte index = 0;
    while (Serial.available() > 0 && scmd_complete == false)
    {
        char rc = Serial.read();
        if (rc != '\n')
        {
            if (index < MAX_NUM_CHARS)
                scmd[index++] = rc;
        }
        else
        {
            scmd[index] = '\0'; // terminate the string
            index = 0;
            scmd_complete = true;
            Serial.print("received '");
            Serial.print(scmd);
            Serial.println("'");
        }
    }
}