<template>
  <div class="flex w-full px-0 lg:px-2">
    <div class="w-2/12 h-20 flex items-center justify-center text-right hidden lg:grid" />
    <div class="w-full lg:w-10/12 flex bg-white-c rounded-lg">
      <div class="h-auto w-full lg:h-24 shadow-sm rounded-lg px-4 py-3 flex flex-col justify-center">
        <div class="flex flex-wrap items-center">
          <div class="w-10/12">
            <div class="text-px-14-slab black mb-2">
              Seems there are no seesions here from the filter or saved session !
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoSession'
}
</script>

<style scoped>

</style>
