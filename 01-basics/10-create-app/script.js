import { defineComponent, createApp } from 'vue/dist/vue.esm-bundler.js'

const App = defineComponent({
  name: 'App',

  setup() {
    const date = new Date().toLocaleDateString('en-US', { dateStyle: 'long' })

    return {
      date,
    }
  },

  template: `
<div>
  Сегодня {{date}}
</div>
  `,
})

const app = createApp(App)

app.mount('#app')
