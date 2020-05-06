
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
        <div
          class="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
        >
          <!--          X-->
        </div>
        <div class="modal-content w-full">
          <div class="flex flex-wrap lg:flex-no-wrap justify-center bg-ash-c">
            <div class="w-full md:w-1/2 lg:w-1/4 h-full relative lg:absolute bg-ash-c top-0 right-0 mb-24 lg:mb-0 justify-start">
              <div class="w-full content-start  flex flex-col px-4 lg:px-8 py-3 md:py-5">
                <div class="w-full">
                  <p class="text-px-10 modal-close float-right cursor-pointer uppercase gray">
                    Cancel
                  </p>
                  <p class="text-px-14-b green-dark mb-4 lg:mb-16">
                    <i class="fa fa-filter" /> Filter
                  </p>
                  <div class="w-full ">
                    <label class="text-px-13 black mt-4">
                      Level
                    </label>
                    <div class="radio-group w-full text-center text-px-10 gray flex justify-between mt-2">
                      <input id="option-one" type="radio" name="selector">
                      <label class="cursor-pointer w-1/3 p-2 rounded-tl-lg rounded-bl-lg" for="option-one">Beginner</label>
                      <input id="option-two" type="radio" name="selector">
                      <label class="cursor-pointer w-1/3 p-2" for="option-two">Intermediate</label>
                      <input id="option-three" type="radio" name="selector">
                      <label class="cursor-pointer w-1/3 p-2 rounded-tr-lg rounded-br-lg" for="option-three">Expert</label>
                    </div>
                  </div>
                  <div class="w-full mt-6">
                    <label class="text-px-13 black mt-4">
                      Rooms
                    </label>
                    <div class="radio-group w-full text-center text-px-10 gray flex justify-between mt-2">
                      <input id="option-one_2" type="radio" name="selector">
                      <label class="cursor-pointer w-1/3 p-2 rounded-tl-lg rounded-bl-lg" for="option-one_2">Room 1</label>
                      <input id="option-two_2" type="radio" name="selector">
                      <label class="cursor-pointer w-1/3 p-2" for="option-two_2">Room 2</label>
                      <input id="option-three_2" type="radio" name="selector">
                      <label class="cursor-pointer w-1/3 p-2 rounded-tr-lg rounded-br-lg" for="option-three_2">Room 3</label>
                    </div>
                  </div>
                  <div class="w-full mt-6">
                    <label class="text-px-13 black mt-4">
                      Session Type
                    </label>
                    <div class="radio-group w-full text-center text-px-10 gray flex justify-start mt-2">
                      <input id="option-one_3" type="radio" name="selector">
                      <label class="cursor-pointer w-1/3 p-2 rounded-tl-lg rounded-bl-lg" for="option-one_3">Codelab</label>
                      <input id="option-two_3" type="radio" name="selector">
                      <label class="cursor-pointer w-1/3 p-2" for="option-two_3">Keynote</label>
                      <input id="option-three_3" type="radio" name="selector">
                      <label class="cursor-pointer w-1/3 p-2 rounded-tr-lg rounded-br-lg" for="option-three_3">Lightening Talk</label>
                    </div>
                    <div class="radio-group w-full text-center text-px-10 gray flex justify-start flex-wrap mt-2">
                      <input id="option-four_3" type="radio" name="selector">
                      <label class="cursor-pointer w-1/3 p-2 rounded-tr-lg rounded-br-lg" for="option-four_3">Session</label>
                      <input id="option-five_3" type="radio" name="selector">
                      <label class="cursor-pointer w-1/3 p-2 rounded-tr-lg rounded-br-lg" for="option-five_3">Panel</label>
                    </div>
                  </div>
                  <button class="button-purple  w-full text-px-13 white mt-6 mb-4 md:mb-0">
                    Filter
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
  name: 'FilterModal'
}
</script>

<style lang="scss" >

  input[type=radio] {
    position: absolute;
    visibility: hidden;
    display: none;
  }

  input[type=radio]:checked + label{
    color: var(--gray-color);
    background: var(--white-color);
  }

  label + input[type=radio] + label {
    border-left: solid 1px #843D951C;
  }
  .radio-group {
    border: solid 1px #843D951C;
    border-radius: 6px;
  }

</style>
