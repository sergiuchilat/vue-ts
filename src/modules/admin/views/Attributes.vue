<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import Select from "@/core/components/Form/components/Select/index.vue";

@Component({
  components: { Select }
})
export default class AttributesPage extends Vue {
  resourceURL: string = "level1";
}
</script>
<template>
  <div>
    Admin attributes page
    <hr />
    <Select :parent-id="0" :childrenResourceUrl="resourceURL" />
  </div>
</template>
