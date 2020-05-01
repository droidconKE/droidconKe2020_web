<template>
  <div>
    <banner />
    <section class="w-full md:px-32 sm:px-10">
      <div class="md-4 mb-4 md:mt-20 md:mb-10 mx-auto px-4 ">
        <div class="items-center flex flex-wrap mt-4 md:mt-10">
          <div class="w-full md:w-8/12 ml-auto sm:px-6 md:px-12 md:px-4">
            <div class="md:pr-12 text-left">
              <h3 class="title-px-52 mb-4 md:mb-10 black">
                WELCOME TO <br> droidconKe 2020
              </h3>
              <h6 class="text-px-23 green-dark">
                The Largest Android Focused Developer Conference in Africa
              </h6>
              <p class="mt-4 p">
                This 3rd edition of droidconKE will include several tech communities from the East African Region and continental members. It will give participants an excellent chance to learn about the local Android development ecosystem, opportunities and services as well as meet the engineers and companies who work on them.
              </p>
              <div class="mt-5">
                <a class="text-px-16-slab black" href="/">More About DroidconKe <i class="fa fa-arrow-right" /></a>
              </div>
            </div>
          </div>
          <div class="w-full md:w-4/12 mr-auto p-4 md:p-10 mt-10 md:mt-0 mb-10 md:mb-0 sm:pt-0 justify-end content-center items-center">
            <img v-if="!$store.getters.isDarkTheme" alt="oporo image" class="max-w-full" src="/images/oporo.svg">
            <img v-else alt="oporo image" class="max-w-full" src="/images/oporo-dark.svg">
          </div>
        </div>
      </div>
    </section>
    <event-types />
    <organizers />
    <sponsors />
    <gallery />
  </div>
</template>

<script>

import EventTypes from '../components/pages/home/EventTypes'
import Organizers from '../components/pages/home/Organizers'
import Sponsors from '../components/pages/home/Sponsors'
import Gallery from '../components/pages/home/Gallery'
import Banner from '../components/pages/home/Banner'
export default {
  components: {
    Banner,
    Gallery,
    Sponsors,
    Organizers,
    EventTypes

  }
}
</script>
