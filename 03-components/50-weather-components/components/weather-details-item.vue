<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherDetailsItem',

  props: {
    label: {
      type: String,
      required: true,
    },

    value: {
      type: [String, Number],
      required: true,
    },
  },
})
</script>

<template>
  <div class="weather-details__item">
    <div class="weather-details__item-label">{{ label }}</div>
    <div class="weather-details__item-value">{{ value }}</div>
  </div>
</template>
