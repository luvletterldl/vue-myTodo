import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div>
      <p v-if="active">If:{{html}}</p>
      <p v-else-if="active">Else If:{{html}}</p>
      <p v-else>Else: {{html}}</p>
      <div v-show='!active'>{{text}}</div>
      <div v-html="html"></div>
      <input type="text" v-model.lazy="text">
      <input type="checkbox" v-model="active">
      <p>
        <input type="checkbox" :value="1" v-model="arr">
        <input type="checkbox" :value="2" v-model="arr">
        <input type="checkbox" :value="3" v-model="arr">
        <input type="checkbox" :value="4" v-model="arr">
      </p>
      <p>
        <input type="radio" value="one" v-model="picked">
        <input type="radio" value="two" v-model="picked">
      </p>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}}:{{index}}</li>
      </ul>
      <ul>
        <li v-for="(val, key, index) in obj">{{val}}:{{key}}:{{index}}</li>
      </ul>
    </div>
  `,
  data: {
    arr: [1, 2, 3, 4],
    obj: {
      a: '666',
      b: '333',
      c: '233',
      d: '9527'
    },
    text: 0,
    active: false,
    html: '<span>this is html</span>',
    picked: ''
  }
})
