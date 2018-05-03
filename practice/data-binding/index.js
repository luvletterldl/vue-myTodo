import Vue from 'vue'

new Vue({
  el: '#root',
  // template: `
  //   <div :id="divId" @click="handleClick">
  //     {{arr.join('-')}}
  //     {{Date.now()}}
  //     <p v-html='html'></p>
  //   </div
  // `,
  template: `
    <div
      :class="[{ active : !isActive }]"
      :style="[styles,styles2]"
    >
      <p>{{getJoinedArr(arr)}}</p>
      {{Date.now()}}
      <p v-html='html'></p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<sapn>123</span>',
    divId: 'main',
    styles: {
      color: 'red',
      appearance: 'none'
    },
    styles2: {
      color: 'blue'
    }
  },
  methods: {
    handleClick () {
      alert('clicked') //eslint-disable-line
    },
    getJoinedArr (arr) {
      return arr.join('-')
    }
  }
})
