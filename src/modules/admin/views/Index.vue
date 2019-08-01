<script lang="ts">
import { Vue, Component, Prop, Watch, Ref } from "vue-property-decorator";
import Select from "@/core/components/Form/components/Select/";
@Component({
  components: { Select }
})
interface SelectInterface {
  model: number;
  name: string;
  resourceUrl: string;
  children: Array<string>;
  lazy: boolean;
}

export default class IndexPage extends Vue {
  selects: Array<SelectInterface> = [];
  componentReady: boolean = false;

  mounted() {
    console.log("mounted");
    this.selects.push({
      model: 0,
      name: "countries",
      resourceUrl: "countries",
      children: [""],
      lazy: false
    });
    this.componentReady = true;
  }

  public changeValue(parentName: string, parentID: number): void {
    const filter: Object = { parentName, parentID };
    this.$refs.regions.getEntities(filter);
  }
}
</script>
<template>
  <div>
    Admin index page
    <hr />
    {{ componentReady }}
    <div v-if="componentReady">
      <div :key="select.name" v-for="select in selects">
        <Select
          v-model="select.model"
          :ref="select.name"
          :resource-url="select.resourceUrl"
          :children="select.children"
          :lazy="select.lazy"
          @change="changeValue(select.name, select.model)"
        ></Select>
        {{ select.lazy }}
      </div>
      Ready
    </div>

    {{ selects }}
  </div>
</template>
