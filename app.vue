<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const theme = useCookie('theme');

onMounted(() => {
  if (!theme.value) {
    theme.value = 'dark';
  }
})

</script>
