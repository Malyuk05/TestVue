<template>
  <v-container fluid>
    <v-layout row wrap align-center>
      <v-flex >
   <v-select
      :label="selectLabel"
      v-model="select_model"
      :items="list"
      :item-value="list_name"
      :item-text="list_name"
      :value='value'
      required
      outline
      height="30px"
      :disabled="disabled"
      :autofocus="autofocus"
      :title="title"
      :options="options"
    >
    </v-select>
      </v-flex>
    </v-layout>
    </v-container>
    </template>

<script>
/* eslint-disable */
export default {
     data: function(){
      return {
        select_model: this.value
      }
    },
    updated: function(){
      this.sel = this.selected;
    },
    props: {
      list:Array,
      list_name:String,
      list_id: '',
      selected:Number,
      selectLabel:String,
      value:'',
      disabled:Boolean,
      autofocus:Boolean,
      title:String,
      options: Array,
      },
     watch: {
      select_model(val) {
          this.$emit("input",val)
      }
    }
}
</script>