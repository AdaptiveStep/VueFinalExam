<template>
  <div class="relative p-8">
    <p class="text-7xl text-center"> Om oss </p>
    <div class="max-w-2xl mx-auto my-12 md:mt-18 lg:mt-20">
      <div class="rounded-images prose max-w-full mx-auto" v-html="item.fields.textblob" />
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

/* >>> means "deep selection. i.e affecting child components" */
.rounded-images >>> img {
  border-radius:1rem;
  
}



</style>
