<template>
  <aside
      class="col-span-1 lg:col-span-2 h-svh overflow-y-auto sticky top-0 left-0 flex flex-col gap-5 px-2 py-4 lg:p-4 lg:pr-0 border-r border-gray-200 dark:border-primary/10 ">

    <NuxtLink :to="{ name: 'make-something-fun' }" class="flex-y-center max-lg:flex-center lg:gap-4">
      <div class="size-12">
        <NuxtImg alt="Twitter clone with nuxt 3" class="aspect-square size-full object-contain"
                 src="/images/logo.avif"/>
      </div>

      <h1 class="max-lg:hidden text-2xl font-bold">Twitter</h1>

      <div v-if="routeName.startsWith('make-something-fun')" class="relative size-10" title="thanks giphy">
        <iframe allowFullScreen class="giphy-embed" frameBorder="0" height="100%"
                src="https://giphy.com/embed/BYul6RujgoRCryuCdL" style="position:absolute" width="100%"></iframe>
      </div>
    </NuxtLink>

    <ul class="flex flex-col gap-1">
      <li v-for="(link, key) of sidebarMenuLinks" :key
          class="dark:text-white max-lg:flex-center">
        <NuxtLink
            :to="link.route"
            class="block group w-full">
          <div
              :class="{ '[&_.icon]:text-primary [&_span]:text-primary transition-200 text-primary dark:text-white dark:bg-primary/5 bg-primary/20 backdrop-blur-sm': isActive(link.route) }"
              class="px-4 lg:w-fit lg:rounded-full transition-colors duration-700 group-hover:dark:bg-primary/10 hover:dark:bg-primary/10  group-hover:bg-primary/20 py-2 flex-center lg:flex-y-center gap-2 w-full rounded">
            <i :class="[link.icon, 'text-xl align-middle font-medium icon flex-center ']"/>

            <span class="pr-2 origin-left font-medium max-lg:hidden">
            {{ link.label }}
          </span>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import {sidebarMenuLinks} from "~/data/menu";
import type {SidebarLink} from "~/types";

const routeName = computed<string>(() => useRoute().name?.toString() || 'home');

function isActive(route: SidebarLink['route']) {
  return routeName.value.startsWith(route.name?.toString())
}
</script>
