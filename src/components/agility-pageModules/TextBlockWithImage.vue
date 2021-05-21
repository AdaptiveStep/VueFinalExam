<template>
<div>

    <div class="relative px-8 mb-12">
      <div class="max-w-screen-xl mx-auto ">
        <div class="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          



            <a :href="fields.primaryButton.href">
              <div class="flex-col group mb-8 md:mb-0">
                <div class="relative h-64">
                  <img
                    :src="fields.image.url"
                    :alt="fields.title"
                    class="object-cover object-center rounded-t-lg"
                    style="width: 100%; height: 100%;"
                  />
                </div>
                <div class="bg-blue-400 p-3 text-center border-t-0 rounded-b-xl">
                  <h2
                    class="text-white mt-1 font-black text-2xl group-hover:text-blue-900 transition duration-300"
                  >
                    {{ fields.title }}
                    
                  </h2>
                </div>
              </div>
            </a>
          
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
