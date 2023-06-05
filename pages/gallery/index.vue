<template>
  <section class="our_works our_branches gallery">

    <div class="main_head_page">
      <h2 class="main_head">{{ $t('pages.gallery') }}</h2>
    </div>

    <div class="container">

      <div class="row justify-content-center">

        <div class="col-lg-4 col-md-6 col-12" v-for="(item, index) in items" :key="'a' + index">

          <div class="box_car">
            <div class="image">
              <img :src="item.image" title="" alt="car" width="100%" height="100%" />
              <span>{{ item.name }}</span>
            </div>

            <div class="info">
              <span v-if="item.windShield !== null"> windShield :{{ item.windShield }}, </span>
              <span v-if="item.panoramic !== null">panoramic : {{ item.panoramic }} , </span>
              <span v-if="item.rearWindow !== null">rearWindow : {{ item.rearWindow }}</span>
            </div>

            <div class="info">
              <span v-if="item.side_1_row !== null">side_1_row : {{ item.side_1_row }},</span>
              <span v-if="item.side_2_3_row !== null">side_2_3_row : {{ item.side_2_3_row }}</span>
            </div>

          </div>

        </div>

        <div class="flex-center m-5" v-if="!loading">
          <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
        </div>

      </div>

      <div class="row justify-content-center">
        <div class="paginate-g">
          <ul>
            <li class="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
          </ul>
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
      title: "gallery",
    }
  },


  // define all properties

  data() {
    return {
      items: [],
      loading: false,
    }
  },

  async asyncData({ app, $axios }) {

    try {

      return $axios.get('gallery').then(response => {

        console.log("gallery" + response.data)
        // this.loading = true; // this not work in asyncData because it runs before the component instance is created
        // Access component properties or methods using app
        app.loading = true;
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
    this.loading = true; // Move the loading state assignment to the created hook
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
