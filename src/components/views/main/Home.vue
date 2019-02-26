<template>
  <div class="bgc pa-5">
    <h1 class="font-weight-regular pb-2 ml-5">Home</h1>
  <v-container class="ml-3 pt-4" fluid grid-list align-center>
    <v-data-iterator
      :items="this.data.data"
      :pagination.sync="pagination"
      hide-actions
      row
      wrap
    >
      <v-toolbar
        slot="header"
        class="slot "
         color="#f5f8fd"
        flat
      >
      <v-flex d-flex >
        <v-toolbar-title class="body-1 mr-4 pl-4 font-weight-light">Name</v-toolbar-title>
        <v-toolbar-title class="body-1 mr-1 font-weight-light">Price</v-toolbar-title>
        <v-toolbar-title class="body-1 ml-5 font-weight-light">Volume(24h)</v-toolbar-title>
        <v-toolbar-title class="body-1 ml-3 font-weight-light">Date added</v-toolbar-title>
        </v-flex>
      </v-toolbar>
        <v-card
        v-for="(datas, i ) in data.data"  class="mb-4 pa-3"
        :key="i"
        slot="item"
        slot-scope="props"
        flat
        >
          <v-flex d-flex >
          <v-card-text
          class="subheading font-weight-regular"
         >
            <img v-if="props.item.symbol === 'BTC'" src="../../../assets/1.svg"  class="mr-2"/>
              <img v-else-if="props.item.symbol === 'XRP'"  src="../../../assets/52 (1).svg"  class="mr-2"
              />
               <img v-else src="../../../assets/крипто.svg"  class="mr-2"/>
            {{ props.item.name }}</v-card-text >
          <v-card-text
          class="subheading font-weight-regular">{{ `${props.item.quote.USD.price} USD` }}</v-card-text >
          <v-card-text
            class="subheading font-weight-regular">{{ `${props.item.quote.USD.volume_24h} USD`  }}</v-card-text>
          <v-card-text
          class="subheading .font-weight-regular">{{ props.item.date_added }}</v-card-text>
          </v-flex>
        </v-card>
    </v-data-iterator>
  </v-container>
  </div>
</template>

<style scoped>
  .bgc{
    background-color: #f5f8fd;
  }
</style>
<script>
import data from '../../../data/data.json'
/* eslint-disable */
  export default {  
  data () {
    return {
    rowsPerPageItems: [4, 8, 12],
    pagination: {
      rowsPerPage: 2,
    },
    count: 0,
    
    }
  },
    computed: {
      data () {
        return data
      }
    }
  }
</script>
