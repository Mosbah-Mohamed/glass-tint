// import { plugins } from '../plugins/vuex-persist'
// like data in component

export const state = () => ({
  setting: {},
  type: null,
  services: [], // store when click button appointment
  selectedServices: [], // when choose from services
  ids: [],
  cities: [],
  branch: [],
  date: null,
  personalInfo: [],
  code: null,
  password: null,
  coupon: null,
  times: [],
  time_from: null,
  time_end: null,
});

//  return data in state of store
// call with : this.$store.getters.sum

export const getters = {
  getServices: (state) => state.services,

  getType: (state) => state.type,

  getSelectedServices: (state) => state.selectedServices,

  getCities: (state) => {
    return state.cities.map((city) => city);
  },

  getBranch: (state) => {
    return state.branch.map((bran) => bran);
  },

  getDate: (state) => state.date,

  totalSelectedServicesPrice: (state) => {
    return state.selectedServices.reduce((total, service) => {
      return total + service.price;
    }, 0);
  },

  selectedServicesIds: (state) => {
    return state.selectedServices.map((service) => service.id);
  },

  getCode: (state) => state.code,

  getPassword: (state) => state.password,

  getCoupon: (state) => state.coupon,

  getTimes: (state) => state.times,

  getTime_from: (state) => state.time_from,

  getTime_end: (state) => state.time_end,
};

// ( used to update state ) call it with : this.$store.commit('increment')
// نقوم بتعيير البيانات داخل ال state

export const mutations = {
  setSetting(state, setting) {
    state.setting = setting;
  },
  setType(state, payload) {
    state.type = payload;
  },
  setServices(state, payload) {
    state.services = payload;
  },
  setSelectedServices(state, payload) {
    state.selectedServices = payload;
  },

  ADD_SELECTED_SERVICE(state, service) {
    state.selectedServices.push(service);
  },
  REPLACE_SELECTED_SERVICE(state, { index, service }) {
    state.selectedServices.splice(index, 1, service);
  },
  ADD_EXTRA_SERVICES(state, services) {
    state.selectedServices.push(...services);
  },

  REMOVE_SELECTED_SERVICE(state, index) {
    state.selectedServices.splice(index, 1);
  },

  setCities(state, payload) {
    state.cities = payload;
  },

  setBranch(state, payload) {
    state.branch = payload;
  },

  setDate(state, payload) {
    state.date = payload;
  },

  setPersonalInfo(state, payload) {
    state.personalInfo = payload;
  },

  setCode(state, payload) {
    state.code = payload;
  },

  setPassword(state, payload) {
    state.password = payload;
  },

  setCoupon(state, payload) {
    state.coupon = payload;
  },
  setTime(state, payload) {
    state.times = payload;
  },

  setTimeFrom(state, payload) {
    state.time_from = payload;
  },
  setTimeEnd(state, payload) {
    state.time_end = payload;
  },

  SET_BRANCH(state, payload) {
    state.branch = payload;
  },

  CLEAR_STORE(state) {
    // Clear the necessary state properties here
    state.setting = {};
    state.type = null;
    state.services = []; // store when click button appointment
    state.selectedServices = []; // when choose from services
    state.ids = [];
    state.cities = [];
    state.branch = [];
    state.date = null;
    state.personalInfo = [];
    state.code = null;
    state.password = null;
    state.coupon = null;
    state.times = [];
    state.time_from = null;
    state.time_end = null;
  },
};

// like methods  it call  with :  this.$store.dispatch('mutation_method_name',updated value)

export const actions = {
  updateSelectedServices2({ commit, state }, { service, category }) {
    const categoryServices = category.serivces.map((s) => s.id);
    const index = state.selectedServices.findIndex((s) =>
      categoryServices.includes(s.id)
    );

    if (index === -1) {
      // If no service from the category is selected, add the newly selected service
      commit("ADD_SELECTED_SERVICE", service);
    } else if (category.type === "extra") {
      const selectedServiceIds = state.selectedServices.map((s) => s.id);

      if (selectedServiceIds.includes(service.id)) {
        // If the service is already selected, remove it
        commit(
          "REMOVE_SELECTED_SERVICE",
          selectedServiceIds.indexOf(service.id)
        );
      } else {
        // If the service is not selected, add it
        commit("ADD_SELECTED_SERVICE", service);
      }
    } else if (category.type === "normal") {
      const selectedServiceIds = state.selectedServices.map((s) => s.id);

      if (selectedServiceIds.includes(service.id)) {
        // If the service is already selected, remove it
        commit(
          "REMOVE_SELECTED_SERVICE",
          selectedServiceIds.indexOf(service.id)
        );
      } else {
        const index = state.selectedServices.findIndex((s) =>
          categoryServices.includes(s.id)
        );

        if (index !== -1) {
          const previousService = state.selectedServices[index];
          commit("REMOVE_SELECTED_SERVICE", index);
          const previousInput = document.getElementById(previousService.id);
          if (previousInput) {
            previousInput.removeAttribute("checked");
          }
        }

        // Add the newly selected service
        commit("ADD_SELECTED_SERVICE", service);
      }
    }
  },

  setPersonalInfoAction({ commit }, payload) {
    commit("setPersonalInfo", payload);
  },
};
