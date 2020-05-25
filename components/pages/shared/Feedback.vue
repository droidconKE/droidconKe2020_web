<template>
  <div>
    <div
      id="feedback-modal"
      class="modal opacity-0 pointer-events-none fixed w-full h-full overflow-hidden bottom-0 top-0 left-0 flex items-center justify-center z-40"
    >
      <div
        class="modal-overlay absolute w-full h-full modal-bg z-30 overflow-hidden"
      />

      <div
        class="modal-container bg-white w-11/12 md:w-6/12 mx-auto rounded shadow-lg z-50 overflow-y-auto"
      >
        <div
          class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
        >
          <!--          X-->
        </div>
        <div class="modal-content w-full">
          <div class="flex flex-wrap lg:flex-no-wrap bg-ash-c justify-center">
            <div class="w-full w-1/2 img-log hidden md:grid">
              <img src="/images/feedback.png" alt="login">
            </div>
            <div class="w-full m-1/2 bg-ash-c mb-24 lg:mb-0 justify-start">
              <div class="w-full content-start flex flex-col px-4 lg:px-8 py-3 md:py-5">
                <div class="w-full">
                  <p class="text-px-10 modal-close float-right cursor-pointer uppercase gray">
                    Cancel
                  </p>
                  <p class="text-px-14-b green-dark">
                    Feedback
                  </p>
                  <p class="text-px-13 black mt-4">
                    Kindly leave your honest feedback to help us make it even better. Cheers : )
                  </p>
                  <textarea id="feed-message" v-model="form.feedback" rows="4" :class="['appearance-none block w-full bg-white text-gray-700 rounded py-1 px-1 leading-tight mt-4', errors.feedback ? 'border border-red-500' : '']" />
                  <p v-if="errors.feedback" class="text-red-500 text-xs italic">
                    {{ errors.feedback[0] }}.
                  </p>
                  <div class="flex-wrap items-center mt-4 flex w-full">
                    <div>
                      <p class="text-px-13 black mr-6">
                        Rating:
                      </p>
                    </div>
                    <client-only>
                      <star-rating v-model="form.rating" :show-rating="false" :star-size="25" :glow="2" />
                    </client-only>
                    <p v-if="errors.rating" class="text-red-500 text-xs italic">
                      {{ errors.rating[0] }}
                    </p>
                  </div>
                  <button class="button-purple text-px-13 white mt-4 mb-4 md:mb-0" @click="sendFeedback">
                    {{ button }} <i class="fa fa-share" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'Feedback',
  components: { StarRating },
  data () {
    return {
      form: {
        rating: 1,
        feedback: null
      },
      errors: [],
      button: 'Submit Feedback'
    }
  },
  methods: {
    sendFeedback () {
      this.errors = []
      this.button = 'Submitting Feedback ...'
      this.$axios.post(`/apis/events/${process.env.EVENT_SLUG}/feedback`, this.$data.form)
        .then((response) => {
          this.$toaster.success(response.data.message)
          this.$root.$emit('feedbackSent')
          this.button = 'Submit Feedback'
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errors = error.response.data.errors
            this.button = 'Submit Feedback'
          }
        })
    }
  }
}
</script>

<style lang="scss" >
  .img-log {
    width: 700px;
  }
</style>
