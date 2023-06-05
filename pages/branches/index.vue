<template>
  <section class="our_works our_branches contact">

    <div class="main_head_page">
      <h2 class="main_head">{{ $t('pages.branches') }}</h2>
    </div>

    <div class="container">

      <div class="row justify-content-center">

        <div class="col-md-6 col-12" v-for="(item, index) in items" :key="index">

          <div class="box_map mb-3">
            <div class="address">
              <span class="icon"><font-awesome-icon :icon="['fas', 'location-dot']" /></span>
              <span>{{ item.name }},{{ item.city }}</span>
            </div>
            <div v-html="item.address"></div>

          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<script>


export default {

  name: "ourBranchesPage",

  layout: 'second-layout',

  head() {
    return {
      title: "our Branches",
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

      return $axios.get('branches').then(response => {
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
