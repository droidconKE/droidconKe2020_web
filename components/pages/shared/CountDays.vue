<template>
  <div class="p-0 title-px-32 black text-center">
    <client-only>
      <countdown :time="time" :interval="100" tag="div">
        <template slot-scope="props">
          <div class="w-full flex grid-cols-4 gap-8">
            <div class="w-full px-3 md:px-6">
              <span class="title-px-10-slab green-dark">Days</span>
              <p>{{ props.days }}</p>
            </div>
            <div class="w-full px-6">
              <span class="title-px-10-slab green-dark">HRS</span>
              <p>{{ props.hours }}</p>
            </div>
            <div class="w-full px-6">
              <span class="title-px-10-slab green-dark">Min</span>
              <p>{{ props.minutes }}</p>
            </div>
            <div class="w-full px-6">
              <span class="title-px-10-slab green-dark">SEC</span>
              <p>{{ props.seconds }}</p>
            </div>
          </div>
        </template>
      </countdown>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'CountDays',
  data () {
    const now = new Date()
    const d = new Date('2020-08-06')

    return {
      time: d - now
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
