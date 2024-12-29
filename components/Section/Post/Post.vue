<template>
  <section class="border-b border-gray-200 dark:border-primary-hover/10 pt-4">
    <FormTextarea id="content-text-area" v-model="form.values.content" :max="10024"
                  :max-height="1000"
                  class="focus-within:border-transparent !border-none peer"
                  placeholder="Hey, what's up? Tell us something..."/>

    <div
        class="px-4 py-2 flex-y-center  *:size-8 *:rounded *:flex-center dark:hover:*:bg-primary-hover/20 *:transition-300 dark:hover:*:text-gray-300 hover:*:bg-gray-200">
      <button class="icon-photo-plus text-lg text-primary"/>
      <button class="icon-gif text-xl text-primary"/>
      <button class="icon-info-circle text-lg text-primary"/>
    </div>


    <BaseButton loading radius="md" text="heloo, im a button" variant="outline"/>
  </section>
</template>

<script lang="ts" setup>
import {maxLength, minLength, required} from "@vuelidate/validators";

const form = useForm({
  content: '',
  image: '',
}, {
  content: {required, minLength: minLength(3), maxLength: maxLength(1024)}
})
</script>