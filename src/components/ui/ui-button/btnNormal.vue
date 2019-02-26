<template>
          <v-btn
          :disabled="disabled"
          :title="title"
          :top="top"
          :left="left"
          :right="right"
           depressed large color="primary"
          >
          {{title}}
          </v-btn>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    title: String,
    disabled: Boolean,
    top: Boolean,
    left: Boolean,
    right: Boolean
  }
}
</script>
