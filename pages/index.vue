<template>
  <div>
    <banner />
    <section class="w-full md:px-32 sm:px-10">
      <div class="md:mt-10 md:mb-10 mx-auto px-4 ">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-7/12 ml-auto sm:px-6 md:px-12 md:px-4">
            <div class="md:pr-12 sm:p-10 text-left">
              <h3 class="text-3xl font-semibold">
                WELCOME TO droidconKe 2020
              </h3>
              <h6>The Largest Android Focused Developer Conference in Africa </h6>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                Droidcon is a global conference focused on the engineering of Android applications. Droidcon provides a forum for developers to network with other developers, share techniques, announce apps and products, and to learn and teach.

                This two-day developer focused gathering will be held in Nairobi Kenya on August 6th to 8th 2020 and will be the largest of its kind in Africa.
              </p>
              <div class="mt-5">
                <a href="/">More About DroidconKe</a>
              </div>
            </div>
          </div>
          <div class="w-full md:w-5/12 mr-auto px-4 lg:pt-24 md:pt-12 sm:pt-0 justify-end">
            <img alt="..." class="max-w-full" src="https://demos.creative-tim.com/tailwindcss-starter-project/_next/static/images/documentation-014ebef5373d22e362447511dcb171a3.png">
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  /*display: flex;*/
  /*justify-content: center;*/
  align-items: center;
  text-align: center;
}
</style>
