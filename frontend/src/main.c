#include<reg51.h>
void delay(int);
sbit btn=P1^0;
int main(void){
    char ch=0x55;
    p0=0x00;
    while (1)
    {
      btn=1;
      if (btn==0)
      {
       p0=ch;
       ch=-ch;
       delay(30000);
      }
      
    }
    
}
void delay(int a){
    int i=1;
    for ( i = 0; i < a; i++)
    {
        
    }
    
}