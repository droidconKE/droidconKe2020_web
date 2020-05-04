<template>
  <section class="w-full h-auto bg-green-c md:px-32 px-4">
    <div class="flex flex-wrap md:py-16">
      <div class="w-full text-center mb-0 md:mb-10 items-center justify-center">
        <h3 class="title-px-36 black">
          Event Types
        </h3>
      </div>
      <div class="w-full flex flex-wrap">
        <div class=" w-4/12 md:w-2/12 mt-10 md:mt-0">
          <img class="w-full bg-yellow-c py-3 px-5 md:px-16 md:py-8 panel-img" src="/images/events/community.svg" alt="Sunset in the mountains">
          <div class="text-left">
            <h6 class="text-px-16-b black">
              Community Day
            </h6>
          </div>
        </div>
        <div class=" w-4/12 md:w-2/12 mt-10 md:mt-0">
          <img class="w-full bg-dark-green-c py-3 px-5 md:px-16 md:py-8 panel-img" src="/images/events/work.svg" alt="Sunset in the mountains">
          <div class="text-left">
            <h6 class="text-px-16-b black">
              Workshops
            </h6>
          </div>
        </div>
        <div class=" w-4/12 md:w-2/12 mt-10 md:mt-0">
          <img class="w-full bg-purple-c py-3 px-5 md:px-16 md:py-8 panel-img" src="/images/events/interviews.svg" alt="Sunset in the mountains">
          <div class="text-left">
            <h6 class="text-px-16-b black">
              Interviews
            </h6>
          </div>
        </div>
        <div class=" w-4/12 md:w-2/12 mt-10 md:mt-0">
          <img class="w-full bg-yellow-c py-3 px-5 md:px-16 md:py-8 panel-img" src="/images/events/panels.svg" alt="Sunset in the mountains">
          <div class="text-left">
            <h6 class="text-px-16-b black">
              Panels
            </h6>
          </div>
        </div>
        <div class=" w-4/12 md:w-2/12 mt-10 md:mt-0">
          <img class="w-full bg-dark-green-c py-3 px-5 md:px-16 md:py-8 panel-img" src="/images/events/bash.svg" alt="Sunset in the mountains">
          <div class="text-left">
            <h6 class="text-px-16-b black">
              Networking Bash
            </h6>
          </div>
        </div>
        <div class=" w-4/12 md:w-2/12 mt-10 md:mt-0">
          <img class="w-full bg-purple-c py-3 px-5 md:px-16 md:py-8 panel-img" src="/images/events/hack.svg" alt="Sunset in the mountains">
          <div class="text-left">
            <h6 class="text-px-16-b black">
              HackBounty
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventTypes'
}
</script>

<style scoped>
.panel-img {
  height: 140px;
}
</style>
