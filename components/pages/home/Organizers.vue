<template>
  <section class="w-full md:px-32 mt-10 ">
    <div class=" mx-auto px-4 container">
      <div class="items-center flex flex-wrap">
        <div class="w-full md:w-6/12 ml-auto md:px-12 md:px-4">
          <div class="md:pr-12 text-left">
            <h3 class="title-px-36 black pt-6 md:pt-0">
              droidconKe IS ORGANIZED BY;
            </h3>
            <h6 class="text-16 mt-4 gray">
              The ones that make it happen
            </h6>
          </div>
        </div>
        <div class="w-full md:w-6/12 mr-auto pt-4 sm:mt-10 md:pt-0 justify-end">
          <div class="w-full flex md:p-10 sm:p-0  grid md:grid-cols-4 grid-cols-3 gap-4 lg:gap-8">
            <div v-for="(org, $index) in organizers" :key="$index" class="w-24 h-24 p-3 flex-none rounded border border-green-200 bg-white-c">
              <img class="w-16 p-0" :src="org.photo === null ? '/icon.png' : org.photo" :alt="org.name">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Organizers',
  async fetch () {
    if (this.$store.state.organizers.length === 0) {
      await this.$axios.get(`/apis/organizers/${process.env.ORG_SLUG}/team?type=company`).then((response) => {
        this.organizers = response.data.data
        this.$store.commit('updateOrganizers', response.data.data)
      })
    }
  },
  data () {
    return {
      organizers: this.$store.state.organizers
    }
  }
}
</script>

<style scoped>

</style>
