<template>
  <div class="w-full container mx-auto flex flex-wrap px-4 md:px-12 py-4">
    <div class="flex flex-row lg:flex-col w-full lg:w-1/12 h-auto lg:h-64 bor border-r-0 lg:border-r border-gray-300 space-y-0 lg:space-y-6 space-x-6 lg:space-x-0 items-center lg:items-start justify-center lg:justify-start pb-4 lg:pb-0 sticky " style="top: 50px">
      <div v-for="(i, $i) in 3" :key="$i" class="skeleton w-4/12 px-3 py-1 lg:w-full rounded-tl-lg rounded-bl-lg border border-r-0 border-gray-300 cursor-pointer bg-gray-300">
        <h4 class="text-px-16-slab purple invisible">
          06 <small class="text-px-13 green-dark capitalize">Day 1</small>
        </h4>
      </div>
    </div>
    <div class="w-full flex-wrap flex lg:w-11/12 space-y-6 mb-2 lg:mb-10">
      <div v-for="(i, $i) in 5" :key="$i" class="flex w-full px-0 lg:px-2">
        <div class="w-2/12 h-20 flex items-center justify-center text-right hidden lg:grid">
          <h3 class="text-px-14-slab w-12 h-6 bg-gray-300 purple" />
        </div>
        <div class="w-full lg:w-10/12 flex bg-white-c rounded-tr-lg rounded-br-lg">
          <div class="h-12 w-20  lg:h-24 lg:w-36 flex-none skeleton bg-cover rounded-tl rounded-bl text-center overflow-hidden" style="background-image: url('https://via.placeholder.com/150/E2E8F0?text=droidconKe')" title="Woman holding a mug" />
          <div class="h-auto w-full lg:h-24 shadow-sm rounded-lg px-4 py-3 flex flex-col justify-between">
            <div class="flex flex-wrap items-start">
              <div class="w-10/12">
                <div class="text-px-14-slab black mb-2 skeleton bg-gray-300 w-56 h-4" />
                <p class="text-px-13 gray bg-gray-300 w-48 h-4 skeleton" />
                <p class="text-px-13 gray bg-gray-300 w-64 h-4 mt-3 skeleton" />
              </div>
              <div class="w-2/12 flex items-center justify-center">
                <div><i class="fa fa-star-o text-gray-500" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SessionsSkeleton'
}
</script>

<style lang="scss" scoped>
</style>
