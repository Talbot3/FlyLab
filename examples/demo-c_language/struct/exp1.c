#include <stdio.h>
struct weapon {
  char name[20];
  int atk;
  int price;
};

union weap {
  char name[20];
  int atk;
  int price;
};

int main() {
  struct weapon weapon_1 = {"weapon_name", 100, 200 };
  printf("%s\n,%d\n", weapon_1.name, weapon_1.price);

  struct weapon weapon_2[2] = {{"weapon_anme1", 100, 200}, {"weapon_name2", 101, 201} };
  printf("weapon_array index:%d  %s, %d %d \n",0,  weapon_2[0].name, weapon_2[0].atk, weapon_2[0].price);

  printf("weapon_array index:%d  %s, %d %d \n",1,  weapon_2[1].name, weapon_2[1].atk, weapon_2[1].price);

  struct weapon* p;
  p = &weapon_1;
  printf("%s\n,%d\n", p->name, p->price);

  struct weapon* p2;
  p2 = weapon_2;

  printf("p2_array index:%d  %s, %d %d \n",0,  p2->name, p2->atk, p2->price);
  p2++;
  printf("p2_array index:%d  %s, %d %d \n",0,  p2->name, p2->atk, p2->price);

  union weap wp = {20};
  printf("value: %d %p,%p,%p\n",wp.atk, &wp.name, &wp.atk, &wp.price);

}
