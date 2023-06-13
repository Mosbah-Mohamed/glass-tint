<template>
  <div class="navbar_page">
    <div class="container_fluid">
      <div class="row align-items-baseline custom-center">

        <div class="col-lg-2 col-md-5 col-4">
          <nuxt-link :to="localePath('/')">
            <div class="logo">
              <img :src="setting.logo" title="" alt="nav logo" width="190" height="53" />
            </div>
          </nuxt-link>

        </div>

        <div class="col-lg-7 col-5 d-none-custom auth_lay">
          <div class="nav_items">
            <ul>
              <li><nuxt-link :to="localePath('/')">NANO CERMIAC WINDOW FILM</nuxt-link>

                <ul class="dropdown">
                  <li><nuxt-link :to="localePath('/history')">history</nuxt-link></li>
                </ul>

              </li>
              <li><nuxt-link :to="localePath('/gallery')">GALLERY</nuxt-link></li>
              <li><nuxt-link :to="localePath('/guarantee')">GUARANTEE</nuxt-link></li>
              <li><nuxt-link :to="localePath('/contact-us')">CONTACT</nuxt-link>

                <ul class="dropdown">
                  <li><nuxt-link :to="localePath('/contact-us')">Contact</nuxt-link></li>
                  <li><nuxt-link :to="localePath('/branches')">branches</nuxt-link></li>
                </ul>

              </li>
              <li><nuxt-link :to="localePath('/franchise')">COMMERCIAL FRANCHISE</nuxt-link></li>


            </ul>
          </div>
        </div>

        <div class="col-lg-3 col-md-7 col-8 auth_lay">

          <div class="nav_auth ">

            <div class="language">
              <nuxt-link v-if="$i18n.locale == 'en'" :to="switchLocalePath('ar')">
                <img src="@/assets/images/globe.svg" title="" alt="globe" width="190" height="53" />
                <span>Arabic</span>
              </nuxt-link>
              <nuxt-link v-else :to="switchLocalePath('en')">
                <img src="@/assets/images/globe.svg" title="" alt="globe" width="190" height="53" />
                <span>English</span>
              </nuxt-link>
            </div>

            <div class="btns-auth ">
              <!-- <button v-if="!$auth.loggedIn" aria-label="account" title="account" class="main--btn"><nuxt-link
                  :to="localePath('/signup')">{{
                    $t('navbar.signup') }}</nuxt-link></button> -->


              <!-- v-if="!$auth.loggedIn" -->
              <button aria-label="login" title="login" class="main--btn"><nuxt-link :to="localePath('/login')">{{
                $t('navbar.login') }}</nuxt-link></button>


            </div>

            <div class="sidebar side_bar_content d-none">
              <b-button v-b-toggle.sidebar-backdrop>
                <font-awesome-icon :icon="['fas', 'list']" />
                <!-- <font-awesome-icon icon="fa-solid fa-list" /> -->
              </b-button>

              <b-sidebar id="sidebar-backdrop" backdrop shadow>
                <div class="info">
                  <ul>
                    <li><nuxt-link :to="localePath('/')">NANO CERMIAC WINDOW FILM</nuxt-link></li>
                    <li><nuxt-link :to="localePath('/history')">history</nuxt-link></li>
                    <li><nuxt-link :to="localePath('/gallery')">GALLERY</nuxt-link></li>
                    <li><nuxt-link :to="localePath('/guarantee')">GUARANTEE</nuxt-link></li>
                    <li><nuxt-link :to="localePath('/contact-us')">CONTACT</nuxt-link></li>
                    <li><nuxt-link :to="localePath('/contact-us')">Contact</nuxt-link></li>
                    <li><nuxt-link :to="localePath('/branches')">branches</nuxt-link></li>
                    <li><nuxt-link :to="localePath('/franchise')">COMMERCIAL FRANCHISE</nuxt-link></li>


                  </ul>
                </div>
              </b-sidebar>

            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: "navbarPage",

  data() {
    return {
      categories: [],
    }
  },

  computed: {
    ...mapState(['setting'])
  },

  created() {

  },

  mounted() {

  },


  methods: {

    // get courses category data from api

    async getCategories() {
      try {
        return await this.$axios.get(`setting/categories`).then(response => {

          this.loading = true;

          // console.log(response.data.data.category_course)

          this.categories = response.data.data.category_course;

        }).catch(error => {
          console.log(error)
        })
      } catch (error) {
        console.log("catch : " + error)
      }
    },

    // handle logout

    handleLogOut() {

      this.$auth.logout();

      this.$cookies.remove('auth._token.local')
      // for set user from api
      window.localStorage.removeItem('vuex');

      this.$router.push(this.localePath({ path: "/" }));

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

<style lang="scss" scoped>
.dropdown-menu {
  transition: 0.5s;
}
</style>
