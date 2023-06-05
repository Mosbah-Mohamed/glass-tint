<template>
  <section class="our_works our_branches gallery history guarantee">

    <div class="main_head_page">
      <h2 class="main_head">{{ $t('pages.GUARANTEE') }}</h2>
    </div>

    <div class="">

      <div class="div_group">
        <div class="warn"
          :class="{ 'warn-2': guarantee.id == 2, 'warn-3': guarantee.id == 3, 'warn-4': guarantee.id == 4 }"
          v-for="(guarantee, index ) in guarantees" :key="'p' + index">
          <span class="number">{{ index + 1 }}</span>
          <p>{{ guarantee.description }}</p>
        </div>s
      </div>

    </div>

    <div class="period">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-lg-5 col-12">
            <h4>{{ $t('pages.periods') }}</h4>
          </div>

          <div class="col-lg-6 col-12">
            <div class="info">
              <h5>{{ $t('pages.nano') }}</h5>

              <ul>
                <li v-for="(item, index ) in items" :key="'o' + index">
                  <span>{{ item.name }}</span>
                  <span>{{ item.years }}</span>
                </li>
              </ul>
            </div>
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
      title: "guarantee",
    }
  },


  // define all properties

  data() {
    return {
      guarantees: [],
      items: []
    }
  },

  // get data from server

  async asyncData({ $axios }) {

    try {

      return $axios.get('guarantee').then(response => {
        return {
          guarantees: response.data.data.guarantees,
          items: response.data.data.items
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
