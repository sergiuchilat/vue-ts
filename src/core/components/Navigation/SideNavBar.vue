<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class ModuleSelector extends Vue {
  @Prop({ default: false }) readonly drawer!: boolean;
}
</script>
<template>
  <v-navigation-drawer v-model="drawer" app :clipped="$vuetify.breakpoint.lgAndUp">
    <v-list dense>
      <v-list-item @click="$router.push(`/${$appLocale}/admin/attributes`)">
        <v-list-item-action>
          <v-icon>home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Attributes</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style scoped></style>
