<template>
  <client-only>
    <div>
      <main>
        <LazyLayoutNavbar />
        <!-- <h1>header from default layout</h1> -->
        <Nuxt />
        <!-- <nuxt :nuxt-child-key="$route.fullPath" /> -->
        <!-- <h1>header from default layout</h1> -->
        <LazyLayoutFooter />
      </main>
    </div>
  </client-only>
</template>

<script>
export default {
  name: "defaultPage"
}
</script>

<style lang="scss" scoped></style>
