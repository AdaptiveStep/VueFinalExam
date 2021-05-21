<template>
<div class="w-full h-64 bg-center bg-no-repeat bg-cover">
    <div class="absolute w-full h-64 bg-opacity-50 bg-black flex justify-center items-center">
        <div class="mx-4 text-center justify-center text-white">
            <h1 class="font-bold text-6xl mb-4">{{fields.title}}</h1>
        </div>
    </div>
      <img
    :src="fields.image.url"
    :alt="fields.image.label"
    class="object-cover object-center h-64 w-full filter blur-lg"/>
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
  computed: {
    fields: function() {
      return this.item.fields;
    },
    isRight: function() {
      return this.item.fields.imagePosition == "right";
    },
  },
};
</script>
