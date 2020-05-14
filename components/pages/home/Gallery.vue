<template>
  <section class="w-full h-auto">
    <div class="flex flex-wrap md:py-12">
      <div class="w-full text-center p-6 items-center justify-center">
        <h3 class="title-px-36 black">
          Photos From DroidconKe 2019
        </h3>
      </div>
      <div class="w-full items-center flex flex-wrap">
        <div id="images-wrapper" class="lgx-photo-gallery ">
          <div class="lgx-gallery-single">
            <img title="Memories One" src="/images/gallery/20191.jpg" alt="Memories one">
          </div> <!--Single photo-->
          <div class="lgx-gallery-single">
            <img src="/images/gallery/20192.jpg" alt="Memories Two" title="Memories Two">
          </div>  <!--Single photo-->
          <div class="lgx-gallery-single">
            <img src="/images/gallery/20193.jpg" alt="Memories Three" title="Memories Three">
          </div> <!--Single photo-->
          <div class="lgx-gallery-single">
            <img src="/images/gallery/20194.jpg" alt="Memories Four" title="Memories Four">
          </div> <!--Single photo-->
          <div class="lgx-gallery-single">
            <img src="/images/gallery/20195.jpg" alt="Memories Four" title="Memories Four">
          </div> <!--Single photo-->
          <div class="lgx-gallery-single">
            <img src="/images/gallery/20196.jpg" alt="Memories Five" title="Memories Five">
          </div> <!--Single photo-->
          <div class="lgx-gallery-single">
            <img src="/images/gallery/20197.jpg" alt="Memories Six" title="Memories Six">
          </div> <!--Single photo-->
          <div class="lgx-gallery-single">
            <img src="/images/gallery/20198.jpg" alt="Memories Five" title="Memories Five">
          </div> <!--Single photo-->
          <div class="lgx-gallery-single">
            <img src="/images/gallery/20199.jpg" alt="Memories Six" title="Memories Six">
          </div> <!--Single photo-->
          <div class="lgx-gallery-single">
            <img src="/images/gallery/201910.jpg" alt="Memories Two" title="Memories Two">
          </div>  <!--Single photo-->
        </div>
        <div class="w-full flex flex-wrap mt-4 mb-16 md:mb-0 justify-center items-center">
          <a class="text-px-13-slab black" target="_blank" href="https://droidconke.pixieset.com/droidconke2019/">View More <i class="fa fa-arrow-right" /></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Gallery'
}
</script>

<style scoped>
  #images-wrapper {
    width: 100%!important;
    line-height: 0;
    -webkit-column-count: 4;
    -webkit-column-gap: 0px;
    -moz-column-count: 4;
    -moz-column-gap: 0px;
    column-count: 4;
    column-gap: 0px;
    margin-bottom: 10px;
  }
  #images-wrapper img {
    width: 100% !important;
    height: auto !important;
    padding: 2px;
  }
  #images-wrapper{
    display:inline-block;
    margin-right: auto;
    margin-left: auto;
  }
  @media (max-width: 1000px) {
    #images-wrapper {
      -moz-column-count:    3;
      -webkit-column-count: 3;
      column-count:         3;
    }
  }
  @media (max-width: 800px) {
    #images-wrapper {
      -moz-column-count:    2;
      -webkit-column-count: 2;
      column-count:         2;
    }
  }
  @media (max-width: 400px) {
    #images-wrapper {
      -moz-column-count:    1;
      -webkit-column-count: 1;
      column-count:        1;
    }
  }
</style>
