import { defineComponent, ref, watchEffect } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const selectedMeetupId = ref(1)

    const currentMeetup = ref()

    watchEffect(async () => {
      const meetup = await getMeetup(selectedMeetupId.value)

      currentMeetup.value = meetup
    })

    return {
      selectedMeetupId,
      currentMeetup,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button @click="selectedMeetupId -=1" class="button button--secondary" type="button" :disabled="selectedMeetupId === 1">Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div class="radio-group__button">
            <input
               v-model="selectedMeetupId"
              id="meetup-id-1"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="1"
            />
            <label for="meetup-id-1" class="radio-group__label">1</label>
          </div>
          <div class="radio-group__button">
            <input
               v-model="selectedMeetupId"
              id="meetup-id-2"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="2"
            />
            <label for="meetup-id-2" class="radio-group__label">2</label>
          </div>
          <div class="radio-group__button">
            <input
               v-model="selectedMeetupId"
              id="meetup-id-3"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="3"
            />
            <label for="meetup-id-3" class="radio-group__label">3</label>
          </div>
          <div class="radio-group__button">
            <input
               v-model="selectedMeetupId"
              id="meetup-id-4"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="4"
            />
            <label for="meetup-id-4" class="radio-group__label">4</label>
          </div>
          <div class="radio-group__button">
            <input
              v-model="selectedMeetupId"
              id="meetup-id-5"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="5"
            />
            <label for="meetup-id-5" class="radio-group__label">5</label>
          </div>
        </div>

        <button @click="selectedMeetupId +=1" class="button button--secondary" type="button" :disabled="selectedMeetupId === 5">Следующий</button>
      </div>

      <div v-if="currentMeetup" class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ currentMeetup.title }}</h1>
        </div>
      </div>

    </div>
  `,
})
