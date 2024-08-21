import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstInputVal = ref(0)
    const secondInputVal = ref(0)

    const operator = ref('sum')

    const outputVal = computed(() => {
      switch (operator.value) {
        case 'sum':
          return firstInputVal.value + secondInputVal.value
        case 'subtract':
          return firstInputVal.value - secondInputVal.value
        case 'multiply':
          return firstInputVal.value * secondInputVal.value
        case 'divide':
          return firstInputVal.value / secondInputVal.value

        default:
          return 0
      }
    })

    return {
      firstInputVal,
      outputVal,
      secondInputVal,
      operator,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstInputVal" />

      <div class="calculator__operators" >
        <label><input type="radio" name="operator" v-model="operator" value="sum"/>➕</label>
        <label><input type="radio" name="operator" v-model="operator" value="subtract"/>➖</label>
        <label><input type="radio" name="operator" v-model="operator" value="multiply"/>✖</label>
        <label><input type="radio" name="operator" v-model="operator" value="divide"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondInputVal"  />

      <div>=</div>

      <output>{{ outputVal }}</output>
    </div>
  `,
})
