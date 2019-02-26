<template>
    <div>
    <v-navigation-drawer app width="60">
        <v-spacer></v-spacer>
          <v-spacer></v-spacer>
 <v-list >
          <v-list-tile class="mt-5"
          v-for="(link,i) in links"
          :key="i"
          :to="link.url">
            <v-list-tile-action  >
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

    </v-navigation-drawer>
  <v-toolbar app
  color="white"
  >
    <v-toolbar-title>

      <img src="../../../assets/CoinMarketCap.svg" >
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
  <v-content>
    <router-view></router-view>
  </v-content>
    </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          title: '', icon: 'home', url: '/'
        },
        {
          title: '', icon: 'view_list', url: '/pageTwo'
        },
        {
          title: '', icon: 'perm_identity', url: '/Profile'
        }
      ]
    }
  }
}
</script>
