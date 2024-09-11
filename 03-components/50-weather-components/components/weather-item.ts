import { computed, defineComponent, type PropType } from 'vue'
import { WeatherConditionIcons, type WeatherData } from '../weather.service.ts'

import { convertTime } from '../utils.ts'
import WeatherDetailsItem from './weather-details-item.vue'
import WeatherAlert from './weather-alert.vue'
import WeatherConditions from './weather-conditions.vue'

export default defineComponent({
  name: 'WeatherItem',
  components: { WeatherDetailsItem, WeatherAlert, WeatherConditions },
  props: {
    item: {
      type: Object as PropType<WeatherData>,
      required: true,
    },
  },

  setup(props) {
    const alertTitle = computed(() => `${props.item?.alert?.sender_name}: ${props.item?.alert?.description}`)

    const temp = (props.item.current.temp - 273.15).toFixed(1)

    const icon = computed(() => WeatherConditionIcons[props.item.current.weather.id])

    const pressure = computed(() => (props.item.current.pressure * 0.75).toFixed(0))

    const tdMinutes = computed(() => convertTime(props.item.current.dt))

    const isNight = computed(
      () =>
        tdMinutes.value > convertTime(props.item.current.sunset) &&
        tdMinutes.value < convertTime(props.item.current.sunrise),
    )

    return {
      alertTitle,
      temp,
      icon,
      press: pressure,
      isNight,
    }
  },

  template: `
    <li class="weather-card" :class="{ 'weather-card--night': isNight }">
      <WeatherAlert v-if="item.alert" :title="alertTitle" />
      <div>
        <h2 class="weather-card__name">
          {{ item.geographic_name }}
        </h2>
        <div class="weather-card__time">
          {{ item.current.dt }}
        </div>
      </div>
      <WeatherConditions :title="item.current.weather.description" :icon="icon" :temp="temp" />
      <div class="weather-details">
        <WeatherDetailsItem label="Давление, мм рт. ст." :value="press"/>
        <WeatherDetailsItem label="Влажность, %" :value="item.current.humidity"/>
        <WeatherDetailsItem label="Облачность, %" :value="item.current.clouds"/>
        <WeatherDetailsItem label="Ветер, м/с" :value="item.current.wind_speed"/>
      </div>
    </li>
  `,
})
