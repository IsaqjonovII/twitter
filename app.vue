<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script lang="ts" setup>
//todo: use themes later, for dark is enough
// const {isDark, theme} = useTheme()
//
// onMounted(() => {
//   if (!theme.value) {
//     theme.value = isDark.value ? "dark" : "light";
//   }
// })

useHead({
  htmlAttrs: {
    lang: "en",
    class: "dark"
  }
})

useSeoMeta({
  title: 'Impressive Twitter Clone - Powered by Nuxt 3',
  description: 'Explore an incredible Twitter Clone built with Nuxt 3. A seamless, feature-rich social media app that showcases the power of modern web development.',
  ogTitle: 'Impressive Twitter Clone - Powered by Nuxt 3',
  ogDescription: 'Discover the beauty and functionality of this amazing Twitter Clone built with Nuxt 3. A perfect example of clean design and cutting-edge web technologies.',
  ogUrl: 'https://old-twitter.netlify.app',
})
</script>