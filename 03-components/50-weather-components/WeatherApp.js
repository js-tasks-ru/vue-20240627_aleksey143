import { defineComponent } from 'vue'
import WeatherList from './components/weather-list'

export default defineComponent({
  name: 'WeatherApp',
  components: { WeatherList },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <WeatherList/>
    </div>
  `,
})
