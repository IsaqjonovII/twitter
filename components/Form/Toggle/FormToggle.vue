<template>
  <label
      :class="[{ '!cursor-not-allowed': disabled }, $attrs.class]"
      :for="id"
      class="cursor-pointer flex-y-center gap-4 w-max "
  >
    <div
        :class="[
        modelValue ? 'bg-primary' : 'bg-gray-200',
        { '!cursor-not-allowed': disabled },
      ]"
        class="flex-y-center relative w-11 h-6 rounded-full border hover:border-primary-hover border-gray-200 dark:border-primary-hover/30 cursor-pointer transition-200"
    >
      <input
          :checked="modelValue"
          autocomplete="off"
          class="absolute w-px h-px opacity-0 peer"
          type="checkbox"
          v-bind="{ disabled, id }"
          @input="modelValue = !modelValue"
      />
      <span
          :class="
          modelValue ? 'translate-x-full bg-white' : 'translate-x-0 bg-white'
        "
          class="absolute-y size-5 rounded-full left-0.5 transition-all duration-200 peer-disabled:bg-white-100 peer-disabled:translate-x-0"
      />
    </div>
    <slot>
      <span
          :class="[{ 'text-gray': disabled }, labelClass]"
          class="text-dark dark:text-white text-sm font-normal leading-130 select-none"
      >
        {{ label }}
      </span>
    </slot>
  </label>
</template>
<script lang="ts" setup>
import {defineComponent} from "vue";

import type {TClassName} from "@/types/common";

interface Props {
  disabled?: boolean;
  label?: string;
  labelClass?: TClassName;
  id: string;
}

defineComponent({
  name: "FormToggle",
});

withDefaults(defineProps<Props>(), {
  label: "",
  labelClass: "",
  disabled: false,
  id: "form-input-toggle",
});
const modelValue = defineModel<boolean>({required: true});
</script>
