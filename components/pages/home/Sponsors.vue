<template>
  <section class="w-full bg-black-c">
    <div class="container mt-20 md:mt-24 mb-20 mx-auto md:px-32 px-4 md:py-20 py-4">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 justify-start sm:pr-6">
          <div class="md:pr-12 text-left">
            <h3 class="title-px-36 white pt-10 md:pt-0">
              SPONSOR DROIDCONKE
            </h3>
            <h6 class="text-px-13 gray-light mt-4">
              PROMOTE YOUR BRAND | DEMONSTRATE THOUGHT LEADERSHIP | MEET & ENGAGE WITH DEVELOPERS.
            </h6>
            <div class="mt-5 md:mt-12 mb-10 md:mb-0">
              <nuxt-link class="button-border-p purple text-px-13-b" to="/sponsors">
                sponsor droidconke
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-6/12 lg:p-20 mt-0 md:mt-6 lg:mt-0 lg:mr-12 mb-14 lg:mb-0 justify-end lg:absolute lg:right-0">
          <img alt="sponsors img" class="w-full sponsor-img" src="/images/sponsor.png">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Sponsors'
}
</script>

<style scoped>

</style>
