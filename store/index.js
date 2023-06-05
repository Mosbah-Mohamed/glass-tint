// import { plugins } from '../plugins/vuex-persist'
// like data in component

export const state = () => ({
  setting: {},
  services: [],
});

//  return data in state of store
// call with : this.$store.getters.sum

export const getters = {
  getServices: (state) => state.services,
};

// ( used to update state ) call it with : this.$store.commit('increment')
// نقوم بتعيير البيانات داخل ال state

export const mutations = {
  setSetting(state, setting) {
    state.setting = setting;
  },
  setServices(state, payload) {
    state.services = payload;
  },
};

// like methods  it call  with :  this.$store.dispatch('mutation_method_name',updated value)

export const actions = {};
