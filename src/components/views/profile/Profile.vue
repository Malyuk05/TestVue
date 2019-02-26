<template>
<div class="bgc pa-5" >
<h1 class="font-weight-regular ml-5 pb-2">User Profile</h1>
  <v-container class="ml-3 pt-4">
    <v-card>
    <v-layout row wrap>
      <v-form
      v-on:submit.prevent="addUser"
      >
      <v-flex d-flex tag="div" >
        <v-flex xs3 align-self-center>
             <avatar/>
        </v-flex>
        <v-flex xs3>
              <inputSimple
              v-model="newUser.firstName"
              def='firstName' />
              <inputSimple
              def="LastName"
               v-model="newUser.lastName"
              />
              <inputSimple
              def="Phone"
              v-model="newUser.phone" />
              </v-flex>
              <v-flex xs3>
             <selectInput
              selectLabel="country"
              :list="country"
              list_name="name"
              list_id='id'
              v-model="newUser.country" />

             <selectInput
              :list="city"
              :selected="selected"
              list_name="name"
              list_id='id'
              v-model="newUser.city"
              selectLabel="city"
             />

             <inputSimple def='Addres'
             v-model="newUser.addres"/>
        </v-flex>
        <v-flex xs3>
              <inputSimple def='Post'
              v-model="newUser.post"/>
             <v-flex>
              <btnNormal tag="button"
                type="submit"
                v-on:click="$emit('submit')"
                title="Save"
            />
              </v-flex>
        </v-flex>
      </v-flex>
      </v-form>
    </v-layout>
    </v-card>
  </v-container>
  </div>
</template>

<style scoped>
button {
  position: relative;
  left:47%;
  top:97px;
}
div {
  margin: 0;
  padding: 5px;
}
.bgc{
  background-color: #f5f8fd;
}
</style>

<script>
/* eslint-disable */
import avatar from './avatar.vue'
import inputSimple from '../.././ui/ui-input/inputSimple.vue'
import selectInput from '../.././ui/ui-input/selectInput.vue'
import Firebase from 'firebase'
import btnNormal from '../../ui/ui-button/btnNormal.vue'

let config = {
    apiKey: "AIzaSyAhPUkWOu_43CgN-FITVkJwvZddOFqeNfU",
    authDomain: "three-app-3c709.firebaseapp.com",
    databaseURL: "https://three-app-3c709.firebaseio.com",
    projectId: "three-app-3c709",
    storageBucket: "three-app-3c709.appspot.com",
    messagingSenderId: "523452771973"
  }
let app =  Firebase.initializeApp(config);
let db = app.database()
let usersRef = db.ref('users')

export default {
    components:{
        avatar,
        inputSimple,
        selectInput,
        btnNormal
    },
    props:{
     firstName: String,
    },
     firebase: {
      users:usersRef
    },
     data() {
       return {
           newUser: {
               firstName:'',
               lastName: '',
               phone: '',
               post: '',
               addres: '',
               post: '',
               country: '',
               city: ''
           },
        country: [
        {
          name: 'Country1',
          id: 1
        },
        {
          name: 'Country2',
          id: 2
        },
        {
          name: 'Country3',
          id: 3
        }
      ],
      city: [
        {
          name: 'city1',
          id:1
        },
         {
          name: 'city2',
          id:2
        },
         {
          name: 'city3',
          id:3
        }
      ],
      selected: 1
       }
   },
   methods:{
       addUser: function () {
           usersRef.push(this.newUser);
           this.newUser.firstName = '';
           this.newUser.lastName = '';
           this.newUser.phone = '';
           this.newUser.post = '';
           this.newUser.addres = '';
           this.newUser.post = '';
           this.newUser.country = '';
           this.newUser.city = '';
       }
   }
}
</script>
