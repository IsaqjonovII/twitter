<template>
  <div class="py-4 px-2">
    <FormToggle id="dark-mode-toggler" v-model="isDark" label="dark mode" @update:model-value="toggleTheme"/>

    <span class="dark:text-white text-dark text-sm mt-5 block">
      other things will be addeed later
    </span>
  </div>
</template>

<script lang="ts" setup>
const {toggleTheme, isDark} = useTheme()
</script>
