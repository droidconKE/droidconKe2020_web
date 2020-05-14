<template>
  <section class="w-full mt-14 mb-12">
    <div class="bg-green-c w-full">
      <div class="w-full  flex flex-wrap md:px-32 sm:px-10">
        <div class="w-full  flex flex-wrap container mx-auto">
          <div class="w-1/2 px-4 md:px-12 py-4">
            <h2 class="text-px-16-slab purple">
              Sessions
            </h2>
          </div>
          <div class="w-1/2 px-4 md:px-0 flex-wrap flex justify-center items-center">
            <my-sessions />
            <button class="mr-2 text-px-13 black" @click="toggleModal()">
              Filter <i class="pl-2 fa fa-filter purple" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex flex-wrap md:px-32 sm:px-10 mt-2 md:mt-4">
      <div class="w-full container mx-auto flex flex-wrap px-4 md:px-12 py-4">
        <div class="flex flex-row lg:flex-col w-full lg:w-1/12 h-auto lg:h-64 bor border-r-0 lg:border-r border-green-200 space-y-0 lg:space-y-6 space-x-6 lg:space-x-0 items-center lg:items-start justify-center lg:justify-start pb-4 lg:pb-0 sticky nav-bg z-40" style="top:45px">
          <div v-for="(days, $index, $key) in schedule" :key="$key" :class="['w-4/12 px-3 py-1 lg:w-full cursor-pointer rounded-tl-lg rounded-bl-lg rounded-r-lg lg:rounded-r-none', currentTab === $key ? 'bg-yellow-c' : 'border border-r-1 lg:border-r-0 border-green-200 bg-white-c-2' ]" @click.prevent="showTab($key)">
            <h4 class="text-px-16-slab purple">
              {{ $timeDay($index) }} <small :class="['text-px-13 capitalize', currentTab === $key ? 'black' : 'green-dark']">Day {{ $key+1 }}</small>
            </h4>
          </div>
        </div>
        <div class="w-full lg:w-11/12">
          <div v-for="(days, $index, $key) in schedule" :id="$index" :key="$key">
            <transition
              enter-active-class="transition duration-300 ease-out transform"
              enter-class="-translate-y-3 scale-95 opacity-0"
              enter-to-class="translate-y-0 scale-100 opacity-100"
              leave-active-class="transition duration-150 ease-in transform"
              leave-class="translate-y-0 opacity-100"
              leave-to-class="-translate-y-3 opacity-0"
            >
              <div v-if="currentTab === $key" class="flex-wrap w-full flex space-y-6 mb-2 lg:mb-10">
                <div v-for="(session, $ind) in days" :key="$ind" class="flex w-full px-0 lg:px-2">
                  <div class="w-2/12 h-32 flex items-center justify-center text-right hidden lg:grid">
                    <h3 class="text-px-14-slab purple uppercase">
                      {{ $time(session.start_date_time) }} <br> {{ $timeAm(session.start_date_time) }}
                    </h3>
                  </div>
                  <div class="w-full lg:w-10/12 flex rounded-tr-lg rounded-br-lg">
                    <nuxt-link v-if="!session.is_serviceSession" :to="'/sessions/' + session.slug" class="h-20 w-20  lg:h-36 lg:w-36 flex-none bg-cover rounded-tl rounded-bl text-center overflow-hidden">
                      <div v-if="session.speakers.length === 1">
                        <img v-for="(speaker, $i) in session.speakers" :key="$i" :src="speaker.avatar" :alt="speaker.name" :title="speaker.name">
                      </div>
                      <div v-else>
                        <client-only>
                          <carousel
                            :items="1"
                            :per-page="1"
                            :autoplay="true"
                            :nav="false"
                            :loop="true"
                            :pagination-enabled="true"
                            :autoplay-timeout="2000"
                            :mouse-drag="false"
                          >
                            <slide v-for="(speaker, $i) in session.speakers" :key="$i">
                              <img :src="speaker.avatar" :alt="speaker.name" :title="speaker.name">
                            </slide>
                          </carousel>
                        </client-only>
                      </div>
                    </nuxt-link>
                    <div v-else class="h-12 w-20 lg:h-24 lg:w-36 flex-none bg-cover rounded-tl rounded-bl text-center overflow-hidden" style="background-image: url('/images/speakers/arrive.png')" :title="session.title" />
                    <div :class="['h-auto w-full shadow-sm rounded-tr-lg bg-white-c rounded-br-lg px-4 flex flex-col justify-between', session.is_serviceSession ? 'lg:h-24 py-2': 'lg:h-36 py-3']">
                      <div class="flex flex-wrap items-start">
                        <nuxt-link :to="'/sessions/' + session.slug" class="w-10/12">
                          <div>
                            <div class="text-px-14-slab black mb-2">
                              {{ session.title }}
                            </div>
                            <p class="text-px-13 gray">
                              {{ $truncateString(session.description, 100) }}
                            </p>
                            <div class="text-px-12-slab gray pt-1 uppercase mt-2">
                              {{ $hour(session.start_date_time) }} - {{ $hour(session.end_date_time) }} | <span v-for="(room, $r) in session.rooms" :key="$r">{{ room.title }}<span v-if="$r+1 < session.rooms.length">, </span> </span>
                            </div>
                            <div v-if="!session.is_serviceSession" class="text-px-12 green-dark pt-2">
                              <i class="fa fa-android pr-1" /> <span v-for="(speaker, $s) in session.speakers" :key="$s"><a
                                :href="speaker.twitter"
                              >{{ speaker.name }}</a><span v-if="$s+1 < session.speakers.length">, </span> </span>
                            </div>
                          </div>
                        </nuxt-link>
                        <div class="w-2/12 flex items-center justify-center">
                          <star-session :session-id="session.id" :is-bookmarked="session.is_bookmarked" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import StarSession from '../../components/pages/session/StarSession'
import MySessions from '../../components/pages/session/MySessions'
export default {
  name: 'Index',
  components: { MySessions, StarSession },
  async fetch () {
    if (this.$store.state.sessions.length === 0) {
      await this.fetchSessions()
    }
  },
  data () {
    return {
      currentTab: 0
    }
  },
  computed: {
    schedule () {
      return this.$store.state.sessions
    }
  },
  mounted () {
    const vm = this
    this.$root.$on('allSessions', function () {
      vm.fetchSessions()
    })
    this.$root.$on('filterSessions', function () {
      vm.toggleModal()
    })
  },
  methods: {
    toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('#filter-modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    },
    showTab (id) {
      this.currentTab = id
    },
    fetchSessions () {
      return this.$axios.get(`/events/${process.env.EVENT_SLUG}/schedule?grouped=true`).then((response) => {
        // this.schedule = response.data.data
        this.$store.commit('updateSessions', response.data.data)
      })
    }
  }
}
</script>

<style scoped>
  .all-sessions {
    animation: 1s appear;
    margin: auto;
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
