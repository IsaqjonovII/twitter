<template>
  <div ref="select" class="relative">
    <!--  SELECTED OPTION  -->
    <div
        :class="[
        selectedOptionStyles,
        error ? '!border-red' : 'focus-within:border-blue',
        { 'focus-within:border-gray-100 !cursor-not-allowed': disabled },
      ]"
        class="transition-200 px-3 py-2 h-10 text-sm transition-all duration-300 border border-gray-300 cursor-pointer flex items-center justify-between gap-5 rounded-lg"
        tabindex="1"
        @click="toggleSelect(!showOptions)"
    >
      <div class="flex items-center">
        <slot name="prefix"/>
        <template v-if="!hasPrefix">
          <p
              v-if="!modelValue"
              :class="{ '!text-gray': disabled }"
              class="text-gray line-clamp-1 select-none"
              tabindex="1"
          >
            {{ placeholder }}
          </p>
          <slot v-else :value="modelValue" name="selectedOption">
            <p
                :class="{ '!text-gray': disabled }"
                class="select-none text-dark"
                tabindex="1"
            >
              {{ modelValue[labelKey] || modelValue }}
            </p>
          </slot>
        </template>
      </div>
      <div class="flex-y-center">
        <div v-if="hasPrefix">
          <p
              v-if="!modelValue"
              :class="{ '!text-gray': disabled }"
              class="text-gray select-none"
              tabindex="1"
          >
            {{ placeholder }}
          </p>
          <p
              v-else
              :class="{ '!text-gray': disabled }"
              class="select-none text-dark"
              tabindex="1"
          >
            {{ modelValue[labelKey] || modelValue }}
          </p>
        </div>
        <slot :show="showOptions" name="chevron">
          <span
              :class="[{ 'rotate-90': showOptions }]"
              class="text-gray-1 icon-chevron -rotate-90 text-xl transition-all duration-200 inline-block shrink-0"
          >
          </span>
        </slot>
      </div>
    </div>
    <!--  OPTIONS  -->
    <Transition name="select">
      <div
          v-if="showOptions && !disabled"
          :key="showOptions"
          :class="[direction === 'bottom' ? 'bottom-16' : 'top-full']"
          class="absolute w-full bg-white border border-gray-4 z-10 translate-y-3 overflow-hidden max-h-[300px] overflow-y-scroll text-white rounded-lg"
      >
        <slot name="options">
          <div
              v-for="(option, idx) in options"
              :key="idx"
              :class="[
              { 'bg-white-1 font-medium': isActive(option) },
              optionStyles,
            ]"
              class="custom-b transition-200 cursor-pointer hover:bg-white-1 text-sm text-dark px-3 group"
              @click="onSelect(option)"
          >
            <div
                :class="{
                'border-b border-white-1': optionBorder,
              }"
                class="py-3 pr-3"
            >
              <slot :index="idx" :option="option" name="option">
                <div class="">{{ option[labelKey] }}</div>
              </slot>
            </div>
          </div>
        </slot>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>

import type {SelectProps} from "~/types/components";
import type {TSelectOption} from "~/types/common";

const props = withDefaults(defineProps<SelectProps>(), {
  labelKey: "name",
  valueKey: "id",
  placeholder: "Роль",
  optionBorder: true,
});

interface Emits {
  (e: "on-toggle", value: boolean): void;

  (e: "load"): void;

  (e: "on-select", value: TSelectOption): void;
}

const emit = defineEmits<Emits>();
const modelValue = defineModel<TSelectOption>({required: true})

const showOptions = ref(false);

function toggleSelect(newValue = showOptions.value) {
  showOptions.value = newValue;
  emit("on-toggle", showOptions.value);
}

function findOption(option: TSelectOption) {
  return props.options.find((o) => o == option || o[props.valueKey] == option);
}

function onSelect(option: TSelectOption) {
  toggleSelect(false);
  modelValue.value = option[props.valueKey] || option;
  emit("on-select", option);
}

const select = ref();

function isActive(option: TSelectOption) {
  return (
      option == modelValue.value ||
      option[props.valueKey as keyof typeof option] == modelValue.value ||
      (typeof modelValue.value == "object" &&
          option[props.valueKey as keyof typeof option] ==
          modelValue.value[props.valueKey])
  );
}

</script>

<style scoped>
.select-enter-active,
.select-leave-active {
  transition: all 0.2s ease-in-out;
}

.select-enter-from,
.select-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.custom-b:last-child div:first-child {
  border-bottom: 0 !important;
}
</style>
