<template>
  <div>
    <main>
      <h1>header from default layout</h1>
      <Nuxt />
      <!-- <nuxt :nuxt-child-key="$route.fullPath" /> -->
      <h1>header from default layout</h1>
    </main>
  </div>
</template>

<script>
export default {
  name: "authLayout",

  layout: 'authLayout'
}
</script>

<style lang="scss" scoped>

</style>
