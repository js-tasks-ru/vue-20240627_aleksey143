import { defineComponent } from 'vue'
import { getWeatherData } from '../weather.service.ts'
import WeatherItem from './weather-item.ts'

export default defineComponent({
  name: 'WeatherList',
  components: { WeatherItem },

  setup() {
    const list = getWeatherData()

    return {
      list,
    }
  },

  template: `
    <ul class="weather-list unstyled-list">
      <template v-for="item in list">
        <WeatherItem :item="item"/>
      </template>
    </ul>
  `,
})
