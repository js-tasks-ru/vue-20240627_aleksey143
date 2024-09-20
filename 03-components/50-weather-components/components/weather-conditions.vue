<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherConditions',
  props: {
    icon: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    temp: {
      type: String,
      required: true,
    },
  },
})
</script>

<template>
  <div class="weather-conditions">
    <div class="weather-conditions__icon" :title="title">{{ icon }}️</div>
    <div class="weather-conditions__temp">{{ temp }} °C</div>
  </div>
</template>

<style scoped></style>
