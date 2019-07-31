<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// const DefaultLayout = () => import("./layouts/pages/Default.vue");
import DefaultLayout from "./layouts/pages/Default.vue";
@Component({
  components: {
    DefaultLayout
  }
})
export default class App extends Vue {}
</script>

<template>
  <v-app>
    <v-content>
      <DefaultLayout />
    </v-content>
  </v-app>
</template>
