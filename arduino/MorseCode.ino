const int PORT = 13;

int F[] = {150, 150, 400, 150};
int A[] = {150, 400};
int C[] = {400, 150, 400, 150};
int I[] = {150, 150};
int S[] = {150, 150, 150};

void setup()
{
  pinMode(PORT, OUTPUT);
  // link: https://programmingelectronics.com/using-the-print-function-with-arduino-part-1/
  Serial.begin(9600);
}

void showMorseCode(int time[])
{
  for (int i = 0; i < sizeof(time); i++){
    digitalWrite(PORT, HIGH);
    delay(time[i]);
    digitalWrite(PORT, LOW);
    delay(time[i]);
  }

  Serial.println("Console test");
}

void loop()
{
  showMorseCode(F);
  showMorseCode(A);
  showMorseCode(C);
  showMorseCode(I);
  showMorseCode(S);
  showMorseCode(A);
  delay(5000);
}
