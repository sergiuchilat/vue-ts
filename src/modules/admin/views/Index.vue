<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Select from "@/core/components/Form/components/Select/";
@Component({
  components: { Select }
})
export default class IndexPage extends Vue {}
</script>
<template>
  <div>
    Admin index page
    <hr />
    <Select :parent-id="0" :childrenResourceUrl="''" lazy />
  </div>
</template>
