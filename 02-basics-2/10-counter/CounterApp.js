import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const val = ref(0)

    const isDescDisabled = computed(() => {
      return val.value === 0
    })

    const isIncrDisabled = computed(() => {
      return val.value === 5
    })

    return {
      isDescDisabled,
      isIncrDisabled,
      val,
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="isDescDisabled"
        @click="()=> val -=1"
      >➖</button>

      <span class="count" data-testid="count">{{ val }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="isIncrDisabled"
        @click="()=> val +=1"
      >➕</button>
    </div>
  `,
})
