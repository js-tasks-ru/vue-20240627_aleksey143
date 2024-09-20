<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherAlert',
  props: {
    icon: {
      type: String,
      default: '⚠️',
    },

    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <div class="weather-alert">
    <span class="weather-alert__icon">{{ icon }}</span>
    <span class="weather-alert__description">{{ title }}</span>
  </div>
</template>
