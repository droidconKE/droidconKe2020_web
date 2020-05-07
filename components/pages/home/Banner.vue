<template>
  <section class="w-full header relative pt-0 flex lg:h-screen md:px-20 sm:px-10 sm:p-5">
    <div class="container items-stretch mx-auto px-4 flex flex-wrap bg-right lg:bg-50 bg-no-repeat" style="background-image: url(/images/landing.png)">
      <div class="w-full lg:w-7/12 mt-16 md:mt-24">
        <div class="w-full text-left mt-0 content-start">
          <div class="w-full pt-0 md:pt-5">
            <h1 class="title-large">
              droidconKe 2021
            </h1>
            <h4 class="title-px-26 purple mt-2 lg:-mt-12">
              6TH TO 8TH AUGUST
            </h4>
            <p class="mt-4 md:mt-16 title-px-21 black ">
              LARGEST FOCUSED ANDROID <br> DEVELOPER CONFERENCE IN AFRICA
            </p>
            <div class="mt-4 md:mt-6">
              <a class="button-yellow black-persist text-px-13-b" href="http://bit.ly/droidconKE20" target="_blank">Get Your Ticket</a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-wrap lg:w-5/12 mt-10 md:mt-20 lg:h-full pr-0 lg:pr-10 lg:justify-end">
        <div class="flex-none">
          <a class="button-border-g black-persist text-px-13-b mr-0 md:mr-6" target="_blank" href="https://sessionize.com/droidconke/">Submit a talk</a>
          <nuxt-link class="button-border-p purple text-px-13-b" to="/sponsors">
            Sponsor droidconKE
          </nuxt-link>
        </div>
        <div class="lg:absolute mb-10 md:mb-3 flex mt-10 lg:mt-0 lg:bottom-0 lg:right-0 lg:mr-40">
          <count-days />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CountDays from '../shared/CountDays'
export default {
  name: 'Banner',
  components: { CountDays }
}
</script>

<style scoped>
</style>
