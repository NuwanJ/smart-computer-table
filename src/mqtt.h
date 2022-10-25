#pragma once

#include <PubSubClient.h>
#include <Arduino.h>
#include "wifi.h"
#include "config/config.h"
#include "neopixel.h"

extern WiFiClient espClient;
extern PubSubClient client;
extern long lastMsg;
extern char tempString[];

#define TOPIC_UPDATE "v1/table/update"
#define TOPIC_STATUS "v1/table/status"

void beginMQTT();

void subscribe();
void callback(char *topic, byte *message, unsigned int length);

void reconnect();
