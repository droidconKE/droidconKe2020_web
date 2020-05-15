<template>
  <div>
    <div class="w-full flex items-start flex text-center">
      <div class="w-24 h-24 md:w-32 md:h-32 p-2 md:p-4 flex-none bg-green-c-2 rounded">
        <img class="w-full p-0 rounded-full border-2 border-green-500" src="https://via.placeholder.com/150/E2E8F0?text=droidconKe" alt="Sunset in the mountains">
      </div>
      <div class="w-full text-left px-2 py-1 lg:py-4">
        <div class="text-px-13-slab-b h-3 w-32 bg-gray-200 skeleton" />
        <p class="text-px-13 gray h-4 w-40 bg-gray-200 mt-2 skeleton" />
        <p class="text-px-13 green-dark mt-2 h-4 w-40 bg-gray-200 skeleton" />
      </div>
    </div>
    <div class="w-full mb-10">
      <h4 class="black text-px-13-slab-b mt-2 md:mt-4">
        Bio:
      </h4>
      <p class="text-px-13 green-dark pt-2 h-4 mt-2 w-40 bg-gray-200 skeleton" />
      <p class="text-px-13 green-dark pt-2 h-4 mt-2 w-56 bg-gray-200 skeleton" />
      <p class="text-px-13 green-dark pt-2 h-4 mt-2 w-24 bg-gray-200 skeleton" />
      <p class="text-px-13 green-dark pt-2 h-4 mt-2 w-48 bg-gray-200 skeleton" />
      <p class="text-px-13 green-dark pt-2 h-4 mt-2 w-64 bg-gray-200 skeleton" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpeakerSkeleton'
}
</script>

<style scoped>

</style>
