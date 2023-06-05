export default function ({ route, redirect }) {
  // Check if the route contains an ID parameter
  if (!route.params.id) {
    // Redirect the user to the home page
    redirect("/");
  }
}
