#pragma once

#include "Arduino.h"
#define REDUCED_MODES // sketch too big for Arduino Leonardo flash, so invoke reduced modes
#include <WS2812FX.h>

#define LED_COUNT_1 40
#define LED_COUNT_2 16

#define LED_PIN_1 23
#define LED_PIN_2 22

#define MAX_NUM_CHARS 16 // maximum number of characters read from the Serial Monitor
#define NEOPIXEL_BRIGHTNESS 168

extern WS2812FX ws2812fx_1;
extern WS2812FX ws2812fx_2;
extern char scmd[MAX_NUM_CHARS];
extern bool scmd_complete;

void neopixel_begin();

void setColor(uint8_t r, uint8_t g, uint8_t b);

void process_command();
void process_command(char *cmd);

void neopixel_setMode(uint8_t mode);
void printUsage();
void printModes();
void recvChar(void);