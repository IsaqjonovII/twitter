<template>
  <label
      :class="[{ '!border-red': error }, $attrs.class]"
      class="rounded-lg relative overflow-hidden dark:bg-dark border border-transparent transition-300 focus-within:border-blue-500 focus-within:bg-transparent"
  >
    <textarea
        ref="textarea"
        v-model="modelValue"
        :rows="1"
        :style="{ maxHeight: `${maxHeight}px` }"
        class="w-full peer border-none outline-none  resize-none p-3 font-normal dark:text-white bg-transparent text-sm leading-4 text-dark caret-blue placeholder:text-gray-1 bg-white-1 transition-300"
        v-bind="{ placeholder, maxLength: max, minLength: min, id }"
        @input="adjustHeight"
    ></textarea>
    <span
        v-if="showMax && max"
        class="text-right absolute bottom-0 right-0 backdrop-blur peer-focus-within:opacity-0 transition-300 opacity-100 px-2 py-1 pb-1 rounded-lg text-sm font-normal text-gray pointer-events-none"
    >
      {{ modelValue?.length }}/{{ max }}
    </span>
  </label>
</template>

<script lang="ts" setup>
defineComponent({
  name: "FormTextarea",
});

interface Props {
  placeholder?: string;
  max?: number;
  min?: number;
  showMax?: boolean;
  error?: boolean;
  id: string;
  maxHeight?: number;
}

type Emits = {
  (e: "blur"): void;
};

defineProps<Props>();
defineEmits<Emits>();

const modelValue = defineModel<string>({required: true});

const textarea = ref<HTMLTextAreaElement | null>(null);

const adjustHeight = () => {
  if (textarea.value) {
    textarea.value.style.height = "auto"; // Reset the height
    textarea.value.style.height = `${textarea.value.scrollHeight}px`; // Set the height to match content
  }
};

onStartTyping(() => {
  if (!textarea.value?.active) {
    textarea.value?.focus()
  }
})

onMounted(adjustHeight);
</script>
