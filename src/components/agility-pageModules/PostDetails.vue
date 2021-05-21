<template>
  <div class="relative ">
    <div class="max-w-auto">
      <div class="md:h-96 relative">
        <img
          :src="post.image.url"
          class="object-cover object-center h-96 w-full "
          
        />
      </div>
      <div class="max-w-2xl mx-auto mt-4 px-8">

        

        <h1 class="font-display text-4xl font-bold my-6 text-secondary-500">
          {{ post.title }}
        </h1>
        <div class="prose max-w-full mb-20" :inner-html.prop="post.content" />
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
  computed: {
    fields: function() {
      return this.item.fields;
    },
    post: function() {
      return this.dynamicPageItem.fields;
    },
    date: function() {
      return new Date(this.post.date).toLocaleDateString();
    },
    category: function() {
      return this.post.category?.fields.title || "Uncategorized";
    },
  },
};
</script>
