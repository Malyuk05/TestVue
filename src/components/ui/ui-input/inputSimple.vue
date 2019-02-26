<template>
    <v-container fluid>
      <v-layout wrap>
        <v-flex >
          <v-form>
          <v-text-field
            :label="def"
            single-line
            outline
            required
            v-model="firstNameValue"
            :title="title"
            :disabled="disabled"
            :value="value"
            :autofocus="autofocus"
          ></v-text-field>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
/* eslint-disable */
export default {
  data () {
    return {
     firstNameValue: this.value
    }
  },
  props: {
    value: String,
    def:   String,
    title: String,
    disabled: Boolean,
    autofocus:Boolean
  },
  watch: {
    firstNameValue(val) {
      this.$emit("input",val)
    }
  }
}
</script>

