<template>
  <div class="service_page">
    <!-- {{ checkboxIcon }} -->

    <!-- <div class="form-group fill_check">

      <input type="checkbox" id="item">

      <label for=item>item</label>
    </div> -->

    <LazyLayoutNavbar />

    <!-- start wizard -->

    <div class="container">

      <div class="scroll">
        <div class="heading d-flex mb-5">
          <!-- <h2 @click="step === 1">step 1</h2> -->
          <div @click="sameTab(1)" class="tab_head" :class="{ 'bot': step == 1 || step == 2 || step == 3 }">

            <span>تحديد الخدمات</span>

          </div>
          <div @click="sameTab(2)" class="tab_head" :class="{ 'bot': step == 2 || step == 3, 'disabled': step == 1 }">

            <span>تحديد الفرع والوقت</span>

          </div>
          <div @click="sameTab(3)" class="tab_head" :class="{ 'bot': step == 3, 'disabled': step == 1 || step == 2 }">

            <span>البيانات الشخصية</span>
          </div>
          <div @click="sameTab(4)" class="tab_head"
            :class="{ 'bot': step == 4, 'disabled': step == 1 || step == 2 || step == 3 }">
            <span>التأكيد والدفع</span>
          </div>

        </div>
      </div>

      <div class="row">
        <div class="col-lg-9 col-12">
          <div class="all_levels">
            <transition name="fade" :key="step">
              <div v-show="step === 1">

                <div class="row">
                  <div class="col-lg-4 col-12">
                    <div class="total_box">
                      <div class="head_box text-center">
                        <span class="text-center">خدماتنا</span>
                      </div>

                      <div class="box_info box_category">
                        <ul>
                          <li @click="sameTabTwo(5)"
                            :class="{ 'bord_right': step_two == 5, 'disabled': step_two == 6 || step_two == 7 || step_two == 8 }">
                            <img src="@/assets/images/Vector.png" title="" alt="logo" width="100%" height="100%" />
                            <span>التلميع</span>
                          </li>
                          <li @click="sameTabTwo(6)">
                            <img src="@/assets/images/Vector.png" title="" alt="logo" width="100%" height="100%" />
                            <span>التلميع</span>
                          </li>
                          <li>
                            <img src="@/assets/images/Vector.png" title="" alt="logo" width="100%" height="100%" />
                            <span>التلميع</span>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                  <div class="col-lg-8 col-12">

                    <transition name="" :key="step_two">
                      <div v-show="step_two === 5">

                        <div class="row">
                          <div class="col-lg-6 col-12">
                            <div class="serv_item">

                              <div class="head_item">
                                <div class="form-group fill_check">
                                  <input type="checkbox" id="item">
                                  <label for=item>
                                    <span>تلميع</span>
                                  </label>
                                </div>

                                <img src="@/assets/icons/car-wash.png" title="" alt="logo" width="100%" height="100%" />

                              </div>

                              <p>تلميع ناعم الخدمة خاصة للسيارات الجديدة</p>

                              <div class="item_info">

                                <div class="time_work">
                                  <span><font-awesome-icon :icon="['far', 'clock']" /></span>
                                  <span>4 ساعات عمل</span>
                                </div>
                                <div class="time_work">
                                  <span><font-awesome-icon :icon="['far', 'credit-card']" /></span>
                                  <span>300 ريال</span>
                                </div>

                              </div>

                            </div>
                          </div>
                          <div class="col-lg-6 col-12">
                            <div class="serv_item">

                              <div class="head_item">
                                <div class="form-group fill_check">
                                  <input type="checkbox" id="item">
                                  <label for=item>
                                    <span>تلميع</span>
                                  </label>
                                </div>

                                <img src="@/assets/icons/car-wash.png" title="" alt="logo" width="100%" height="100%" />

                              </div>

                              <p>تلميع ناعم الخدمة خاصة للسيارات الجديدة</p>

                              <div class="item_info">

                                <div class="time_work">
                                  <span><font-awesome-icon :icon="['far', 'clock']" /></span>
                                  <span>4 ساعات عمل</span>
                                </div>
                                <div class="time_work">
                                  <span><font-awesome-icon :icon="['far', 'credit-card']" /></span>
                                  <span>300 ريال</span>
                                </div>

                              </div>

                            </div>
                          </div>
                          <div class="col-lg-6 col-12">
                            <div class="serv_item">

                              <div class="head_item">
                                <div class="form-group fill_check">
                                  <input type="checkbox" id="item">
                                  <label for=item>
                                    <span>تلميع</span>
                                  </label>
                                </div>

                                <img src="@/assets/icons/car-wash.png" title="" alt="logo" width="100%" height="100%" />

                              </div>

                              <p>تلميع ناعم الخدمة خاصة للسيارات الجديدة</p>

                              <div class="item_info">

                                <div class="time_work">
                                  <span><font-awesome-icon :icon="['far', 'clock']" /></span>
                                  <span>4 ساعات عمل</span>
                                </div>
                                <div class="time_work">
                                  <span><font-awesome-icon :icon="['far', 'credit-card']" /></span>
                                  <span>300 ريال</span>
                                </div>

                              </div>

                            </div>
                          </div>
                          <div class="col-lg-6 col-12">
                            <div class="serv_item">

                              <div class="head_item">
                                <div class="form-group fill_check">
                                  <input type="checkbox" id="item">
                                  <label for=item>
                                    <span>تلميع</span>
                                  </label>
                                </div>

                                <img src="@/assets/icons/car-wash.png" title="" alt="logo" width="100%" height="100%" />

                              </div>

                              <p>تلميع ناعم الخدمة خاصة للسيارات الجديدة</p>

                              <div class="item_info">

                                <div class="time_work">
                                  <span><font-awesome-icon :icon="['far', 'clock']" /></span>
                                  <span>4 ساعات عمل</span>
                                </div>
                                <div class="time_work">
                                  <span><font-awesome-icon :icon="['far', 'credit-card']" /></span>
                                  <span>300 ريال</span>
                                </div>

                              </div>

                            </div>
                          </div>
                        </div>

                      </div>
                    </transition>

                    <transition name="" :key="step_two">
                      <div v-show="step_two === 6">
                        <h2>Step 5</h2>
                        <button @click="prevStep">Previous</button>
                        <button @click="submit">Submit</button>
                      </div>
                    </transition>


                  </div>
                </div>

              </div>
            </transition>

            <transition name="fade" :key="step">
              <div v-show="step === 2">

                <div class="choose_country">
                  <h3>إختيار المدينة والفرع</h3>
                  <p>من فضلك قم باختيار المنطقة والفرع الأقرب لك</p>
                </div>

                <multiselect v-model="order" :options="options" :searchable="false" :close-on-select="true"
                  :show-labels="false" placeholder="order"></multiselect>

                <multiselect v-model="order" :options="options" :searchable="false" :close-on-select="true"
                  :show-labels="false" placeholder="order"></multiselect>

                <div class="choose_country second_ch">
                  <h3>الوقت والتاريخ</h3>
                  <p>من فضلك قم باختيار الموعد المناسب لك</p>
                </div>

                <input type="date" id="start" name="trip-start" value="2018-07-22" min="2018-01-01" max="2018-12-31">

              </div>
            </transition>

            <transition name="fade" :key="step">
              <div v-show="step === 3">

                <ValidationObserver v-slot="{ invalid }">
                  <form class="personal_info" action="" @submit.prevent="signup">

                    <div class="row">
                      <div class="col-lg-6 col-12">
                        <ValidationProvider rules="required|min:3" :name="$t('contact.name')" v-slot="{ errors }">
                          <div class="form-group">
                            <input type="text" v-model="formData.name" :placeholder="$t('contact.name')" />
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>

                      </div>

                      <div class="col-lg-6 col-12">
                        <!-- |email_end -->
                        <ValidationProvider rules="required|min:3" :name="$t('contact.name')" v-slot="{ errors }">
                          <div class="form-group">
                            <input type="text" v-model="formData.name" :placeholder="$t('contact.name')" />
                            <span>{{ errors[0] }}</span>
                          </div>

                        </ValidationProvider>
                      </div>

                    </div>

                    <ValidationProvider rules="required|email" :name="$t('contact.email')" v-slot="{ errors }">
                      <div class="form-group">
                        <input type="email" :placeholder="$t('contact.email')" v-model="formData.email" />
                        <span>{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>

                    <ValidationProvider rules="required|min:3" :name="$t('contact.name')" v-slot="{ errors }">
                      <div class="form-group position-relative">
                        <input type="text" v-model="formData.name" placeholder="رقم الجوال" />

                        <button class="check_code">تحقق</button>
                        <span>{{ errors[0] }}</span>
                      </div>

                    </ValidationProvider>

                    <ValidationProvider rules="required" :name="$t('login.address')" v-slot="{ errors }">
                      <div class="form-group">
                        <input type="text" v-model.trim="formData.address" placeholder="ادخل رمز التحقق" />
                        <span>{{ errors[0] }}</span>
                      </div>

                    </ValidationProvider>


                    <!-- |pa -->
                    <ValidationProvider rules="required|min:9" v-slot="{ errors }" name="password">
                      <div class="form-group position-relative">
                        <input :type="[showPassword ? 'text' : 'password']" placeholder="********" required
                          v-model.trim="formData.password" ref="password">
                        <div class="eye" @click="showPassword = !showPassword">
                          <font-awesome-icon :icon="icon" />
                        </div>
                        <span>{{ errors[0] }}</span>

                      </div>
                    </ValidationProvider>


                  </form>
                </ValidationObserver>

              </div>
            </transition>

            <transition name="fade" :key="step">
              <div v-show="step === 4">

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
            </transition>
          </div>
        </div>

        <div class="col-lg-3 col-12">
          <div class="total_box">
            <div class="head_box">
              <span>السعر الكلى:</span>
              <span class="price">1800 ريال</span>
            </div>

            <div class="box_info">
              <h4>الخدمات المطلوبة:</h4>
              <ul>
                <li>
                  <span>تلميع ساطع</span>
                  <span>500 ريال</span>
                </li>
                <li>
                  <span>تلميع ساطع</span>
                  <span>500 ريال</span>
                </li>
                <li>
                  <span>تلميع ساطع</span>
                  <span>500 ريال</span>
                </li>
              </ul>
            </div>

            <!-- :disabled="!$refs.observer || $refs.observer.invalid" -->
            <button class="Next_first" @click="nextStep">
              <span>التالى</span>
              <span>
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
              </span>
            </button>

          </div>
        </div>

      </div>
    </div>

    <!-- end wizard -->


    <LazyLayoutFooter />


  </div>
</template>

<script>
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
      step_two: 5,

      showPassword: false,

      // select order

      options: ['desc', 'asc'],
      order: '',

      formData: {
        name: "",
        email: "",
        password: "",
        phone: "",
        agree_on_terms: 1,
        address: '',
        gender: 0,
        password_confirmation: ''
      },

    };
  },
  computed: {
    icon() {
      if (this.showPassword) {
        return ["fas", "eye-slash"];
      } else {
        return ["fas", "eye"];
      }
    },
  },

  methods: {
    nextStep() {

      this.$refs.observer.validate().then(valid => {
        if (valid) {
          this.step += 1;
        } else {
          console.log("invalid")
        }
      });
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
</style>
