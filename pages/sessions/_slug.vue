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
      <div class="w-full container mx-auto flex flex-wrap items-start px-4 md:px-12 py-0 md:py-3">
        <div class="w-full flex-wrap lg:w-4/12 flex border-r-0 lg:border-r border-green-200 pr-0 lg:pr-4">
          <div class="w-full py-4">
            <h4 v-if="!$fetchState.pending" class="text-px-16-slab purple">
              Speaker{{ session.speakers.length > 1 ? 's' : '' }}
            </h4>
          </div>
          <client-only v-if="!$fetchState.pending">
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
          <speaker-skeleton v-else />
        </div>
        <div class="w-full flex-wrap content-start items-start lg:w-6/12 px-0 lg:px-6 flex">
          <div class="w-full flex py-4">
            <h4 class="text-px-16-slab purple mr-0 md:mr-10">
              Session
            </h4>
            <p v-if="!$fetchState.pending" class="text-px-14 gray w-full">
              <span class="mr-2 ml-4 lg:ml-0">Level:</span> <span class="uppercase white text-px-10 button-black">#{{ session.session_level }}</span>
            </p>
          </div>
          <div v-if="!$fetchState.pending" class="w-full flex items-start flex-col">
            <div v-if="session.session_image !== null" class="rounded-lg">
              <img class="h-48" :src="session.session_image" alt="session image">
            </div>
            <h4 class="black text-px-13-slab-b mt-4">
              {{ session.session_format }}
            </h4>
            <p class="text-px-14 gray mt-2 font-bold">
              {{ session.title }}
            </p>
            <p class="text-px-13-slab-light gray uppercase mt-1">
              {{ $hour(session.start_date_time) }} - {{ $hour(session.end_date_time) }} | <span v-for="(room, $r) in session.rooms" :key="$r" class="green-dark">{{ room.title }}<span v-if="$r+1 < session.rooms.length">, </span>  </span>
              <!--              | <span :style="{ color: session.backgroundColor }">{{ session.session_format }}</span>-->
            </p>
            <h6 class="text-px-13-slab-b font-bold black mt-4 md:mt-10 w-full">
              Session Description
            </h6>
            <p class="p gray mt-2">
              {{ session.description }}
            </p>

            <div v-if="!session.is_serviceSession" class="w-full justify-center md:justify-start flex flex-col mt-4 md:mt-10 mb-4 lg:mb-16">
              <div class="w-full flex">
                <a class="button-border-g text-px-13-b black-persist mr-4 lg:mr-6" href="#" @click.prevent="share">share <i class="fa fa-share" /></a>
                <button class="button-purple text-px-13-b white" @click="toggleModal">
                  Session Feedback <i class="fa fa-share" />
                </button>
              </div>
              <transition name="fade">
                <div v-if="!webShare" class="w-full flex mt-4 justify-between border rounded-lg p-4 shadow" @click="webShare= true">
                  <ShareNetwork
                    v-for="network in networks"
                    :key="network.key"
                    :network="network.network"
                    class="text-px-14-slab cursor-pointer"
                    :url="sharing.url"
                    :title="session.title"
                    :description="$truncateString(session.description, 100)"
                    :quote="$truncateString(session.description, 100)"
                    :hashtags="sharing.hashtags"
                    :twitter-user="sharing.twitterUser"
                  >
                    <i :style="{color: network.color}" :class="network.icon" />
                    <span>{{ network.name }}</span>
                  </ShareNetwork>
                </div>
              </transition>
            </div>
          </div>
          <session-skeleton v-else />
        </div>
        <div v-if="!$fetchState.pending" class="w-full flex-wrap items-start justify-center lg:w-2/12 flex py-4 mb-10 lg:mb-0">
          <star-session v-if="!session.is_serviceSession" :session-id="session.id" :is-bookmarked="session.is_bookmarked" :session-slug="session.slug" />
        </div>
      </div>
    </section>
    <session-feedback />
  </div>
</template>
<script>
import StarSession from '../../components/pages/session/StarSession'
import SessionFeedback from '../../components/pages/session/SessionFeedback'
import SpeakerSkeleton from '../../components/pages/session/SpeakerSkeleton'
import SessionSkeleton from '../../components/pages/session/SessionSkeleton'
export default {
  name: 'Slug',
  components: { SessionSkeleton, SpeakerSkeleton, SessionFeedback, StarSession },
  async fetch () {
    const slug = this.$route.params.slug
    await this.$axios.get(`/apis/events/${process.env.EVENT_SLUG}/schedule/${slug}`).then((response) => {
      this.session = response.data.data
    })
  },
  data () {
    return {
      session: [],
      sharing: {
        url: process.env.BASE_URL + this.$route.fullPath,
        hashtags: 'droidcon,droidconke',
        twitterUser: 'droidconke'
      },
      networks: [
        { network: 'linkedin', name: 'LinkedIn', icon: 'fa fa-linkedin', color: '#007bb5' },
        { network: 'telegram', name: 'Telegram', icon: 'fa fa-telegram', color: '#0088cc' },
        { network: 'twitter', name: 'Twitter', icon: 'fa fa-twitter', color: '#1da1f2' },
        { network: 'whatsapp', name: 'Whatsapp', icon: 'fa fa-whatsapp', color: '#25d366' }
      ],
      webShare: true
    }
  },
  mounted () {
    const vm = this
    this.$root.$on('sessionFeedbackSent', function () {
      vm.toggleModal()
    })
  },
  methods: {
    toggleModal () {
      const body = document.querySelector('body')
      const modal = document.querySelector('#session-feedback-modal')
      modal.classList.toggle('opacity-0')
      modal.classList.toggle('pointer-events-none')
      body.classList.toggle('modal-active')
    },
    share () {
      if (navigator.share) {
        navigator.share({
          title: this.session.title,
          text: this.$truncateString(this.session.description, 100),
          url: process.env.BASE_URL + this.$route.fullPath
        })
          .then(() => console.log('Successful share'))
          .catch(error => console.log('Error sharing', error))
      } else {
        this.webShare = false
        console.log('not supported')
      }
    }
  },
  head () {
    return {
      title: this.session.title,
      meta: [
        { hid: 'description', name: 'description', content: this.$truncateString(this.session.description, 100) },
        { hid: 'og:description', name: 'description', content: this.$truncateString(this.session.description, 100) },
        { hid: 'og:url', property: 'og:url', content: process.env.BASE_URL + this.$route.fullPath },
        { hid: 'twitter:url', name: 'twitter:url', content: process.env.BASE_URL + this.$route.fullPath },
        { hid: 'og:title', property: 'og:title', content: this.session.title },
        { hid: 'twitter:title', name: 'twitter:title', content: this.session.title },
        { hid: 'og:image', property: 'og:image', content: this.session.session_image !== null ? this.session.session_image : '/icon.png' },
        { hid: 'twitter:image', name: 'twitter:image', content: this.session.session_image !== null ? this.session.session_image : '/icon.png' }
      ]
    }
  }
}
</script>

<style scoped>
  .VueCarousel , .VueCarousel-inner {
    width: 100%
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
