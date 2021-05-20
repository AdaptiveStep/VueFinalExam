<template>

  <div class="relative px-8 ">
    <p class="text-7xl text-center"> Kontakta oss </p>
    <div class="max-w-auto my-12 md:mt-18 lg:mt-20">
      <div class="rounded-images prose max-w-full mx-auto" v-html="item.fields.textblob" />
      <div class="flex bg-pink-200 items-center justify-center  max-w-full mx-auto">
  <div class="grid rounded-lg w-11/12 md:w-9/12 lg:w-1/2 text-3xl">


    <div class="grid grid-cols-1 mt-5 mx-7">
      
      <input class="py-2 px-3 rounded-lg border-1 border-pink-100 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent" type="text" placeholder="Ditt Namn" />
    </div>

    <div class="grid grid-cols-1 mt-5 mx-7">
      
      <input class="py-2 px-3 rounded-lg border-1 border-pink-100 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent" type="email" placeholder="Din Epost" />
    </div>

    <div class="grid grid-cols-1 mt-5 mx-7">
      
      <input class="py-2 px-3 rounded-lg border-1 border-pink-100 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent" rows="3" type="number" placeholder="Ditt mobilnummer" />
      
      
    </div>


    <div class="grid grid-cols-1 mt-5 mx-7">
      
      <textarea name="" id="" cols="10" rows="3" placeholder="Jag behöver hjälpm med" class="py-2 px-3 rounded-lg border-2 border-pink-100 mt-1 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"></textarea>
    </div>

    <!-- SEND BUTTON HERE -->
    <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
      <button class='bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-8 border-b-2 border-r-2 border-blue-700 hover:border-blue-500 rounded  focus:outline-none '>Skicka</button>
    </div>

  </div>
</div>
    </div>
  </div>

</template>
<script>
export default {
  props: {
    contentID: Number,
    item: Object,
    page: Object,
    pageInSitemap: Object,
    dynamicPageItem: Object,
  },
};
</script>

<style scoped>


</style>
