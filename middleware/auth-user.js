export default async function ({ app, redirect }) {
  // the following look directly for the cookie created by nuxtjs/auth
  // instead of using $auth.loggedIn
  // const user = await app.$cookies.get("auth._token.local");
  const user = await app.$cookies.get("auth._token.local");

  // console.log(user);

  if (user) {
    // let the user see the page
    return true;
  } else {
    // redirect to homepage
    redirect("/login");
  }
}

// middleware is run before the page component is rendered, and the user will be redirected to the login page if they are not authenticated
// it use in component as

// middleware: 'auth',
