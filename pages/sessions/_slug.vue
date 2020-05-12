<template>
  <div>
    <section class="w-full mt-14 ">
      <div class="bg-green-c w-full">
        <div class="w-full flex flex-wrap md:px-32 sm:px-10">
          <div class="container mx-auto">
            <div class="w-1/2 px-4 md:px-12 py-4">
              <h2 class="text-px-16-slab purple">
                Session details
              </h2>
            </div>
            <div class="w-1/2 px-2 md:px-0 flex-wrap flex justify-center items-center" />
          </div>
        </div>
      </div>
    </section>
    <section class="w-full md:px-32 sm:px-10">
      <div class="w-full container mx-auto flex flex-wrap px-4 md:px-12 py-0 md:py-3">
        <div class="w-full flex-wrap lg:w-4/12 flex border-r-0 lg:border-r border-green-200 pr-0 lg:pr-4">
          <div class="w-full py-4">
            <h4 class="text-px-16-slab purple">
              Speaker
            </h4>
          </div>
          <client-only>
            <carousel :per-page="1" :loop="true" :autoplay="true" :autoplay-timeout="10000" :autoplay-hover-pause="true">
              <slide v-for="(speaker, $index) in session.speakers" :key="$index" class="w-full">
                <div class="w-full flex items-start flex text-center">
                  <div class="w-24 h-24 md:w-32 md:h-32 p-2 md:p-4 flex-none bg-green-c-2 rounded">
                    <img class="w-full p-0 rounded-full border-2 border-green-500" :src="speaker.avatar" :alt="speaker.name">
                  </div>
                  <div class="w-full text-left px-2 py-1 lg:py-4">
                    <div class="text-px-13-slab-b purple">
                      {{ speaker.name }}
                    </div>
                    <p class="text-px-13 gray">
                      {{ speaker.tagline }}
                    </p>
                    <p class="text-px-13 green-dark pt-1">
                      <a :href="speaker.twitter" target="_blank"><i class="fa fa-twitter" /> {{ speaker.name }}</a>
                    </p>
                  </div>
                </div>
                <div class="w-full">
                  <h4 v-if="speaker.biography !== null" class="black text-px-13-slab-b mt-2 md:mt-4">
                    Bio:
                  </h4>
                  <p class="p gray mt-2 md:mt-4 mb-4 lg:mb-16">
                    {{ speaker.biography }}
                  </p>
                </div>
              </slide>
            </carousel>
          </client-only>
        </div>
        <div class="w-full flex-wrap content-start items-start lg:w-6/12 px-0 lg:px-6 flex">
          <div class="w-full flex py-4">
            <h4 class="text-px-16-slab purple mr-0 md:mr-10">
              Session
            </h4>
            <p class="text-px-14 gray">
              <span class="mr-2">Level:</span> <span class="uppercase white text-px-10 button-black">#{{ session.session_level }}</span>
            </p>
          </div>
          <div class="w-full flex items-start flex-col">
            <h4 class="black text-px-13-slab-b">
              {{ session.session_format }}
            </h4>
            <p class="text-px-14 gray mt-2">
              {{ session.description }}
            </p>
            <p class="text-px-13-slab-light gray uppercase mt-1">
              {{ $hour(session.start_date_time) }} - {{ $hour(session.end_date_time) }} | <span v-for="(room, $r) in session.rooms" :key="$r" class="green-dark">{{ room.title }}<span v-if="$r+1 < session.rooms.length">, </span> </span>
            </p>
            <h6 class="text-px-13-slab-b font-bold black mt-4 md:mt-10">
              Session Description
            </h6>
            <p class="p gray mt-2">
              {{ session.description }}
            </p>

            <div class="w-full justify-center md:justify-start flex mt-4 md:mt-10">
              <a class="button-border-g text-px-13-b black-persist mr-4 lg:mr-6" href="#">share <i class="fa fa-share" /></a>
              <button class="button-purple text-px-13-b white">
                Session Feedback <i class="fa fa-share" />
              </button>
            </div>
          </div>
        </div>
        <div class="w-full flex-wrap items-start justify-center lg:w-2/12 flex py-4">
          <label
            for="toogleAAA"
            class="flex items-center cursor-pointer pr-6"
          >
            <!-- toggle -->
            <div class="relative">
              <!-- input -->
              <input id="toogleAAA" type="checkbox" class="hidden">
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
            >Save Session
            </div>
          </label>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Slug',
  async fetch () {
    const slug = this.$route.params.slug
    await this.$axios.get(`/events/${process.env.EVENT_SLUG}/schedule/${slug}`).then((response) => {
      this.session = response.data.data
    })
  },
  data () {
    return {
      session: []
    }
  },
  methods: {
    toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('#session-feedback-modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    }
  }
}
</script>

<style scoped>
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
  .VueCarousel , .VueCarousel-inner {
    width: 100%
  }
</style>
