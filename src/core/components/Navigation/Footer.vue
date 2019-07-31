<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Footer extends Vue{}
</script>
<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <module-selector></module-selector>
      <v-btn :to="{ path: `/${$appLocale}/logout` }" text>logout</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
<style scoped>

</style>