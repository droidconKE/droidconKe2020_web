<template>
  <section class="w-full mt-14 all-page bg-no-repeat bg-cover bg-center lg:bg-center bg-local" style="background-image: url(/images/cookies.png)">
    <div class="md:px-32 container mx-auto sm:px-10 all-page flex">
      <div class="w-full flex flex-wrap px-4 md:px-12 py-0 md:py-3 items-center justify-end">
        <div class="content-center w-full lg:w-1/2 flex">
          <div class=" text-center">
            <p class="text-px-13-slab black uppercase font-bold">
              ERROR
            </p>
            <h1 class="error-font">
              {{ data.statusCode }}
            </h1>
            <h5 class="title-px-21 black px-2 md:px-5 mt-4 md:mt-10 mb-4 md:mb-10">
              {{ data.message }}
            </h5>
            <div class="w-full px-2 md:px-10 mb-4 md:mb-10">
              <count-days />
            </div>
            <a href="#" @click.prevent="$router.go(-1)">
              <span class="text-px-14-b black pr-4">Or Maybe</span> <span class="text-px-14-b purple">Try again! <i class="fa fa-refresh pl-3" /></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CountDays from '../components/pages/shared/CountDays'
export default {
  name: 'Error',
  layout: 'errorLayout',
  components: { CountDays },
  props: {
    error: {
      type: Object,
      default () {
        return {
          statusCode: 500,
          message: 'It\'s not you, seems we have an issue, you may come back later'
        }
      }
    }
  },
  data () {
    return {
      data: this.error
    }
  },
  mounted () {
    // console.log(this.$route.query.no_internet)
    if (this.$route.query.no_internet) {
      this.data = { statusCode: 'Offline', message: 'Seems you are offline Or our servers might be asleep !' }
    }
  }
}
</script>

<style lang="scss" scoped>
  .all-page {
    height: 600px;
    overflow: hidden!important;
  }
  .error-font {
    font: Bold 90px/100px Roboto Slab;
    letter-spacing: 0px;
    color: var(--black-color-persists);
    text-transform: uppercase;
  }
  .black {
    color: #000 !important;
  }
</style>
