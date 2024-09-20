import { defineComponent, onMounted, onUnmounted, ref } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref('')

    const timerId = ref()

    const createTime = () => {
      const d = new Date()

      currentTime.value = d.toLocaleTimeString(navigator.language, { timeStyle: 'medium' })
    }

    onMounted(() => {
      createTime()

      timerId.value = setInterval(() => {
        createTime()
      }, 1000)
    })

    onUnmounted(() => {
      clearTimeout(timerId.value)
    })

    return {
      currentTime,
    }
  },

  template: `<div class="clock">{{ currentTime }}</div>`,
})
