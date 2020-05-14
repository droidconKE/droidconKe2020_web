<template>
  <div>
    <div
      id="notification-modal"
      class="modal opacity-0 pointer-events-none fixed w-full h-full overflow-hidden bottom-0 top-0 left-0 flex items-start justify-start z-40"
    >
      <div
        class="modal-overlay-1 absolute w-full h-full modal-bg z-30 overflow-hidden"
      />

      <section class="w-full md:px-56 px-4 mt-10 z-40 flex flex-col items-start container mx-auto">
        <div class="bg-black-c p-8 justify-center items-center">
          <p class="text-px-14-b green-dark">
            DroidconKe want to show notifications!
          </p>
          <div class="flex flex-wrap w-full justify-between items-center mt-6">
            <button class="button-yellow black text-px-13-b px-6" @click="promptNotifications">
              Allow
            </button>
            <button class="button-border-g black text-px-13-b px-6" @click="rejectPrompt">
              Block
            </button>
          </div>
        </div>
        <div class="ml-2 flex lg:ml-32 items-end">
          <div>
            <img class="w-64" src="/images/notif.svg" alt="notif">
          </div>
          <div class="flex -ml-10 w-40">
            <p class="text-px-14-b white">
              Allow Notifications to get regular updates
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { NOTIFICATIONS } from '../../../services/helpers/consts'
import firebase from '~/services/firebase/firebase'

export default {
  name: 'NotificationPrompt',
  mounted () {
    if (firebase.messaging.isSupported()) {
      console.log('Messaging Supported')

      const messaging = firebase.messaging()
      messaging.usePublicVapidKey(process.env.FIREBASE_PUBLIC_KEY)

      if (Notification.permission === 'granted') {
        console.log('allowed')
        messaging.getToken().then((token) => {
          console.log(token)
          this.sendTokenToServer(token)
        })
      } else if (Notification.permission === 'blocked' || Notification.permission === 'denied') {
        /* the user has previously denied push. Can't reprompt. */
        console.log('denied')
      } else if (Notification.permission === 'default' && !this.isTokenSentToServer()) {
        console.log('default')
        this.toggleModal()
      }
      // Callback fired if Instance ID token is updated.
      messaging.onTokenRefresh(function () {
        messaging.getToken()
          .then(function (refreshedToken) {
            console.log('Token refreshed.')
            // to the app server.
            this.setTokenSentToServer(false)
            // Send Instance ID token to app server.
            this.sendTokenToServer(refreshedToken)
          })
          .catch(function (err) {
            console.log('Unable to retrieve refreshed token ', err)
            this.setTokenSentToServer(false)
          })
      })

      messaging.onMessage((payload) => {
        console.log('received:', payload)
      })
    } else {
      console.log('Not Supported')
    }
  },
  methods: {
    toggleModal () {
      const body = document.querySelector('body')
      const modals = document.querySelectorAll('#notification-modal')
      for (let i = 0; i < modals.length; i++) {
        modals[i].classList.toggle('opacity-0')
        modals[i].classList.toggle('pointer-events-none')
      }
      body.classList.toggle('modal-active')
    },
    isTokenSentToServer () {
      return localStorage.getItem(NOTIFICATIONS) === '1'
    },
    setTokenSentToServer (sent) {
      localStorage.setItem(NOTIFICATIONS, sent ? '1' : '0')
    },
    setTokenToTopic (token) {
      const headers = {
        Authorization: 'key=' + process.env.FIREBASE_SERVER_KEY,
        'Content-Type': 'application/json'
      }
      const topic = process.env.MESSAGING_TOPIC
      this.$axios.post('https://iid.googleapis.com/iid/v1/' + token + '/rel/topics/' + topic, null, { headers })
        .then((_response) => {
          console.log('Subscribed to "' + topic + '"')
        }).catch((err) => {
          console.log('Unable to subscribe ', err)
        })
    },
    sendTokenToServer (currentToken) {
      if (!this.isTokenSentToServer()) {
        console.log('Sending token to server...')
        this.setTokenToTopic(currentToken)
        this.setTokenSentToServer(true)
      } else {
        console.log('Token already sent to server so won\'t send it again ')
      }
    },
    promptNotifications () {
      const messaging = firebase.messaging()
      // messaging.usePublicVapidKey(process.env.FIREBASE_PUBLIC_KEY)

      if (!('Notification' in window)) {
        this.toggleModal()
        this.setTokenSentToServer(true)
      } else {
        Notification.requestPermission().then((permission) => {
          console.log('Notification permission granted.')
          this.toggleModal()
          // Get Token
          if (permission === 'granted') {
            this.$toaster.success('You will receive regular updates from droidconKe')
            messaging.getToken().then((token) => {
              console.log(token)
              this.sendTokenToServer(token)
            })
          } else if (permission === 'denied') {
            this.$toaster.error('Notifications from droidconKe won\'t be sent to you')
            console.log('Unable to get permission to notify.')
          }
        })
      }
    },
    rejectPrompt () {
      this.toggleModal()
      this.setTokenSentToServer(true)
      this.$toaster.error('Notifications from droidconKe won\'t be sent to you')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
