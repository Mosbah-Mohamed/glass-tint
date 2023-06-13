<template>
  <section class="franchise">

    <div class="side_menu_types">
      <ul>
        <li v-for="(item, index) in items" :key="'f' + index" @click="sameTabTwo(item.id)"
          :class="{ 'active_tab': step == item.id }">
          <span class="inline-border"></span>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>

    <div class="container">

      <transition-group name="fade">
        <div v-for="(category, index) in items" :key="'t' + index" v-show="step === category.id">
          <div class="row justify-content-end" v-for="(nano, index) in category.nano_cermiacs" :key="'o' + index">


            <div class="col-10">
              <div class="image-ceramic">
                <img :src="nano.image" alt="ceramic" />
              </div>
            </div>

            <div class="col-10">
              <h2></h2>

              <p class="description" v-html="nano.description"></p>
            </div>

            <div class="col-10">
              <div class="row">
                <div class="col-lg-6 col-12 galleries" v-for="(gall, index) in nano.galleries">
                  <div class="image">
                    <img :src="gall.path" alt="galleries">
                  </div>
                </div>
              </div>
            </div>

            <div class="col-10">
              <h2 class="details">DETAILS</h2>

              <p class="p-det" v-html="nano.details"></p>
            </div>

            <div class="col-10">
              <div class="image-cover">
                <img :src="nano.cover" alt="">
              </div>
            </div>

            <div class="col-10">
              <h4 class="automotive">AUTOMOTIVE FILMPERFORMANCE DATA</h4>

              <div class="image-performance">
                <img :src="nano.performance_image" alt="performance_image">
              </div>

              <p class="p-performance" v-html="nano.performance"></p>
            </div>

            <div class="flex-center m-5" v-if="!loading">
              <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
            </div>

          </div>
        </div>
      </transition-group>

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
      step: 1
    }
  },

  async asyncData({ app, $axios }) {

    try {

      return $axios.get('nano-cermiac').then(response => {

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


    sameTabTwo(stepIndex) {
      this.step = stepIndex;
    },

  }
}
</script>

<style lang="scss" scoped>
.side_menu_types {
  background-image: url(/_nuxt/assets/images/wild-road.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  top: 0;
  right: 0;
  width: 260px;
  height: 100%;
  z-index: 9;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
    top: 0;
    right: 0;
    left: 0
  }
}


</style>
