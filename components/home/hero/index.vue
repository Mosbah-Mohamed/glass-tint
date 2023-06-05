<template>
  <section class="header">

    <div class="container">

      <div class="row">

        <div class="col-12">

          <VueOwlCarousel v-if="types.length > 0" :loop="false" :margin="6" :autoHeight="true" :items="1"
            :navText="['<', '>']" :center="true" dir="ltr" :nav="true" :dots="true">

            <div class="item text-center">

              <div class="choose_car">

                <h1>{{ $t('pages.choose_car') }}</h1>

                <div class="group_btns">
                  <div class="" v-for="(type, index) in types" :key="'l' + index">
                    <div class="button">
                      <input type="radio" :id="type.id" name="car" :value="type.type_id"
                        @input="type_id = $event.target.value; updateImage(type.image)" :checked="type.type_id == 1" />
                      <label class="btn-type main--btn" :for="type.id">{{ type.type }}</label>
                    </div>
                  </div>
                </div>



                <div class="image">
                  <img :src="imageSrc" title="" alt="car" width="100%" height="100%" />
                </div>

                <button type="button" @click="sendCarType">
                  {{ $t('pages.appointment') }}
                  <font-awesome-icon :icon="['fas', 'arrow-right']" />
                </button>

              </div>

            </div>

            <div class="item">

              <div class="choose_car introduce">

                <div class="info">
                  <h2>{{ $t('pages.choose_car') }}</h2>
                  <p>{{ $t('pages.produce') }}.</p>
                </div>

                <div class="row">
                  <div class="col-lg-3 col-md-6 col-12" v-for="(item, index) in features" :key="'q' + index">
                    <div class="box">
                      <div class="icon">
                        <img :src="item.image" title="" alt="car" width="100%" height="100%" />
                      </div>
                      <div class="title">
                        <p>{{ item.name }}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <div class="item">

              <div class="choose_car introduce services">
                <h3>{{ $t('pages.SERVICES') }}</h3>

                <div class="row">
                  <div class="col-lg-4 col-md-6 col-12" v-for="(item, index) in categories" :key="'e' + index">
                    <div class="box">
                      <div class="icon">
                        <img :src="item.image" title="" alt="car" width="100%" height="100%" />
                      </div>
                      <div class="title">
                        <p>{{ item.name }}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>


          </VueOwlCarousel>

        </div>

      </div>

    </div>

  </section>
</template>

<script>


import { mapActions, mapMutations } from "vuex"

export default {

  name: "Home",

  // layout: 'default',


  // define all properties

  data() {
    return {
      types: [],
      features: [],
      categories: [],

      // get data

      type_id: 1,

      imageSrc: 'https://emary.azq1.com/GlassTint//storage/images/slider_caPNnlkvR0neSJSY.jpg'

    }
  },

  async fetch() {

    try {

      await this.$axios.get('home').then(response => {
        console.log(response.data)

        this.types = response.data.data.types;
        this.features = response.data.data.features;
        this.categories = response.data.data.categories;

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

    ...mapMutations(['setServices']),

    // update car image

    updateImage(imageSrc) {
      this.imageSrc = imageSrc;
    },

    // send appoint with car type

    async sendCarType() {

      try {

        await this.$axios.post('choose-type', {
          type: `${this.type_id}`
        }).then(response => {

          console.log(response.data.data);

          this.$store.commit('setServices', response.data.data)


          // this.$router.push(this.localePath({ path: `/services` }));


        }).catch(error => {
          console.log(error)
        })


      } catch (error) {
        console.log("catch : " + error)
      }

    }

  }
}
</script>

<style lang="scss" scoped>
.carousel-navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  /* Adjust button width as needed */
  height: 40px;
  /* Adjust button height as needed */
  background-color: #000;
  /* Adjust button background color as needed */
  color: #fff;
  /* Adjust button icon color as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

// radio buttons


.button {
  float: left;
  margin: 0 5px 0 0;
  width: 106px;
  height: 40px;
  position: relative;
}

.button label,
.button input {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.button input[type="radio"] {
  opacity: 0.011;
  z-index: 100;
}

.button input[type="radio"]:checked+label {
  background: #D02C30;
  color: #FFF
}

.button label {
  cursor: pointer;
  z-index: 90;
  line-height: 37px;
}
</style>
