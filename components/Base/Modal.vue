<template>
  <slot v-if="$slots.trigger" name="trigger"/>

  <Teleport to="body">
    <Transition mode="out-in" name="modal">
      <div v-if="isOpen" class="w-full max-w-xl h-full max-h-[70vh] !fixed absolute-center">

        <slot v-if="!noHeader" name="header">
          <header class="relative grid gap-1">
            <h1 class="text-xl font-medium text-dark dark:text-white">{{ title }}</h1>

            <p v-if="description" class="text-sm text-dark dark:text-white">{{ description }}</p>

            <button class="icon-x-mark text-lg hover:text-red transition-200" type="button"/>
          </header>
        </slot>

        <slot>
          some content you can place here...
        </slot>


        <slot v-if="!noFooter" name="footer">
          <!--            <BaseButton />-->

          <!--            <BaseButton />-->
        </slot>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import type {ModalProps} from "~/types/components";

withDefaults(defineProps<ModalProps>(), {
  noFooter: false,
  noHeader: false,
});

const isOpen = defineModel<boolean>({
  required: true
})

</script>