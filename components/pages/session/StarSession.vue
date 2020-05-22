<template>
  <div>
    <label
      v-if="routeName === 'sessions-slug'"
      for="toogleAAA"
      class="flex items-center cursor-pointer pr-6"
    >
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input id="toogleAAA" :checked="isBookmarked" type="checkbox" class="hidden" @click="bookmark">
        <!-- line -->
        <div
          class="toggle__line w-6 h-3 bg-purple-lighter-c rounded-full shadow-inner"
        />
        <!-- dot -->
        <div
          class="toggle__dot absolute w-4 h-4 bg-black-c-inverse rounded-full shadow inset-y-0 left-0"
        />
      </div>
      <!-- label -->
      <div
        class="pl-2 text-px-13 black"
      > {{ isBookmarked ? 'Remove Session' : 'Save Session' }}
      </div>
    </label>
    <div v-else>
      <i :class="['fa gray cursor-pointer', isBookmarked ? 'fa-star' : 'fa-star-o']" title="Save Session" @click="bookmark" />
    </div>
  </div>
</template>

<script>
import firebase from '~/services/firebase/firebase'
export default {
  name: 'StarSession',
  props: {
    sessionId: {
      type: Number,
      default: 0
    },
    sessionSlug: {
      type: String,
      default: ''
    },
    isBookmarked: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      routeName: this.$route.name
    }
  },
  watch: {
    $route () {
      this.routeName = this.$route.name
    }
  },
  methods: {
    bookmark () {
      this.$axios.post(`/apis/events/${process.env.EVENT_SLUG}/bookmark_schedule/${this.sessionId}`)
        .then((response) => {
          console.log(this.isBookmarked)
          this.isBookmarked ? this.notification(this.sessionSlug, 'unsubscribed') : this.notification(this.sessionSlug, 'subscribed')

          this.$store.commit('bookmarkSession', {
            sessionId: this.sessionId,
            status: !this.isBookmarked
          })
        })
    },
    notification (topic, type) {
      const messaging = firebase.messaging()
      messaging.getToken().then((token) => {
        type === 'subscribed'
          ? this.setTokenToTopic(token, topic)
          : this.removeTokenToTopic(token, topic)
      })
    },
    setTokenToTopic (token, topic) {
      const headers = {
        Authorization: 'key=' + process.env.FIREBASE_SERVER_KEY,
        'Content-Type': 'application/json'
      }

      this.$axios.$post('/api2/iid/v1/' + token + '/rel/topics/' + topic, null, { headers })
        .then((_response) => {
          console.log('Subscribed to "' + topic + '"')
        }).catch((err) => {
          console.log('Unable to subscribe ', err)
        })
    },
    removeTokenToTopic (token, topic) {
      const headers = {
        Authorization: 'key=' + process.env.FIREBASE_SERVER_KEY,
        'Content-Type': 'application/json'
      }

      this.$axios.$post('/api2/iid/v1:batchRemove', {
        to: '/topics/' + topic,
        registration_tokens: [token]
      }, { headers })
        .then((_response) => {
          console.log('Subscribed to "' + topic + '"')
        }).catch((err) => {
          console.log('Unable to subscribe ', err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .toggle__dot {
    top: -.25rem;
    left: -.25rem;
    transition: all 0.3s ease-in-out;
  }
  .toggle__line {
    margin-top: -2px;
  }

  input:checked ~ .toggle__dot {
    transform: translateX(100%);
    background-color: var(--purple-color);
  }
  .fa-star {
    color: var(--purple-color);
  }
</style>
