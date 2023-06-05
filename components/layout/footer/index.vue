<template>
  <section class="footer">

    <h3 class="text-center">{{ $t('footer.foot_head') }}</h3>

    <div class="container">

      <div class="all_footer_content">
        <div class="row">

          <div class="col-lg-3 col-md-6 col-12">
            <a :href="'https://www.google.com/maps/search/?api=1&query=' + setting.address" target="_blank"
              rel="noopener noreferrer">
              <div class="icon_contact">
                <div class="icon">
                  <font-awesome-icon :icon="['fas', 'location-dot']" />
                </div>
                <div class="info">
                  <span>{{ setting.address }}</span>
                </div>
              </div>
            </a>

          </div>
          <div class="col-lg-2 col-md-6 col-12">
            <a :href="'tel:' + setting.phone" target="_self" rel="noopener noreferrer">
              <div class="icon_contact">
                <div class="icon">
                  <font-awesome-icon :icon="['fas', 'phone']" />
                </div>
                <div class="info">
                  <span>{{ setting.phone }}</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <a :href="'mailto:' + setting.email" target="_blank" rel="noopener noreferrer">
              <div class="icon_contact">
                <div class="icon">
                  <font-awesome-icon :icon="['fas', 'envelope']" />
                </div>
                <div class="info">
                  <span>{{ setting.email }}</span>
                </div>
              </div>
            </a>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="icon_contact">
              <div class="icon">
                <font-awesome-icon :icon="['fas', 'share-nodes']" />
              </div>
              <div class="info social_share">
                <a :href="setting.facebook" aria-label="Facebook" target="_blank" rel="noopener">Facebook</a>
                <a :href="'https://api.whatsapp.com/send?phone=' + setting.whatsapp" aria-label="Twitter" target="_blank"
                  rel="noopener">whatsapp</a>
                <a :href="setting.instagram" aria-label="Instagram" target="_blank" rel="noopener">Instagram</a>
                <a :href="setting.snapchat" aria-label="Snapchat" target="_blank" rel="noopener">Snapchat</a>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {

  name: "ourBranchesPage",

  layout: 'default',


  // define all properties

  data() {
    return {
      items: [],
    }
  },

  created() {

  },


  computed: {
    ...mapState(['setting'])
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
