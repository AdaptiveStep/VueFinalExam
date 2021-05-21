<template>
  <div>
    
    <div
      class="mt-44 px-6 flex flex-col items-center justify-center"
      v-if="!hasPosts"
    >
      <h1 class="text-3xl text-center font-bold text-secondary-500">
        No posts available.
      </h1>
      <div class="my-10">
        <a
          href="/"
          class="px-4 py-3 my-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary transition duration-300"
        >
          Return Home
        </a>
      </div>
    </div>


    <div class="relative px-8 mb-12" v-else>
      <div class="max-w-screen-xl mx-auto ">
        <div class="sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <template v-for="post in posts">
            <a :href="`/blog/${item.fields.categoryPick_TextField.toLowerCase()}/${post.fields.slug}`" :key="post.title">
              <div class="flex-col group mb-8 md:mb-0">
                <div class="relative h-64">
                  <img
                    :src="post.fields.image.url"
                    :alt="post.fields.title"
                    class="object-cover object-center rounded-t-lg"
                    style="width: 100%; height: 100%;"
                  />
                </div>
                <div class="bg-blue-400 p-3 text-center border-t-0 rounded-b-xl">
                  <h2
                    class="text-white mt-1 font-black text-2xl group-hover:text-blue-900 transition duration-300"
                  >
                    {{ post.fields.title }}
                    
                  </h2>
                </div>
              </div>
            </a>
          </template>
        </div>
      </div>
    </div>
    
    


   <!-- <div class='flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5'>
      <button v-on:onclick="clicktest()" class='bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-8 border-b-2 border-r-2 border-blue-700 hover:border-blue-500 rounded  focus:outline-none '>TEST BUTTON FOR TEST METHOD</button>
    </div> -->


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
    moduleData: Object,
  },
  methods:{
    clicktest: function(){
      // let entirelist = this.page.zones.MainContentZone;
      // let filteredList = entirelist.filter(a => a.item.properties.definitionName=="PostsListing" && a.item.fields.categoryPick_TextField == "Questions" );


      // console.log(filteredList)
      alert("HELLLO");
    }
  },
  computed: {
    posts: function() {
      // our module data was loaded in src/data/PostsLists.js
      // OBS alla tre modulerna måste finnas på plats och vara i exakt samma ordning.
      let filteredposts = this.moduleData["PostsListing"].filter(x => x.category===this.listingCategory);
      return filteredposts;
    },
    hasPosts: function() {
      return this.posts.length >= 1;
    },
    listingCategory: function(){
      return this.page.zones.MainContentZone[2].item.fields.categoryPick_TextField;
    },
    pageName: function(){
      return this.page.zones.MainContentZone;
    },
    categorySmallCaps: function(){
      return this.item.fields.categoryPick_TextField.toLowerCase()
    }
  },
};
</script>
