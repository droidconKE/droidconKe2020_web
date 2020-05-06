<template>
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
            <div class="flex flex-wrap lg:flex-no-wrap justify-center">
              <div class="w-full w-1/2 img-log">
                <img src="/images/feedback.png" alt="login">
              </div>
              <div class="w-full m-1/2 bg-ash-c mb-24 lg:mb-0 justify-start">
                <div class="modal-close right-auto w-12 h-0 float-right content-start cursor-pointer p-2 flex justify-end z-50">
                  <p class="text-px-10  uppercase gray">
                    Cancel
                  </p>
                </div>
                <div class="w-full content-start  flex flex-col px-4 lg:px-8 py-2">
                  <div class="w-full">
                    <p class="text-px-14-b green-dark">
                      Feedback
                    </p>
                    <p class="text-px-13 black mt-4">
                      Kindly leave your honest feedback to help us make it even better. Cheers : )
                    </p>
                    <textarea id="feed-message" rows="4" class="appearance-none block w-full bg-white text-gray-700 rounded py-1 px-1 leading-tight mt-4" />
                    <div class="flex-wrap items-center mt-4 flex w-full">
                      <div>
                        <p class="text-px-13 black mr-6">
                          Rating:
                        </p>
                      </div>
                      <client-only>
                        <star-rating v-model="form.rating" :show-rating="false" :star-size="25" :glow="2" />
                      </client-only>
                    </div>
                    <button class="button-purple text-px-13 white mt-4 mb-4 md:mb-0">
                      Submit Feedback <i class="fa fa-share" />
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
    name: 'Filter',
    components: { StarRating },
    data () {
    return {
    form: {
    rating: 0
    }
    }
    }
    }
  </script>

  <style lang="scss">
    .img-log {
    width: 700px;
    }
  </style>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>
