<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-3 fixed w-full z-10 top-0">
    <div class="flex items-center flex-shrink-0 text-white mr-6 lg:pl-48">
      <a class="text-white no-underline hover:text-white hover:no-underline" href="#">
        <span class="text-2xl pl-2"><i class="em em-grinning" /> Brand McBrandface</span>
      </a>
    </div>

    <div class="block lg:hidden">
      <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div>

    <div id="nav-content" class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0 lg:pr-48">
      <div class="w-8/12 flex-grow lg:flex">
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <a class="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
          </li>
          <li class="mr-3">
            <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
          </li>
          <li class="mr-3">
            <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
          </li>
          <li class="mr-3">
            <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
          </li>
          <li class="mr-3">
            <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
          </li>
        </ul>
      </div>
      <div class="w-4/12 flex-grow lg:flex justify-end">
        <li class="mr-3">
          <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  mounted () {
    document.getElementById('nav-toggle').onclick = function () {
      document.getElementById('nav-content').classList.toggle('hidden')
    }
  }
}
</script>

<style scoped>

</style>
