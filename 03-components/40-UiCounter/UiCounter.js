import { computed, defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true,
    },

    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    },
  },

  emits: ['update:count'],
  setup(props, { emit }) {
    const countValue = computed({
      get() {
        return props.count
      },
      set(value) {
        emit('update:count', value)
      },
    })

    return {
      countValue,
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="countValue === min" @click="countValue -=1">➖</UiButton>
      <span class="count" data-testid="count">{{ countValue }}</span>
      <UiButton :disabled="countValue === max" @click="countValue +=1" aria-label="Increment">➕</UiButton>
    </div>
  `,
})
