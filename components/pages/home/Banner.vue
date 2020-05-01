<template>
  <section class="w-full header relative pt-0 flex lg:h-screen md:px-20 sm:px-10 sm:p-5">
    <div class="container items-stretch mx-auto flex flex-wrap bg-right md:bg-50% bg-no-repeat" style="background-image: url(/images/landing.png)">
      <div class="w-full lg:w-7/12 mt-16 md:mt-32">
        <div class="w-full text-left mt-0 content-start">
          <div class="w-full pt-0 md:pt-10">
            <h1 class="title-large">
              droidconKe 2021
            </h1>
            <h4 class="title-px-39 purple">
              6TH TO 8TH AUGUST
            </h4>
            <p class="mt-0 md:mt-12 text-px-36 black ">
              LARGEST FOCUSED ANDROID <br> DEVELOPER CONFERENCE IN AFRICA
            </p>
            <div class="mt-4 md:mt-12">
              <a class="button-yellow black-persist text-px-16-b" href="#">Get Your Ticket</a>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-wrap lg:w-5/12 mt-10 md:mt-20 lg:h-full pr-0 lg:pr-10 lg:justify-end">
        <div class="flex-none">
          <a class="button-border-g black-persist text-px-16-b mr-0 md:mr-6" href="#">Submit a talk</a>
          <a class="button-border-p purple text-px-16-b" href="#">Sponsor droidconKE</a>
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
