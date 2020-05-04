<template>
  <section class="w-full bg-dark-green-c mt-12">
    <div class="w-full flex flex-wrap md:px-32 sm:px-10">
      <div class="w-1/2 px-2 md:px-12 py-4">
        <h2 class="text-px-13-b purple">Sessions</h2>
      </div>
      <div class="w-1/2 flex-wrap flex justify-center items-center">
        <label
          for="toogleAA"
          class="flex items-center cursor-pointer pr-5"
        >
          <!-- toggle -->
          <div class="relative">
            <!-- input -->
            <input id="toogleAA" type="checkbox" class="hidden">
            <!-- line -->
            <div
              class="toggle__line w-6 h-3 bg-purple-lighter-c rounded-full shadow-inner"
            />
            <!-- dot -->
            <div
              class="toggle__dot absolute w-4 h-4 bg-black-c rounded-full shadow inset-y-0 left-0"
            />
          </div>
          <!-- label -->
          <div
            class="ml-3 text-gray-700 font-sm"
          >My Sessions
          </div>
        </label>
        <a href="#">Filter <i class="fa fa-filter" /></a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Index'
}
</script>

<style scoped>
  .toggle__dot {
    top: -.25rem;
    left: -.25rem;
    transition: all 0.3s ease-in-out;
  }
  .toggle__line {
    margin-top: -2px;
  }

  input:checked ~ .toggle__dot {
    transform: translateX(100%);
    background-color: var(--purple-color);
  }
</style>
