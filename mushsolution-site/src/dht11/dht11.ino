// Aqui nós importamos o módulo do DHT
#include "DHT.h"
#define dht_type DHT11
// Aqui nós definimos para o Arduino o sensor DHT, na porta 0
int dht_pin = A0;
DHT dht_1 = DHT(dht_pin, dht_type);

// Declaração da velocidade de transferência de dados da porta USB
void setup(){
  Serial.begin(9600);
  dht_1.begin();
}

// Algoritmo que fará a leitura de dados do sensor e mostrará na tela
void loop() {
  float umidade = dht_1.readHumidity();
  float temperatura = dht_1.readTemperature();
  if (isnan(temperatura) or isnan(umidade)) {
    Serial.println("Erro ao ler o DHT");
  } else {
    Serial.print(umidade);
    Serial.print(";");
    Serial.println(temperatura);
  }
  delay(2000);
}
