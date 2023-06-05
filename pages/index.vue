<template>
  <div>


    <LazyLayoutNavbar />

    <LazyHomeHero />
    <LazyLayoutFooter />
    <!-- <div class="form-group fill_check">

      <input type="checkbox" id="item">

      <label for=item>item</label>
    </div> -->

    <!-- <LazyLayoutHeader /> -->
    <!-- <LazyHomeHero />
    <LazyHomeAboutAzzm />
    <LazyHomeCourses />
    <LazyHomeWhyUs />
    <LazyHomeArticles />

    <div class="chat_icon flex-center" @click="whenUpload">
      <img data-src="@/assets/images/chat.svg" title="chat" v-lazy-load alt="chat image" width="100%" height="100%" />
    </div>

    <button class="scroll-to-top up" v-show="showButton" @click="scrollToTop">
      <font-awesome-icon :icon="['fas', 'plane-up']" />
    </button> -->
  </div>
</template>

<script>


export default {

  name: "indexPage",
  layout: "main",

  head() {
    return {
      title: "Home",
    }
  },

  // favicon

  // head() {
  //   return {
  //     link: [
  //       {
  //         rel: 'icon',
  //         type: 'image/x-icon',
  //         href: this.faviconUrl
  //       }
  //     ]
  //   }
  // },

  // async asyncData({ $axios }) {
  //   const { data } = await $axios.get('https://your-api.com/favicon')
  //   return { faviconUrl: data.url }
  // },


  data() {
    return {
      showButton: false
    }
  },



  async asyncData({ $axios, app, route }) {
  },




  computed: {
  },
  //  when component load

  mounted() {

    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });

    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },


  // All methods and logic

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    handleScroll() {
      this.showButton = window.pageYOffset > 300;
    },

    whenUpload() {
      this.$swal.fire({
        position: 'center',
        type: 'warning',
        title: 'بيتم تنفيذها علي الدومين الرسمي',
        showConfirmButton: false,
        timer: 3000
      });
    }

  }
}
</script>

<style></style>
