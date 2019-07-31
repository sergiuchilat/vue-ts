<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({})
export default class ModuleSelector extends Vue {
  items: Array<Object> = [
    {
      name: "admin",
      url: "admin"
    },
    {
      name: "engineer",
      url: "engineer"
    },
    {
      name: "profile",
      url: "profile"
    }
  ];

  mounted() {
    console.log(this.$t("modules.admin.name"));
    console.log(this.$i18n);
  }
}
</script>
<template>
  <v-menu left bottom offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon dark v-on="on">
        <v-icon large>
          mdi-account-circle
        </v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index"  @click="$router.push(`/${$appLocale}/${item.url}`)">
        <v-list-item-title>
          {{ $t(`modules.${item.name}.name`) }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<style scoped></style>
