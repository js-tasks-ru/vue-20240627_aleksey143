import { defineComponent } from 'vue'
import EmailListItem from './EmailListItem.js'

export default defineComponent({
  name: 'EmailList',

  components: {
    EmailListItem,
  },

  props: {
    emails: {
      type: Array,
      required: true,
    },
  },

  emits: ['deleteEmail'],

  setup(props, { emit }) {
    const deleteEmailHandler = index => {
      //проброс на самый вверх эмита без v-on="$listeners" не знаю, но его не проходили
      emit('deleteEmail', index)
    }

    return {
      deleteEmailHandler,
    }
  },

  template: `
    <ul class="emails-list unstyled-list" aria-label="Emails">
      <EmailListItem
        v-for="({ email, isMarked }, index) in emails"
        :key="email"
        :email="email"
        :marked="isMarked"
        @deleteEmail="()=>deleteEmailHandler(index)"
      />
    </ul>
  `,
})
