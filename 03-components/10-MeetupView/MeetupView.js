import { defineComponent } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

class Meetup {
  constructor(title, image, description, agenda, organizer, place, date) {
    this.title = title
    this.image = image
    this.description = description
    this.agenda = agenda
    this.organizer = organizer
    this.place = place
    this.date = date
  }
}

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupAgenda,
    MeetupDescription,
    MeetupCover,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Meetup, //не менял состав полей, что передается из App -> будет ворнинг все равно
      required: true,
    },
  },

  template: `
    <div>
      <!-- Обложка митапа -->
      <MeetupCover :title="meetup.title" :image="meetup.image"/>
      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h2>Описание</h2>

            <!-- Описание митапа -->
            <MeetupDescription :description="meetup.description"/>
            <h2>Программа</h2>

            <!-- Программа митапа -->
            <MeetupAgenda v-if="meetup.agenda.length" :agenda="meetup.agenda"/>
            <UiAlert v-else>Программа пока пуста...</UiAlert>

          </div>
          <div class="meetup__aside">

            <!-- Краткая информация о митапе -->
            <MeetupInfo :date="meetup.date" :organizer="meetup.organizer" :place="meetup.place"/>

            <div class="meetup__aside-buttons"></div>
          </div>
        </div>
      </UiContainer>
    </div>
  `,
})
