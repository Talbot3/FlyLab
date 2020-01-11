
#include <pthread.h> // 引入pthread头文件
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

// 互斥锁变量
pthread_mutex_t mutex;
// 条件变量
pthread_cond_t condition;

// 模拟生产出的产品、任务队列
int task;

// 生产者线程执行函数
void *thread_producer(void *arg) {
  // 模拟不断的生产产品，产生任务
  for (;;) {
    // 加锁，加锁是为了在有多个生产者线程的时候保持互斥关系（当然我这只有一个生产者线程）
    pthread_mutex_lock(&mutex);

    // 模拟添加生产一个产品、任务到队列中
    task++;
    printf("producter produce product\n");
    // 通过条件变量，通知消费者线程有产品、任务可以消费
    pthread_cond_signal(&condition);
    // 通知打印
    printf("producter singal\n");

    // 解锁
    pthread_mutex_unlock(&mutex);

    // 控制下生产产品的速度
    sleep(1);
  }
}

// 消费者线程执行函数
void *thread_consumer(void *arg) {
  for (;;) {
    // 加锁，加锁是为了在有多个消费者线程的时候保持互斥关系（当然我这只有一个消费者线程）
    pthread_mutex_lock(&mutex);

    while (task == 0) {
      // 模拟，没有产品、任务的时候，等待生产者生产产品、任务
      pthread_cond_wait(&condition, &mutex);
    }
    // 模拟有产品，消费产品、任务
    task--;
    printf("custom product\n");
    sleep(1);

    // 解锁
    pthread_mutex_unlock(&mutex);
  }
}

int main() {
  // 初始化互斥锁、条件变量
  pthread_mutex_init(&mutex, NULL);
  pthread_cond_init(&condition, NULL);

  // 创建一个生产者、一个消费者线程
  pthread_t tid_producer, tid_consumer;
  pthread_create(&tid_producer, NULL, thread_producer, NULL);
  pthread_create(&tid_consumer, NULL, thread_consumer, NULL);

  // 等待生产者和消费者线程执行完成
  pthread_join(tid_producer, NULL);
  pthread_join(tid_consumer, NULL);

  // 销毁回收互斥锁、条件变量
  pthread_mutex_destroy(&mutex);
  pthread_cond_destroy(&condition);
  return 0;
}
