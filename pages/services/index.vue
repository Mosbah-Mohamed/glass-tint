<template>
  <div class="service_page">

    <LazyLayoutNavbar />

    <!-- start wizard -->

    <div class="container">

      <div class="scroll">
        <div class="heading d-flex mb-5">
          <!-- <h2 @click="step === 1">step 1</h2> -->
          <div @click="sameTab(1)" class="tab_head" :class="{ 'bot': step == 1 || step == 2 || step == 3 }">

            <span>{{ $t('pages.Define_services') }}</span>

          </div>
          <div @click="sameTab(2)" class="tab_head" :class="{ 'bot': step == 2 || step == 3, 'disabled': step == 1 }">

            <span>{{ $t('pages.time_branch') }}</span>

          </div>
          <div @click="sameTab(3)" class="tab_head" :class="{ 'bot': step == 3, 'disabled': step == 1 || step == 2 }">

            <span>{{ $t('pages.personal_data') }}</span>
          </div>
          <div @click="sameTab(4)" class="tab_head"
            :class="{ 'bot': step == 4, 'disabled': step == 1 || step == 2 || step == 3 }">
            <span>{{ $t('pages.confirm_pay') }}</span>
          </div>

        </div>
      </div>

      <div class="all_levels">
        <transition name="fade" :key="step">
          <div v-show="step === 1">

            <div class="row">
              <div class="col-lg-9 col-12">
                <div class="row">

                  <div class="col-lg-4 col-12">

                    <div class="total_box">
                      <div class="head_box text-center justify-content-center">
                        <span class="text-center">{{ $t('pages.SERVICES') }}</span>
                      </div>

                      <div class="box_info box_category">
                        <ul>
                          <li v-for="(category, index) in getServices" :key="'t' + index" @click="sameTabTwo(category.id)"
                            :class="{ 'bord_right': step_two == category.id }">
                            <img src="@/assets/images/Vector.png" title="" alt="logo" width="100%" height="100%" />
                            <span>{{ category.name }}</span>
                          </li>

                        </ul>
                      </div>

                    </div>
                  </div>

                  <div class="col-lg-8 col-12">

                    <transition-group name="" :key="step_two" tag="ul">
                      <div v-for="(category, index) in getServices" :key="'t' + index" v-show="step_two === category.id">

                        <div class="row">

                          <div class="col-lg-6 col-12 no-padd" v-for="(service, index) in category.serivces"
                            :key="'o' + index">
                            <div class="serv_item">

                              <div class="head_item" v-if="category.type == 'normal'">
                                <form>
                                  <div class="form-group fill_check">
                                    <input :ref="'anyName' + index" type="checkbox" :id="service.id"
                                      :name="'normal' + category.id" :value="service.id" :checked="isChecked(service)"
                                      @change="updateSelectedServices(service, category)">
                                    <label :for="service.id"></label>
                                  </div>
                                </form>
                                <!-- {{ selectedServices }} -->
                                <span>{{ service.name }}</span>

                                <img :src="service.image" title="" alt="logo" width="100%" height="100%" />

                              </div>

                              <div class="head_item" v-else>
                                <form>
                                  <div class="form-group fill_check">
                                    <input type="checkbox" :id="service.id" :name="service.name" :value="service.id"
                                      v-model="services" @change="updateSelectedServices(service, category)">
                                    <label :for="service.id"></label>
                                  </div>
                                </form>
                                <!-- {{ selectedServices }} -->
                                <span>{{ service.name }}</span>

                                <img :src="service.image" title="" alt="logo" width="100%" height="100%" />

                              </div>

                              <p>{{ service.description }}</p>

                              <div class="item_info">

                                <div class="time_work">
                                  <span><font-awesome-icon :icon="['far', 'clock']" /></span>
                                  <span>{{ service.duration }} {{ $t('pages.work_hours') }}</span>
                                </div>
                                <div class="time_work">
                                  <span><font-awesome-icon :icon="['far', 'credit-card']" /></span>
                                  <span>{{ service.price }} {{ $t('pages.riyal') }}</span>
                                </div>

                              </div>

                            </div>
                          </div>

                        </div>

                      </div>
                    </transition-group>

                  </div>

                </div>
              </div>
              <div class="col-lg-3 col-12">
                <div class="total_box">
                  <div class="head_box">
                    <span>{{ $t('pages.total_price') }}</span>
                    <span class="price">{{ total !== '' ? total : totalSelectedServicesPrice }} {{ $t('pages.riyal')
                    }}</span>
                  </div>

                  <div class="box_info">
                    <h4>{{ $t('pages.Required_services') }}</h4>
                    <ul>
                      <li v-for="(service, index) in selectedServices" :key="'j' + index">
                        <span>{{ service.name }}</span>
                        <span>{{ service.price }}</span>
                      </li>
                    </ul>


                  </div>

                  <!-- :disabled="!$refs.observer || $refs.observer.invalid" -->
                  <button class="Next_first" @click="FirstNextStep">
                    <span>{{ $t('pages.next') }}</span>
                    <span>
                      <font-awesome-icon :icon="['fas', 'arrow-left']" />
                    </span>
                  </button>

                </div>
              </div>
            </div>

          </div>
        </transition>

        <transition name="fade" :key="step">
          <div v-show="step === 2">

            <div class="row justify-content-between">

              <div class="col-lg-7 col-12">

                <div class="choose_country">
                  <h3>{{ $t('pages.branch_city') }}</h3>
                  <p>{{ $t('pages.please_choose') }}</p>
                </div>

                <multiselect v-model="city" label="name" :options="getCities" :searchable="false" :close-on-select="true"
                  :show-labels="false" track-by="id" :placeholder="$t('pages.city')" @select="sendSelectedServices">
                </multiselect>

                <!-- <span>{{ city.id }}</span> -->

                <multiselect v-model="branch" label="name" :options="getBranch" :searchable="false"
                  :close-on-select="true" :show-labels="false" track-by="id" :placeholder="$t('pages.branch')"
                  @select="sendCity"></multiselect>


                <transition name="fade">
                  <div v-if="show_date">

                    <div class="choose_country second_ch">
                      <h3>{{ $t('pages.time_date') }}</h3>
                      <p>{{ $t('pages.choose_date') }}</p>
                      <div class="date_check flex-center">
                        <input v-model="date" type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01"
                          max="2030-12-31">

                        <button @click="sendDate">
                          <b-spinner type="grow" label="Spinning" v-if="loading"></b-spinner>
                          <span v-else>تحقق</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </transition>


                <transition name="fade">
                  <div v-if="available_times">
                    <div class="choose_country second_ch">
                      <h3>{{ $t('pages.Available_appointments') }}</h3>
                    </div>
                    <div class="parent">

                      <transition-group>
                        <div class="button_available" v-for="(timeSlot, index) in timeSlots[0]" :key="'m' + index">
                          <input type="radio" id="'A'+index" name="check-substitution-2" :value="timeSlot"
                            v-model="selectedTimeSlot" />
                          <label class="btn btn-default" for="'A'+index" :disabled="index === timeSlots[0].length - 1"
                            :class="{ 'disabled-2': index === timeSlots[0].length - 1 }">{{
                              timeSlot }}</label>
                        </div>

                      </transition-group>
                    </div>
                  </div>
                </transition>

              </div>
              <div class="col-lg-4 col-12">
                <div class="total_box">
                  <div class="head_box">
                    <span>{{ $t('pages.total_price') }}</span>
                    <span class="price">{{ total !== '' ? total : totalSelectedServicesPrice }} ريال</span>
                  </div>

                  <div class="box_info">
                    <h4>{{ $t('pages.Required_services') }}</h4>
                    <ul>
                      <li v-for="(service, index) in selectedServices" :key="'j' + index">
                        <span>{{ service.name }}</span>
                        <span>{{ service.price }}</span>
                      </li>
                    </ul>

                  </div>

                  <!-- :disabled="!$refs.observer || $refs.observer.invalid" -->
                  <button class="Next_first" @click="secondNextStep">
                    <span>{{ $t('pages.next') }}</span>
                    <span>
                      <font-awesome-icon :icon="['fas', 'arrow-left']" />
                    </span>
                  </button>

                </div>

              </div>

            </div>
          </div>
        </transition>

        <transition name="fade" :key="step">
          <div v-show="step === 3">

            <div class="row justify-content-between">

              <div class="col-lg-7 col-12">
                <ValidationObserver v-slot="{ invalid }">
                  <form class="personal_info" action="" @submit.prevent="signup">

                    <div class="row">
                      <div class="col-lg-6 col-12">
                        <ValidationProvider rules="required|min:3" :name="$t('contact.first_name')" v-slot="{ errors }">
                          <div class="form-group">
                            <input type="text" v-model="formData.first_name" :placeholder="$t('contact.first_name')" />
                            <span class="error_validate">{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>

                      </div>

                      <div class="col-lg-6 col-12">
                        <!-- |email_end -->
                        <ValidationProvider rules="required|min:3" :name="$t('contact.last_name')" v-slot="{ errors }">
                          <div class="form-group">
                            <input type="text" v-model="formData.last_name" :placeholder="$t('contact.last_name')" />
                            <span class="error_validate">{{ errors[0] }}</span>
                          </div>

                        </ValidationProvider>
                      </div>
                    </div>

                    <ValidationProvider rules="required|email" :name="$t('contact.email')" v-slot="{ errors }">
                      <div class="form-group">
                        <input type="email" :placeholder="$t('contact.email')" v-model="formData.email" />
                        <span class="error_validate">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>

                    <ValidationProvider rules="required|min:10|numeric" :name="$t('contact.phone')" v-slot="{ errors }">
                      <div class="form-group position-relative">
                        <input type="text" v-model="formData.phone" :placeholder="$t('contact.phone')" />

                        <button class="check_code" type="button" @click="sendVerification">تحقق</button>
                        <span class="error_validate">{{ errors[0] }}</span>
                      </div>

                    </ValidationProvider>

                    <div v-if="show_fields">
                      <ValidationProvider rules="required" :name="$t('contact.code')" v-slot="{ errors }">
                        <div class="form-group position-relative">
                          <input type="text" v-model="code_check" @input="checkValidation"
                            :placeholder="$t('contact.code')" />
                          <p v-if="isInputValid" class="check_code-2 green"><font-awesome-icon
                              :icon="['fas', 'circle-check']" /></p>
                          <p v-else-if="code_check !== null" class="check_code-2 red"><font-awesome-icon
                              :icon="['fas', 'circle-xmark']" /></p>
                          <span class="error_validate">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>

                      <ValidationProvider rules="required|min:9" v-slot="{ errors }" :name="$t('login.password')">
                        <div class="form-group position-relative">
                          <input :type="[showPassword ? 'text' : 'password']" :placeholder="$t('login.password')" required
                            v-model="password" ref="password" @input="savePassword">
                          <div class="eye" @click="showPassword = !showPassword">
                            <font-awesome-icon :icon="icon" />
                          </div>
                          <span class="error_validate">{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </div>


                  </form>
                </ValidationObserver>
              </div>

              <div class="col-lg-4 col-12">
                <div class="total_box">
                  <div class="head_box">
                    <span>{{ $t('pages.total_price') }}</span>
                    <span class="price">{{ total !== '' ? total : totalSelectedServicesPrice }} ريال</span>
                  </div>

                  <div class="box_info">
                    <h4>{{ $t('pages.Required_services') }}</h4>
                    <ul>
                      <li v-for="(service, index) in selectedServices" :key="'j' + index">
                        <span>{{ service.name }}</span>
                        <span>{{ service.price }}</span>
                      </li>
                    </ul>


                  </div>

                  <!-- :disabled="!$refs.observer || $refs.observer.invalid" -->
                  <button class="Next_first" @click="thirdNextStep">
                    <span>{{ $t('pages.next') }}</span>
                    <span>
                      <font-awesome-icon :icon="['fas', 'arrow-left']" />
                    </span>
                  </button>

                </div>

              </div>

            </div>
          </div>
        </transition>

        <transition name="fade" :key="step">
          <div v-show="step === 4">

            <div class="row justify-content-between">

              <div class="col-lg-7 col-12">
                <div class="choose_country">
                  <h3>اختر طريقة الدفع المناسبة</h3>
                </div>

                <div class="choose_payment">

                  <div class="all_payment">
                    <div class="payment_method">
                      <div class="image">
                        <img src="@/assets/images/apple.svg" title="" alt="pay logo" width="100%" height="100%" />
                      </div>
                      <p>Apple Pay</p>
                    </div>
                    <div class="payment_method">
                      <div class="image">
                        <img src="@/assets/images/apple.svg" title="" alt="pay logo" width="100%" height="100%" />
                      </div>
                      <p>Apple Pay</p>
                    </div>
                    <div class="payment_method">
                      <div class="image">
                        <img src="@/assets/images/apple.svg" title="" alt="pay logo" width="100%" height="100%" />
                      </div>
                      <p>Apple Pay</p>
                    </div>
                    <div class="payment_method">
                      <div class="image">
                        <img src="@/assets/images/apple.svg" title="" alt="pay logo" width="100%" height="100%" />
                      </div>
                      <p>Apple Pay</p>
                    </div>
                  </div>

                  <div class="payment_form">
                    <ValidationObserver v-slot="{ invalid }" ref='observer'>
                      <form class="personal_info" action="" @submit.prevent="signup">

                        <ValidationProvider rules="required" :name="$t('login.address')" v-slot="{ errors }">
                          <div class="form-group mb-40">
                            <label for="">رقم البطاق</label>
                            <input type="text" v-model.trim="formData.address" placeholder="0000 0000 0000" />
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>

                        <div class="row">
                          <div class="col-lg-6 col-12">
                            <ValidationProvider rules="required|min:3" :name="$t('contact.name')" v-slot="{ errors }">
                              <div class="form-group">
                                <label for="">تاريخ الانتهاء</label>
                                <input type="text" v-model="formData.name" placeholder="MM/YY" />
                                <span>{{ errors[0] }}</span>
                              </div>
                            </ValidationProvider>

                          </div>

                          <div class="col-lg-6 col-12">
                            <!-- |email_end -->
                            <ValidationProvider rules="required|min:3" :name="$t('contact.name')" v-slot="{ errors }">
                              <div class="form-group">
                                <label for="">الرقم السرى</label>
                                <input type="text" v-model="formData.name" placeholder="000" />
                                <span>{{ errors[0] }}</span>
                              </div>

                            </ValidationProvider>
                          </div>

                        </div>



                      </form>
                    </ValidationObserver>
                  </div>

                </div>
              </div>

              <div class="col-lg-4 col-12">
                <div class="total_box">
                  <div class="head_box">
                    <span>{{ $t('pages.total_price') }}</span>
                    <span class="price">{{ total !== '' ? total : totalSelectedServicesPrice }} ريال</span>
                  </div>

                  <div class="box_info">
                    <h4>{{ $t('pages.Required_services') }}</h4>
                    <ul>
                      <li v-for="(service, index) in selectedServices" :key="'j' + index">
                        <span>{{ service.name }}</span>
                        <span>{{ service.price }}</span>
                      </li>
                    </ul>


                  </div>

                  <button class="Next_first" @click="sendCheckout">
                    <span>تأكيد الدفع</span>
                    <span>
                      <font-awesome-icon :icon="['fas', 'arrow-left']" />
                    </span>
                  </button>

                </div>

                <div class="coupon">
                  <span class="code_text" @click="show_form = !show_form">هل لديك كود خصم؟</span>
                  <transition name="fade">
                    <form v-if="show_form">
                      <div class="form-group">
                        <input type="text" v-model="coupon" />
                        <button type="button" @click="sendCoupon">إضافة</button>
                      </div>
                    </form>
                  </transition>

                </div>
              </div>

            </div>

          </div>
        </transition>

      </div>
    </div>

    <!-- end wizard -->

    <LazyLayoutFooter />

  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  name: "ourServices",

  layout: "main",

  components: {
    ValidationProvider,
    ValidationObserver
  },

  data() {
    return {
      step: 1,
      step_two: 1,

      showPassword: false,

      // select order

      options: '',
      city: '',
      branch: '',
      date: '',

      formData: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
      },
      password: '',

      code_check: null,
      isInputValid: null,

      // show date field input
      show_date: false,

      // show coupon
      show_form: false,

      // show password field and coupon filed in personal info

      show_fields: false,

      // get services id
      services: [],

      // coupon

      coupon: '',

      total: '',

      // start and end date
      timeSlots: '',
      selectedTimeSlot: null,
      available_times: false,
      nextTimeSlot: null,

      loading: false

    };
  },

  watch: {

    selectedTimeSlot() {

      this.nextTimeSlot = this.getNextTimeSlot();

      this.setTimeFrom(this.selectedTimeSlot)

      this.setTimeEnd(this.nextTimeSlot)

    }

  },

  computed: {

    ...mapState(['branch', 'selectedServices', 'personalInfo']),
    ...mapGetters([
      'getServices', 'getSelectedServices', 'totalSelectedServicesPrice', 'selectedServicesIds',
      'getType', 'getCities', 'getBranch', 'getDate',
      'getCode', 'getCoupon', 'getTimes', 'getPassword',
      'getTime_from', 'getTime_end'
    ]),


    // toggle eye icon

    icon() {
      if (this.showPassword) {
        return ["fas", "eye-slash"];
      } else {
        return ["fas", "eye"];
      }
    },

    isChecked() {
      return (service) => {
        return this.selectedServices.some((s) => s.id === service.id);
      };
    }

  },

  methods: {

    ...mapMutations([
      'setSelectedServices', 'ADD_SELECTED_SERVICE',
      'REPLACE_SELECTED_SERVICE', 'setBranch', 'setDate',
      'setPersonalInfo', 'setCode', 'setPassword', 'setCoupon',
      'setTime', 'setTimeFrom', 'setTimeEnd', 'SET_BRANCH', 'CLEAR_STORE'
    ]),
    ...mapActions(['updateSelectedServices2', 'setPersonalInfoAction']),

    updateSelectedServices(service, category) {
      // this.$refs.anyName.reset();
      this.$store.dispatch('updateSelectedServices2', { service, category });

    },

    // send appoint with car type

    async sendSelectedServices() {

      this.branch = [];
      this.getBranch = null;

      this.SET_BRANCH([])

      this.show_date = false;
      this.available_times = false;

      try {

        await this.$axios.post('choose-city', {
          type: `${this.getType}`,
          services: this.selectedServicesIds,
          city: `${this.city.id}`
        }).then(response => {

          this.branch = [];
          this.getBranch = '';
          this.date = null;

          this.setBranch(response.data.data)

          // console.log(response.data.data)

        }).catch(error => {
          console.log(error)
        })


      } catch (error) {
        console.log("catch : " + error)
      }

    },

    // send city to get branches

    async sendCity() {

      try {

        await this.$axios.post('choose-branch', {
          type: `${this.getType}`,
          services: this.selectedServicesIds,
          city: `${this.city.id}`,
          branch: `${this.branch.id}`
        }).then(response => {

          this.show_date = true;

        }).catch(error => {
          console.log(error);

          this.$swal.fire({
            position: 'center',
            type: 'warning',
            title: error.response.data.data,
            showConfirmButton: false,
            timer: 3000
          });

          // const Toast = Swal.mixin({
          //   toast: true,
          //   position: 'top-end',
          //   showConfirmButton: false,
          //   timer: 300000,
          //   timerProgressBar: true,
          // })

          // Toast.fire({
          //   type: 'success',
          //   title: 'Signed in successfully'
          // })

        })


      } catch (error) {
        console.log("catch : " + error)
      }

    },

    // send date to get available times

    async sendDate() {

      this.loading = true;

      try {

        await this.$axios.post('choose-date', {
          type: `${this.getType}`,
          services: this.selectedServicesIds,
          city: `${this.city.id}`,
          branch: `${this.branch.id}`,
          date: `${this.date}`
        }).then(response => {

          this.loading = false;

          this.available_times = true;
          this.timeSlots = response.data.data
          this.setDate(this.date)
          this.setTime(response.data.data)

        }).catch(error => {
          console.log(error);

          this.$swal.fire({
            position: 'center',
            type: 'warning',
            title: error.response.data.data,
            showConfirmButton: false,
            timer: 3000
          });
        })


      } catch (error) {
        console.log("catch : " + error)
      }

    },

    // send verification

    async sendVerification() {

      try {

        await this.$axios.post('send-verification', this.formData).then(response => {

          if (response.data.status == 200) {
            this.show_fields = true;

            this.setCode(response.data.data.code)

            this.setPersonalInfoAction(this.formData)

          }

        }).catch(error => {
          console.log(error)

          this.$swal.fire({
            position: 'center',
            type: 'warning',
            title: error.response.data.data,
            showConfirmButton: false,
            timer: 3000
          });

        })


      } catch (error) {
        console.log("catch : " + error)
      }

    },

    // send coupon

    async sendCoupon() {

      try {

        await this.$axios.post('apply-coupon', {
          services: this.selectedServicesIds,
          coupon: this.coupon
        }).then(response => {

          if (response.data.status == 200) {
            this.total = response.data.data.total;

            this.setCoupon(this.coupon)

            this.coupon = '';

          }

        }).catch(error => {
          console.log(error)

          this.$swal.fire({
            position: 'center',
            type: 'warning',
            title: error.response.data.data,
            showConfirmButton: false,
            timer: 3000
          });

        })


      } catch (error) {
        console.log("catch : " + error)
      }

    },

    // check validation code

    checkValidation() {
      if (this.code_check == this.getCode) {
        this.isInputValid = true;
      } else {
        this.isInputValid = false;
      }

    },

    // save password

    savePassword() {
      this.setPassword(this.password)
    },


    // send all data to finish

    async sendCheckout() {

      try {

        await this.$axios.post('checkout', {
          type: `${this.getType}`,
          services: this.selectedServicesIds,
          city: `${this.city.id}`,
          branch: `${this.branch.id}`,
          date: `${this.date}`,
          time_from: `${this.getTime_from}`,
          time_end: `${this.getTime_end}`,
          coupon: `${this.getCoupon}`,
          code: `${this.getCode}`,
          first_name: `${this.personalInfo.first_name}`,
          last_name: `${this.personalInfo.last_name}`,
          email: `${this.personalInfo.email}`,
          phone: `${this.personalInfo.phone}`,
          total: this.total ? this.total : this.totalSelectedServicesPrice,
          password: this.getPassword

        }).then(response => {

          this.$swal.fire({
            position: 'center',
            type: 'success',
            title: "successful order",
            showConfirmButton: false,
            timer: 3000
          });

          this.CLEAR_STORE();
          this.$router.push(this.localePath({ path: `/` }));

        }).catch(error => {
          console.log(error);

          this.$swal.fire({
            position: 'center',
            type: 'warning',
            title: error.response.data.data,
            showConfirmButton: false,
            timer: 3000
          });
        })


      } catch (error) {
        console.log("catch : " + error)
      }

    },

    // getNextTimeSlot

    getNextTimeSlot() {
      if (this.selectedTimeSlot) {
        const timeSlotsArray = Object.values(this.timeSlots[0]);
        const currentIndex = timeSlotsArray.indexOf(this.selectedTimeSlot);
        if (currentIndex < timeSlotsArray.length - 1) {
          return timeSlotsArray[currentIndex + 1];
        }
      }
      return null;
    },

    // form wizard functions

    FirstNextStep() {

      if (this.getSelectedServices.length == 0) {
        this.$swal.fire({
          position: 'center',
          type: 'warning',
          title: 'please choose one service at least',
          showConfirmButton: false,
          timer: 3000
        });
      } else {
        this.step += 1;
      }

    },

    secondNextStep() {

      if (this.getBranch.length == 0 || this.getTime_from == null || this.getTime_end == null) {
        this.$swal.fire({
          position: 'center',
          type: 'warning',
          title: 'please fill all inputs',
          showConfirmButton: false,
          timer: 3000
        });
      } else {
        this.step += 1;
      }

    },

    thirdNextStep() {

      if (Object.keys(this.personalInfo).length == 0 || this.code_check != this.getCode || this.getPassword == null) {
        this.$swal.fire({
          position: 'center',
          type: 'warning',
          title: 'please fill all inputs',
          showConfirmButton: false,
          timer: 3000
        });
      } else {
        this.step += 1;
      }

    },

    prevStep() {
      this.step -= 1;
    },

    sameTab(stepIndex) {
      console.log(stepIndex)
      this.step = stepIndex;
    },

    sameTabTwo(stepIndex) {
      console.log(stepIndex)
      this.step_two = stepIndex;
    },

    submit() {
      // handle form submission
    },
  },

  mounted() {


    if (this.getServices.length == 0) {
      this.$router.push(this.localePath({ path: `/` }));
    }


  }


};
</script>

<style lang="scss">
.disabled {
  pointer-events: none;
  opacity: 0.5;
  user-select: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bord_right {
  border-right: 3px solid #d02c30;

  span {
    color: #d02c30 !important;
    font-weight: 500;
  }
}

.bot {
  border-bottom: 2px solid #fff;
}

.parent>span {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 15px;
  flex-wrap: wrap;
}

.button_available {
  float: left;
  margin-bottom: 10px;
  width: 100px;
  max-width: 100px;
  height: 40px;
  position: relative;
  // background: rgba($color: #FFF, $alpha: 0.43);
  background: #FFF;
  border-radius: 15px;

  cursor: pointer;
  font-weight: 400;
  font-size: 14px;

  &:last-child {
    display: none;
  }
}

.button_available label,
.button_available input {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

}

.button_available input[type="radio"]+label {
  border: 2px solid transparent;
}

.button_available input[type="radio"] {
  opacity: 0.011;
  z-index: 100;
}

.button_available input[type="radio"]:checked+label {
  background: #FFF;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  color: #000;
  border: 2px solid #ffb800
}

.button_available label {
  cursor: pointer;
  z-index: 90;
  line-height: 1.8em;
}
</style>
