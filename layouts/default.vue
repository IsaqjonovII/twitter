<template>
  <main class="dark:bg-dark bg-white  grid grid-cols-12 container mx-auto">
    <LayoutSidebar v-if="width >= 640"/>

    <section class="col-span-full h-fit sm:col-span-11 lg:col-span-10  grid grid-cols-6">
      <slot/>

      <div id="right-side"
           :class="{ 'hidden lg:block': width < 1024 }"
           class="col-span-2 border-l border-gray-200 dark:border-primary-hover/10 h-svh sticky top-0 left-0"/>
    </section>
  </main>
</template>

<script lang="ts" setup>
const {width} = useWindowSize()
</script>
