<template>
  <div>



    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6 col-12" v-for="(item, index) in products" :key="index">

        <div class="box" data-aos="fade-up" :class="{ 'box_center': index == 1 }">

          <div class="image">
            <img src="item.icon" title="vision" alt="nav logo" width="100%" height="100%" />
          </div>

          <h3>{{ item.title }}</h3>

          <p v-html="item.object"></p>

        </div>

      </div>
    </div>
    <!-- link -->

    <a href="#" aria-label="Twitter" target="_blank" rel="noopener" class="social-icon twitter grayscale"></a>

    <!-- input -->

    <label for="fmUserName">Your name</label>
    <input id="fmUserName">


    <!-- button -->

    <button aria-label="Close" title="Close">X</button>

    <h1>
      <span class="let1">l</span>
      <span class="let2">o</span>
      <span class="let3">a</span>
      <span class="let4">d</span>
      <span class="let5">i</span>
      <span class="let6">n</span>
      <span class="let7">g</span>
    </h1>

    <!-- img -->

    <!-- <img data-src="@/assets/images/blue.png"  title="" v-lazy-load src="" alt="Girl in a jacket" width="500" height="600" /> -->

    <!-- when use asyncData -->
    <!-- <ul v-for="(post, index) in posts">
          <li>{{ post.title }}</li>
        </ul> -->

    <!-- when use fetch -->

    <!-- <ul v-for="(post, index) in $store.state.posts">
          <li>post.title</li>
        </ul> -->

  </div>
</template>

<script>


import { mapState, mapGetters, mapActions, mapMutations } from "vuex"

export default {

  name: "indexPage",

  head() {
    return {
      title: "temp page",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },

  // nuxtI18n: {
  //   paths: {
  //     it: '/chi-siamo',
  //     en: '/about'
  //   }
  // },

  // layout:"",

  // transitions: "page6",

  // middleware:['']

  // define all properties

  data() {
    return {
      items: []
      // blogPost: '',
      // blogCategoryPosts: ''
    }
  },

  //  fetch data on server side only in pages not component ( fetch ,async data)

  // async asyncData({ $axios }) {
  //   try {
  //     // let response = await this.$axios.$get("main_page/main");
  //     return await $axios.$get(process.env.baseUrl + "main_page/main").then(res => {

  //       return {
  //         jjj: res.data.content.title
  //       };

  //     })

  //   } catch (err) {

  //     console.log(err);

  //   }
  // },

  // async asyncData({ $axios }) {

  //   const blogPost = await $axios.get(`setting/description`).then(response =>
  //     console.log(response.data)
  //   ).catch(error => {
  //     console.log(error)
  //   })

  //   const blogCategoryPosts = await $axios.get(`setting/about`).then(response =>
  //     console.log(response.data)
  //   ).catch(error => {
  //     console.log(error)
  //   })

  //   return {
  //     blogPost: blogPost,
  //     blogCategoryPosts: blogCategoryPosts,
  //   }
  // },


  // best way to call api used only in page folder used with data without need to refresh

  // async asyncData({ $axios },{params},context) {

  //   try {

  //     return $axios.get('setting/about').then(response => {
  //       return {
  //         items: response.data.data
  //       }
  //     }).catch(error => {
  //       console.error(error)
  //     })

  //   } catch (error) {

  //     console.log("catch :" + error)

  //   }

  // },

  // asyncData({ $axios }) {
  // return $axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
  //   console.log(res)
  //   return {
  //     posts: res
  //   }
  // })
  // },


  async fetch() {
    const response = await this.$axios.get('setting/about')
    this.items = response.data.data
  },



  // fetch({ $axios, store }) {
  // return $axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {

  //   store.commit('updatePosts', res)
  //   console.log(res)
  //   return {
  //     posts: res
  //   }
  // })
  // },


  created() {

  },


  computed: {
    ...mapGetters(['sum']),
    ...mapState(['count', 'name']),

    products() {
      return this.$store.state.products
    }
  },
  //  when component load

  mounted() {
    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  },


  // All methods and logic

  methods: {

    ...mapMutations(['increment3']),
    ...mapActions(['updateIncrement2', 'updateIncrement3']),

  }
}
</script>

<style lang="scss" scoped>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 100%;
  background: #191a1a;
  text-align: center;
}

h1 {
  margin: 0;
  padding: 0;
  font-family: ‘Arial Narrow’, sans-serif;
  font-weight: 100;
  font-size: 1.1em;
  // color: #a3e1f0;
}

span {
  position: relative;
  top: 0.63em;
  // display: inline-block;
  text-transform: uppercase;
  opacity: 0;
  transform: rotateX(-90deg);
}

.let1 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.2s;
}

.let2 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.3s;
}

.let3 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.4s;
}

.let4 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.5s;

}

.let5 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.6s;
}

.let6 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.7s;
}

.let7 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.8s;
}

@keyframes drop {
  10% {
    opacity: 0.5;
  }

  20% {
    opacity: 1;
    top: 3.78em;
    transform: rotateX(-360deg);
  }

  80% {
    opacity: 1;
    top: 3.78em;
    transform: rotateX(-360deg);
  }

  90% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
    top: 6.94em
  }
}
</style>
