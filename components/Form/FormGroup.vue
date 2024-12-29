<template>
  <div class="flex flex-col gap-2 w-full">
    <div :class="labelWrapperClass" class="flex-center-between w-full">
      <FormLabel
          :label="label"
          :label-class="labelClass"
          v-bind="{ forText, required }"
      />
      <slot name="labelOpposite"/>
    </div>
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import {defineComponent} from "vue";
import FormLabel from "~/components/Form/Label/Label.vue";

defineComponent({
  name: "FormGroup",
});

interface Props {
  label?: string;
  required?: boolean;
  forText?: string;
  labelClass?: string;
  labelWrapperClass?: string;
}

withDefaults(defineProps<Props>(), {
  label: "",
});
</script>
