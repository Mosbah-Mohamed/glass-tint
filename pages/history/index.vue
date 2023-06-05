<template>
  <section class="our_works our_branches gallery history">

    <div class="main_head_page">
      <h2 class="main_head">{{ $t('pages.history') }}</h2>
    </div>

    <div class="container">

      <div class="top_images">
        <div class="row justify-content-center">
          <div class="col-lg-6 col-12" v-for="(item, index) in items" :key="'r' + index">
            <div class="image">
              <img :src="item.image" title="" alt="person" width="100%" height="100%" />
            </div>

            <p>{{ item.name }}</p>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>

<script>


export default {

  name: "historyPage",

  layout: 'second-layout',

  head() {
    return {
      title: "history",
    }
  },


  // define all properties

  data() {
    return {
      items: [],
    }
  },

  async asyncData({ $axios }) {

    try {

      return $axios.get('history').then(response => {
        return {
          items: response.data.data
        }
      }).catch(error => {
        console.error(error)
      })

    } catch (error) {

      console.log("catch :" + error)

    }

  },


  created() {

  },


  computed: {
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


  }
}
</script>

<style lang="scss" scoped></style>
