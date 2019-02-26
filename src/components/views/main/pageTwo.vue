
<template>
<div class="bgc pa-5">
<h1 class="pb-2 ml-5 font-weight-regular">UI components </h1>
<v-container class="ml-3 pt-4">
    <v-card class="pa-4">
      <v-flex d-flex xs8>
                  <v-subheader class="mr-5 subheading">Input-empty</v-subheader>
                  <v-subheader class="ml-3 subheading">Input-focus/not-empty</v-subheader>
                  <v-subheader class="pr-5 subheading">Input-disabled</v-subheader>
                </v-flex>
        <v-flex d-flex wrap xs8 tag="div" >
             <inputSimple
               def="Name"
               title="inputEmpty"
             />
             <inputSimple
               autofocus
               def="Alan"
               title="inputFocNotEmpty"
             />
             <inputSimple
             disabled
             def="Name"
             title="inputDisabled"
             />
        </v-flex >
         <v-flex d-flex xs8>
                  <v-subheader class="mr-3 subheading">Select-empty</v-subheader>
                  <v-subheader class="pr-4 subheading">Select-focus</v-subheader>
                  <v-subheader class="subheading">Select-disabled</v-subheader>
                </v-flex>
        <v-flex d-flex wrap xs8 >
             <selectInput
             selectLabel="Name"
             />
             <selectInput
             autofocus
              :list="items"
              :selected="selected"
               list_name="name"
              list_id='id'
             />
             <selectInput disabled
               selectLabel="Name"/>
        </v-flex>
         <v-flex d-flex xs6 >
                  <v-subheader class="mr-3 subheading">Button-Normal</v-subheader>
                  <v-subheader class="pr-4 subheading">Button-Hover</v-subheader>
                  <v-subheader class="subheading">Button-Disabled</v-subheader>
                </v-flex>
        <v-flex d-flex wrap xs6>
            <btnNormal
             title="Button"
            />
            <btnHover/>
            <btnNormal disabled
             title="Button"
           />
        </v-flex>
    </v-card>
</v-container>
</div>
</template>

<style scoped>
.v-btn--active{
  color:aqua;
}
div{
    margin:0;
    padding: 5px;
}
.bgc{
      background-color: #f5f8fd;
}

</style>

<script>
/* eslint-disable */
import btnNormal from '../../ui/ui-button/btnNormal.vue'
import btnHover from '../../ui/ui-button/btnHover.vue'
import inputSimple from '../../ui/ui-input/inputSimple.vue'
import selectInput from '../../ui/ui-input/selectInput.vue'
export default {
    components: {
        btnNormal,
        btnHover,
        inputSimple,
        selectInput
  },
  data () {
    return {
      items: [
        {
          name: 'item 1',
          id: 1
        },
        {
          name: 'item 2',
          id: 2
        },
        {
          name: 'item 3',
          id: 3
        }, {
          name: 'item 4',
          id: 4
        },
        {
          name: 'item 5',
          id: 5
        }
      ],
      selected:1
      }
    },
}
</script>