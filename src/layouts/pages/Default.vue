<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import AppBar from "@/core/components/Navigation/AppBar.vue";
@Component({
  components: {
    AppBar
  }
})
export default class DefaultTemplate extends Vue {}
</script>
<template>
  <v-app id="inspire">
    <app-bar></app-bar>
    <v-content>
      <transition name="fade">
        <router-view class="router_height"></router-view>
      </transition>
    </v-content>
  </v-app>
</template>
