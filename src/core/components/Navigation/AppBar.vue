<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import RouterObserver from "@/core/middleware/RouterObserver";
import ModuleSelector from "./ModuleSelector.vue";
import SideNavBar from "@/core/components/Navigation/SideNavBar.vue";

@Component({
  components: {
    ModuleSelector,
    SideNavBar
  }
})
export default class AppBar extends Vue {
  private drawer: boolean = true;

  get needSideBar(): boolean {
    return RouterObserver.needWidget("sidebar", this.$route);
  }
}
</script>
<template>
  <div>
    <side-nav-bar v-show="needSideBar" :drawer="drawer"></side-nav-bar>
    <v-app-bar
      app
      color="indigo"
      dark
      :clipped-left="$vuetify.breakpoint.lgAndUp"
    >
      <v-app-bar-nav-icon v-show="needSideBar" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <module-selector></module-selector>
        <v-btn :to="{ path: `/${$appLocale}/logout` }" text>logout</v-btn>
      </v-toolbar-items>
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon v-if="$vuetify.theme.dark" medium>mdi-lightbulb-off</v-icon>
        <v-icon v-else medium>mdi-lightbulb-on</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<style scoped></style>
