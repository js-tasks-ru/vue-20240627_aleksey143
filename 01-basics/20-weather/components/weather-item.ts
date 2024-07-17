import { defineComponent, type PropType } from 'vue'
import { WeatherConditionIcons, type WeatherData } from '../weather.service.ts'

import { convertTime } from '../utils.ts'

export default defineComponent({
  name: 'WeatherItem',

  props: {
    item: {
      type: Object as PropType<WeatherData>,
      required: true,
    },
  },

  setup(props) {
    const alertTitle = `${props.item?.alert?.sender_name}: ${props.item?.alert?.description}`

    const temp = (props.item.current.temp - 273.15).toFixed(1)

    const icon = WeatherConditionIcons[props.item.current.weather.id]
    const pressure = (props.item.current.pressure * 0.75).toFixed(0)

    const tdMinutes = convertTime(props.item.current.dt)

    const isNight =
      tdMinutes > convertTime(props.item.current.sunset) && tdMinutes < convertTime(props.item.current.sunrise)

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
      <div v-if="item.alert" class="weather-alert">
        <span class="weather-alert__icon">⚠️</span>
        <span class="weather-alert__description">{{ alertTitle }}</span>
      </div>
      <div>
        <h2 class="weather-card__name">
          {{ item.geographic_name }}
        </h2>
        <div class="weather-card__time">
          {{ item.current.dt }}
        </div>
      </div>
      <div class="weather-conditions">
        <div class="weather-conditions__icon" :title="item.current.weather.description">{{icon}}️</div>
        <div  class="weather-conditions__temp">{{temp}} °C</div>
      </div>
      <div class="weather-details">
        <div class="weather-details__item">
          <div class="weather-details__item-label">Давление, мм рт. ст.</div>
          <div class="weather-details__item-value">{{ press }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Влажность, %</div>
          <div class="weather-details__item-value">{{ item.current.humidity }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Облачность, %</div>
          <div class="weather-details__item-value">{{ item.current.clouds }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Ветер, м/с</div>
          <div class="weather-details__item-value">{{ item.current.wind_speed }}</div>
        </div>
      </div>
    </li>
  `,
})
