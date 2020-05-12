<template>
  <div class="w-full flex items-center flex-wrap">
    <section class="w-full container mx-auto">
      <div class="w-full flex flex-wrap px-4 h-auto lg:h-screen pt-16 md:px-32">
        <div class="w-full lg:w-5/12 flex items-center">
          <div class="w-full bg-no-repeat bg-center" style="background-image: url(/images/circ.svg)">
            <div class="w-full mt-2 flex items-center justify-center">
              <img class="h-20 w-20 lg:mt-4 mt-4 lg:mb-8" src="/icon.png" alt="droid">
            </div>
            <div class="w-full flex flex-wrap text-left">
              <h2 class="title-px-36 black">
                About droidconKe
              </h2>
              <p class="p pr-0 lg:pr-16 gray mt-2 md:mt-4 mb-4 md:mb-0 pr-0 md:pr-3">
                Droidcon is a global conference focused on the engineering of Android applications. Droidcon provides a
                forum for developers to network with other developers, share techniques, announce apps and products, and
                to learn and teach.
                <br>
                This two-day developer focused gathering will be held in Nairobi Kenya on August 6th to 8th 2020 and
                will be the largest of its kind in Africa.
                <br>
                It will have workshops and codelabs focused on the building of Android applications and will give
                participants an excellent chance to learn about the local Android development ecosystem, opportunities
                and services as well as meet the engineers and companies who work on them.
              </p>
            </div>
          </div>
        </div>
        <div
          class="w-full lg:w-7/12 h-64 lg:h-auto mt-2 lg:mt-10 flex items-center justify-end bg-no-repeat bg-cover"
          style="background-image: url(/images/org.png)"
        >
          <!--          <img src="/images/org.png" class="object-contain" alt="organizers">-->
        </div>
      </div>
    </section>
    <section class="w-full bg-green-c md:px-32 sm:px-10">
      <div class="mx-auto container px-4 md:py-12">
        <div class="flex flex-wrap mb-10">
          <div class="w-full flex flex-wrap justify-center mt-4 md:mt-0 py-2 pb-12">
            <h4 class="title-px-21 purple font-bold">
              Largest Android Focused Developer conference in Africa.
            </h4>
          </div>
          <div class="w-full md:w-6/12 ml-auto px-2 md:px-8">
            <div class="text-left pr-0 md:pr-10">
              <h3 class="title-px-36 black underline-green">
                droidcon
              </h3>
              <p class="mt-2 md:mt-4 mb-4 md:mb-0 p gray">
                Droidcon is the largest global network of developer conferences which brings together the industry's
                foremost experts dedicated to advancing the Android platform. Droidcon engages a global network of over
                25,000+ developers attending our events in 22 cities.
                <br><br>
                Our first Droidcon conference was held in 2009 in Berlin and since then it has spread its influence
                across the globe and has established itself as the world's foremost community-driven conference format.
                Droidcon is the place to meet the international Android community, learn from expert speakers, dive into
                the latest Android advances and explore cutting edge technologies.
              </p>
            </div>
          </div>
          <div class="w-full flex md:w-6/12 items-start px-2 md:px-8">
            <div class="text-left pr-0 md:pr-10">
              <h3 class="title-px-36 black underline-green-light">
                PAST DROIDCONKE
              </h3>
              <p class="mt-2 md:mt-4 mb-4 md:mb-0 p gray">
                We held the first ever DroidconKE in October 2018. We had over 240 people from various parts of the
                world in attendance. Quality speakers from Kenya, Germany, South Africa and Nigeria graced the event.
                <br><br>
                In this 3rd edition of droidconKE, will include several tech communities from the East African Region
                and continental members and will give participants an excellent chance to learn about the local Android
                development ecosystem, opportunities and services as well as meet the engineers and companies who work
                on them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-if="members.length > 0" class="w-full container mx-auto h-auto md:px-32 px-4">
      <div class="flex flex-wrap md:py-16">
        <div class="w-full text-center mb-2 md:mb-0 mt-4 md:mt-0 items-center justify-center">
          <h3 class="title-px-36 purple">
            Organizing team
          </h3>
        </div>
      </div>
      <div class="w-full px-0 md:px-24 mr-auto mb-4 md:mb-0 pb-10 lg:pb-16">
        <div class="w-full flex flex-wrap items-center grid md:grid-cols-6 grid-cols-3 gap-8">
          <a v-for="(member, $index) in members" :key="$index" :href="member.link" class="text-center" target="_blank">
            <div class="w-20 h-20 md:w-32 md:h-32 p-2 md:p-4 flex-none bg-green-c-2 rounded">
              <img
                class="w-full p-0 rounded-full border-2 border-green-500"
                :src="member.photo === null ? '/icon.png' : member.photo"
                :alt="member.name"
              >
            </div>
            <p class="text-px-13 capitalize font-bold black mt-2">
              {{ member.name }}
            </p>
            <p class="text-px-12 gray">
              {{ member.tagline }}
            </p>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  async fetch () {
    if (this.$store.state.members.length === 0) {
      await this.$axios.get(`/organizers/${process.env.ORG_SLUG}/team?type=individual`).then((response) => {
        this.members = response.data.data
        this.$store.commit('updateMembers', response.data.data)
      })
    }
  },
  data () {
    return {
      members: this.$store.state.members
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
