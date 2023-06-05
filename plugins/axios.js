// axios config

export default function ({ $axios, redirect, store, app }) {
  $axios.onRequest((config) => {
    // ? add accepted language

    // console.log(app.i18n.locale);
    config.headers.common["lang"] = app.i18n.locale;

    // ? add token to each request

    // console.log(store.state.user.token);

    // if (store.state.user.token) {
    //   config.headers.common.Authorization = `Bearer ${store.state.user.token}`;
    // }

    // ? add basic auth to protect apis

    // const username = "dzit_Elryad223";
    // const password = "elryad223@";
    // config.auth = { username, password };

    // console.log("Making request to " + config.url);
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    // code === 400 || this refer when api failed
    // code === 403 when api not found
    // code === 500 when param in api is undefined
    // code === 400 bad request

    if (code === 401) {
      // redirect("/login");
    } else if (code === 404) {
      // redirect("/about-us");
    } else if (code === 403 || code === 500) {
      // redirect("/");
    }
  });
}
