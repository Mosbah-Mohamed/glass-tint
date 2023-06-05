// load all static content data before mounted

export default async ({ store, $axios }) => {
  const response = await $axios.get("setting");
  const settings = response.data.data;
  // console.log("api --->" + response.data.data.phone);
  // store in vuex
  store.commit("setSetting", settings);
};
