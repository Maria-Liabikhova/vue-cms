// События во vue распространяются по стандартной модели: три стадии прохода события:
// 1) CAPTURE STAGE Сверху внихз (стадия перехвата )
// 2) TARGET STAGE Событие достигло целевого элемента
// 3) событие начинает всплывать (стадия всплытия)

// МОДИФИКАТОРЫ ВЛИЯЮТ НА СТАДИИ ПРОХОДА СОБЫТИЯ 
// .stop (отменяет высплытие события)
// .prevent (отменяет загрузку событийПоУмолчанию (проход по ссылкам, перезагр.страницы и т.д))
// .capture (событие нацеленное на внутренний элемент. Обрабатывается до обработки этим элементом)
// .self (помогает вызывать обработчик только в случае наступления события непосредственно на данном элементе)
// .once (событие срабатывает только один раз)
// .passive
<template>
  <div>
    <h1>EventModifiers</h1>
    <hr>
    <hr>
    <h2> Counter: {{count}}</h2>
    <button @click.once="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <!-- <h2><a href="http://google.com" target="_blank" @click="onGoogle">Google</a></h2> -->
    <h2><a href="http://google.com" target="_blank" @click.prevent>Google</a></h2>
    <br><router-link class="home-link" to="/">Home Page</router-link>
  </div>
</template>

<script>
export default {
  name: 'EventModifiers',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addCount: function(num) {
      this.count+=num
    },
    // onGoogle: function(event) {
    //   event.preventDefault()
    // }
  }
}
</script>