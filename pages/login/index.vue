<template>
  <section class="courses_component articles">
    <div class="container">

      <div class="head text-center">
        <h2 class="main_head "> {{ $t('navbar.articles') }} </h2>
      </div>

      <div class="row align-items-center">

        <b-tabs card>
          <b-tab active>
            <b-card-text>

              <VueSlickCarousel v-bind="slickOptions" v-if="items.length">

                <div class="card_course" v-for="(item, index) in items" :key="index">
                  <div class="image_course">
                    <img :data-src="item.image" title="course" alt="partner image" width="100%" height="100%" />
                  </div>

                  <div class="card_content">

                    <h3 class="text-ellipsis-1">{{ item.title }}</h3>
                    <div class="appoint">
                      <div class="calender">
                        <font-awesome-icon :icon="['fas', 'calendar-days']" />
                        <span>{{ item.created_at }}</span>
                      </div>
                    </div>

                    <div class="course_link">
                      <nuxt-link :to="localePath({ path: `/singleArticle/${item.id}` })">

                        <a href="#" target="_blank" aria-label="course_link" rel="noopener noreferrer">
                          <span>{{ $t('pages.course_detail') }}</span>
                          <span><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>

                        </a></nuxt-link>
                    </div>

                  </div>

                </div>


              </VueSlickCarousel>

              <div class="flex-center m-5" v-if="!loading">
                <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
              </div>

              <nuxt-link :to="localePath('/articles')">
                <button class="main--btn all_courses" type="button">{{ $t('pages.all_articles') }}</button>
              </nuxt-link>


            </b-card-text>
          </b-tab>
        </b-tabs>

      </div>
    </div>


  </section>
</template>

<script>
export default {
  name: "courses-component",

  data() {
    return {

      // data from api

      items: [],
      loading: false,

      slickOptions: {
        slidesToShow: 4,
        arrows: true,
        margin: 30,
        "focusOnSelect": true,
        // "swipeToSlide": true,
        // "autoplay": true,s
        // "speed": 4000,
        "infinite": true,
        "autoplaySpeed": 4000,
        // "cssEase": "linear",
        "responsive": [
          {
            "breakpoint": 1150,
            "settings": {
              "slidesToShow": 3,
            }
          },
          {
            "breakpoint": 800,
            "settings": {
              "slidesToShow": 2,
              arrows: false,
              // autoplay: true
            }
          },
          {
            "breakpoint": 575,
            "settings": {
              "slidesToShow": 1,
              arrows: false,
              // autoplay: true
            }
          }
        ]
      }
    }
  },

  // get articles data in hero section

  async fetch() {
    try {
      return await this.$axios.get(`setting/articles`).then(response => {
        this.loading = true;
        this.items = response.data.data;
        // console.log(response.data.data)
      }).catch(error => {
        console.log(error)
      })
    } catch (error) {
      console.log("catch : " + error)
    }
  },


  mounted() {
  },


  methods: {

  }
}
</script>

<style lang="scss" scoped></style>
