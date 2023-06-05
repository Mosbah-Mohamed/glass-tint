export default async function ({ app, redirect }) {
  const user = await app.$cookies.get("auth._token.local");

  // console.log(user);

  if (user) {
    return redirect("/");
  }
}
