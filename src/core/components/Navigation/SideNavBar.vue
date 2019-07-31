<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class ModuleSelector extends Vue {
  @Prop(Boolean) readonly drawer: Boolean;
}
</script>
<template>
  <v-navigation-drawer v-model="drawer" app :clipped="$vuetify.breakpoint.lgAndUp">
    <v-list dense>
      <v-list-item @click="">
        <v-list-item-action>
          <v-icon>home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="">
        <v-list-item-action>
          <v-icon>contact_mail</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped></style>
