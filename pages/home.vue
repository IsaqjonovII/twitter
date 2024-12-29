<template>
  <Teleport v-if="mounted" to="#right-side">
    <SectionSettings/>
  </Teleport>

  <main class="col-span-4">
    <SectionPost/>
  </main>
</template>

<script lang="ts" setup>

const mounted = useMounted()

const text = ref('')

useSeoMeta({
  title: 'Twitter Clone - Home',
  description: 'Twitter Clone with Nuxt 3',
  ogTitle: 'Twitter Clone with Nuxt 3',
  ogDescription: 'Twitter Clone with Nuxt 3',
  ogUrl: 'https://old-twitter.netlify.app',
})

</script>