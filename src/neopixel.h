
// Input a value 0 to 255 to get a color value.
#pragma once

#include "Arduino.h"
#include <Adafruit_NeoPixel.h>

#define NUMPIXELS 30
#define PIN_NEOPIXEL 25

extern Adafruit_NeoPixel strip;

void neopixel_begin();

void setColor(uint8_t r, uint8_t g, uint8_t b);

uint32_t Wheel(byte WheelPos);

void colorWipe(uint32_t c, uint8_t wait);

void rainbow(uint8_t wait);