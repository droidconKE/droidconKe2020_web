<template>
  <div class="w-full flex items-start flex-col">
    <h4 class="pt-2 h-4 w-20 bg-gray-200 skeleton" />
    <p class="pt-2 h-4 mt-2 w-40 bg-gray-200 skeleton" />
    <p class="pt-2 h-4 mt-2 w-56 bg-gray-200 skeleton" />
    <h6 class="pt-2 h-4 w-48 bg-gray-200 skeleton mt-4 md:mt-10" />
    <p class="text-px-13 green-dark pt-2 h-4 mt-2 w-24 bg-gray-200 skeleton" />
    <p class="text-px-13 green-dark pt-2 h-4 mt-2 w-48 bg-gray-200 skeleton" />
    <p class="text-px-13 green-dark pt-2 h-4 mt-2 w-64 bg-gray-200 skeleton" />

    <div class="w-full justify-center md:justify-start flex mt-4 md:mt-10">
      <a class="button-border-g text-px-13-b black-persist mr-4 lg:mr-6" href="#">share <i class="fa fa-share" /></a>
      <button class="button-purple text-px-13-b white">
        Session Feedback <i class="fa fa-share" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SessionSkeleton'
}
</script>

<style scoped>

</style>
