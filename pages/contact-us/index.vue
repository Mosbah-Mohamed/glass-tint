<template>
  <section class="our_works contact">

    <div class="main_head_page">
      <h2 class="main_head">{{ $t("contact.contact_us") }}</h2>
    </div>

    <div class="container">

      <div class="row">

        <div class="col-lg-6 col-12">
          <div class="all_info" data-aos="fade-left">

            <div class="contact_form">
              <div class="head">
                <h3 class="main_head">{{ $t("contact.contact_us") }}</h3>
              </div>
              <ValidationObserver v-slot="{ invalid }" ref='observer'>
                <form action="" @submit.prevent="sendData">

                  <div class="row">
                    <div class="col-lg-6 col-12">
                      <ValidationProvider rules="required|min:4" :name="$t('contact.first_name')" v-slot="{ errors }">
                        <div class="form-group">
                          <input type="text" v-model="form.first_name" :placeholder="$t('contact.first_name')" />
                          <span class="error_validate">{{ errors[0] }}</span>
                        </div>

                      </ValidationProvider>

                    </div>
                    <div class="col-lg-6 col-12">
                      <ValidationProvider rules="required|min:4" :name="$t('contact.last_name')" v-slot="{ errors }">
                        <div class="form-group">
                          <input type="text" v-model="form.last_name" :placeholder="$t('contact.last_name')" />
                          <span class="error_validate">{{ errors[0] }}</span>
                        </div>

                      </ValidationProvider>

                    </div>
                  </div>

                  <ValidationProvider rules="required|email" :name="$t('contact.email')" v-slot="{ errors }">
                    <div class="form-group">
                      <input type="email" v-model="form.email" :placeholder="$t('contact.email')" />
                      <span class="error_validate">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>

                  <ValidationProvider rules="required|min:10" :name="$t('contact.phone')" v-slot="{ errors }">
                    <div class="form-group">
                      <input type="text" v-model="form.phone" :placeholder="$t('contact.phone')" />
                      <span class="error_validate">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>


                  <ValidationProvider rules="required|max:150|min:5" :name="$t('contact.message')" v-slot="{ errors }">
                    <div class="form-group">
                      <textarea v-model="form.message" :placeholder="$t('contact.message')"></textarea>
                      <span class="error_validate">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>

                  <div class="form-group">


                    <button class="send_btn main--btn" :disabled="invalid" aria-label="send" title="" type="submit"
                      v-b-tooltip.hover :title="invalid ? $t('buttons.validtion_tootip') : ''">{{
                        $t('contact.send') }}
                    </button>

                  </div>

                </form>
              </ValidationObserver>
            </div>

          </div>
        </div>

        <div class="col-lg-6 col-12">

          <div class="contact_info contact_form">

            <div class="head">
              <h3 class="main_head"> {{ $t("contact.contact_info") }}:</h3>
            </div>

            <div class="icon_contact">
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'phone']" />
              </div>
              <div class="info">
                <span> {{ $t("contact.phone") }}:</span>
                <span>{{ setting.phone }}</span>
              </div>
            </div>

            <div class="icon_contact">
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'envelope']" />
              </div>
              <div class="info">
                <span> {{ $t("contact.email") }}:</span>
                <span>{{ setting.email }}</span>
              </div>
            </div>

            <!-- <div class="icon_contact">
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'clock']" />
              </div>
              <div class="info">
                <span> {{ $t('contact.time_work') }}:</span>
                <span>السبت - الخميس: 09:00 - 21:00</span>
                <span>السبت - الخميس: 09:00 - 21:00</span>
              </div>
            </div> -->

          </div>

        </div>

      </div>

    </div>

  </section>
</template>

<script>

import { mapState } from "vuex"

import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {

  name: "contactPage",

  layout: 'default',

  head() {
    return {
      title: "contact us",
    }
  },


  // define all properties

  components: {
    ValidationProvider,
    ValidationObserver
  },


  data() {
    return {

      form: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: ""
      },

    }
  },



  computed: {
    ...mapState(['setting'])
  },

  //  when component load

  mounted() {

    // this.getData();

    window.scrollTo(0, 0);
    this.$nextTick(() => {
      window.scrollTo(0, 0);
    });
  },


  // All methods and logic

  methods: {

    //  get contact data

    // async getData() {
    //   try {
    //     return await this.$axios.get(`setting/layout`).then(response => {
    //       this.logoImage = response.data.data.logo_footer;
    //       this.email = response.data.data.email;
    //       this.phone = response.data.data.phone;
    //       this.address = response.data.data.address;
    //       this.fb = response.data.data.fb;
    //       this.tw = response.data.data.tw;
    //       this.inst = response.data.data.inst;
    //       this.youtube = response.data.data.youtube;
    //       this.whatsapp_phone = response.data.data.whatsapp_phone;
    //       this.map = response.data.data.map;
    //       // console.log(response.data.data.logo)
    //     }).catch(error => {
    //       console.log(error)
    //     })
    //   } catch (error) {
    //     console.log("catch : " + error)
    //   }
    // },


    // send data from contact form

    async sendData() {

      try {
        await this.$axios.$post('contact', this.form).then(response => {

          this.form.first_name = '';
          this.form.last_name = '';
          this.form.email = '';
          this.form.phone = '';
          this.form.message = '';

          this.$refs.observer.reset();

          this.$swal.fire({
            position: 'center',
            type: 'success',
            text: `${response.data}`,
            showConfirmButton: false,
            timer: 3000
          })

          // this.$router.push(this.localePath({ path: "/" }));


        }).catch(error => {
          console.log(error.response.data)

          this.$swal.fire({
            type: 'error',
            text: `${error.response.data}`,
            timer: 3000,
            // confirmButtonColor: '#ff7400',
          })

        })
      } catch (error) {
        console.log('try catch =>', error);
      }

    },

  }
}
</script>

<style lang="scss" scoped></style>
