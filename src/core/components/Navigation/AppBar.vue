<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// const ModuleSelector = () => import("./ModuleSelector.vue");
import ModuleSelector from "./ModuleSelector.vue";
import SideNavBar from "@/core/components/Navigation/SideNavBar.vue";

@Component({
  components: {
    ModuleSelector,
    SideNavBar
  }
})
export default class AppBar extends Vue{
  private drawer: Boolean = true;
}
</script>
<template>
  <div>
    <side-nav-bar :drawer="drawer"></side-nav-bar>
    <v-app-bar app color="indigo" dark :clipped-left="$vuetify.breakpoint.lgAndUp">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <module-selector></module-selector>
        <v-btn :to="{ path: `/${$appLocale}/logout` }" text>logout</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>

</template>
<style scoped>

</style>