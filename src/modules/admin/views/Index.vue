<script lang="ts">
import { Vue, Component, Prop, Watch, Ref } from "vue-property-decorator";
import Select from "@/core/components/Form/components/Select/index.vue";

interface SelectInterface {
  model: number;
  name: string;
  resourceUrl: string;
  children: Array<string>;
  parent: string;
  lazy: boolean;
}

interface parentsValue {
  [value: string]: number;
}

@Component({
  components: { Select }
})
export default class IndexPage extends Vue {
  selects: Object = {};
  parentsValue: parentsValue = {};

  mounted() {
    this.parentsValue = {
      countries: 0,
      regions: 0
    };

    this.selects = {
      country: {
        model: 0,
        name: "country",
        resourceUrl: "countries",
        children: ["region"],
        parent: "",
        lazy: false
      },
      region: {
        model: 0,
        name: "region",
        resourceUrl: "regions",
        children: [],
        parent: "country",
        lazy: false
      },
      city: {
        model: 0,
        name: "city",
        resourceUrl: "cities",
        children: [],
        parent: "region",
        lazy: false
      }
    };
  }

  public changeValue(parentName: string, parentID: number): void {
    const filter: object = { parentName, parentID };
    if (parentName !== "" && this.parentsValue.hasOwnProperty(parentName)) {
      this.parentsValue[parentName] = parentID;
    }
  }
}
</script>
<template>
  <div>
    Admin index page
    <hr />
    <div :key="select.name" v-for="select in selects">
      <Select
        v-model="select.model"
        :resource-url="select.resourceUrl"
        :children="select.children"
        :lazy="select.lazy"
        :parent-value.sync="parentsValue[select.parent]"
        @change="changeValue(select.name, select.model)"
      ></Select>
    </div>

    {{ selects }}
  </div>
</template>
