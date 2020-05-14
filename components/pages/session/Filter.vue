
<template>
  <div>
    <div
      id="filter-modal"
      class="modal opacity-0 pointer-events-none fixed w-full h-full overflow-hidden bottom-0 top-0 left-0 flex items-center justify-center mt-14 z-40"
    >
      <div
        class="modal-overlay absolute w-full h-full modal-bg z-30 overflow-hidden"
      />

      <div
        class="modal-container bg-white w-11/12 md:w-6/12 mx-auto rounded shadow-lg z-50 overflow-y-auto"
      >
        <!--        <div-->
        <!--          class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"-->
        <!--        >-->
        <!--          &lt;!&ndash;          X&ndash;&gt;-->
        <!--        </div>-->
        <div class="modal-content w-full">
          <div class="flex flex-wrap lg:flex-no-wrap justify-center bg-ash-c">
            <div class="w-full md:w-1/2 lg:w-1/4 h-full relative lg:absolute bg-ash-c top-0 right-0 mb-24 lg:mb-0 justify-start">
              <div class="w-full content-start  flex flex-col px-4 lg:px-8 py-3 md:py-5">
                <div class="w-full">
                  <p class="text-px-10 modal-close float-right cursor-pointer uppercase gray">
                    Cancel
                  </p>
                  <p class="text-px-14-b green-dark mb-4 lg:mb-16">
                    <i class="fa fa-filter" /> Filter <span class="purple text-px-13 cursor-pointer" @click="toggleFilter">Remove Filter</span>
                  </p>
                  <div class="w-full ">
                    <label class="text-px-13 black mt-4">
                      Level
                    </label>
                    <div class="w-full text-center text-px-10 gray flex flex-wrap justify-start mt-2">
                      <span v-for="(level, $index) in sessionLevels" :key="$index" class="rad mt-2">
                        <input :id="'level-' + $index" v-model="levels" type="radio" name="level" :value="level">
                        <label :class="['cursor-pointer w-full flex py-2 px-5 justify-center', ($index) % 3 === 0 ? 'rounded-tl-lg rounded-bl-lg radio-group' : ($index + 1) % 3 === 0 ? 'rounded-tr-lg rounded-br-lg radio-group' : ($index + 1) === sessionLevels.length && ($index + 1) % 3 !== 0 ? 'radio-group-1 radio-group-last' : 'radio-group-1' ]" :for="'level-' + $index">{{ level }}</label>
                      </span>
                    </div>
                  </div>
                  <div class="w-full mt-6">
                    <label class="text-px-13 black mt-4">
                      Rooms
                    </label>
                    <div class="w-full text-center text-px-10 gray flex flex-wrap justify-start mt-2">
                      <span v-for="(room, $index) in sessionRooms" :key="$index" class="rad mt-2">
                        <input :id="'room-' + $index" v-model="rooms" type="radio" name="room" :value="room.title">
                        <label :class="['cursor-pointer w-full flex py-2 px-6 justify-center', ($index) % 3 === 0 ? 'rounded-tl-lg rounded-bl-lg radio-group' : ($index + 1) % 3 === 0 ? 'rounded-tr-lg rounded-br-lg radio-group' : ($index + 1) === sessionRooms.length && ($index + 1) % 3 !== 0 ? 'radio-group-1 radio-group-last' : 'radio-group-1' ]" :for="'room-' + $index">{{ room.title }}</label>
                      </span>
                    </div>
                  </div>
                  <div class="w-full mt-6">
                    <label class="text-px-13 black mt-4">
                      Session Type
                    </label>
                    <div class="w-full text-center text-px-10 gray flex flex-wrap justify-start mt-2">
                      <span v-for="(format, $index) in sessionFormats" :key="$index" class="rad mt-2">
                        <input :id="'format-' + $index" v-model="formats" type="radio" name="format" :value="format">
                        <label :class="['cursor-pointer w-full flex p-2 justify-center', ($index) % 3 === 0 ? 'rounded-tl-lg rounded-bl-lg radio-group' : ($index + 1) % 3 === 0 ? 'rounded-tr-lg rounded-br-lg radio-group' : ($index + 1) === sessionFormats.length && ($index + 1) % 3 !== 0 ? 'radio-group-1 radio-group-last' : 'radio-group-1' ]" :for="'format-' + $index">{{ format }}</label>
                      </span>
                    </div>
                  </div>
                  <button class="button-purple  w-full text-px-13 white mt-6 mb-4 md:mb-0" @click="filter">
                    {{ button }}
                  </button>
                </div>
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
  name: 'FilterModal',
  data () {
    return {
      rooms: '',
      levels: '',
      formats: '',
      button: 'Filter'
    }
  },
  computed: {
    sessionFormats () {
      return this.$store.state.event !== undefined ? this.$store.state.event.cfs.cfs_settings.session_formats : []
    },
    sessionLevels () {
      return this.$store.state.event !== undefined ? this.$store.state.event.cfs.cfs_settings.session_levels : []
    },
    sessionRooms () {
      return this.$store.state.event !== undefined ? this.$store.state.event.rooms : []
    }
  },
  methods: {
    filter () {
      const vm = this
      if (this.rooms !== '' || this.levels !== '' || this.formats !== '') {
        this.$store.commit('filterSessions', {
          levels: vm.levels,
          formats: vm.formats,
          rooms: vm.rooms
        })
        this.$root.$emit('filterSessions')
      }
    },
    toggleFilter () {
      this.levels = ''
      this.formats = ''
      this.rooms = ''
      this.$root.$emit('allSessions')
    }
  }
}
</script>

<style lang="scss" >

  input[type=radio] {
    position: absolute;
    visibility: hidden;
    display: none;
  }

  input[type=radio]:checked + label {
    color: var(--gray-color);
    background: var(--white-color);
  }
  .radio-group {
    border: solid 1px #843D951C;
  }
  .radio-group-1 {
    border-top: solid 1px #843D951C;
    border-bottom: solid 1px #843D951C;
  }
  .radio-group-last {
    border-right: solid 1px #843D951C;
  }

</style>
