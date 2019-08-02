<script lang="ts">
import { Vue, Component, Prop, Watch, Ref } from "vue-property-decorator";
import Select, {
  parentsValue,
  SelectInterface
} from "@/core/components/Form/components/Select/index.vue";

@Component({
  components: { Select }
})
export default class IndexPage extends Vue {
  selects: Object = {};
  dataObject: parentsValue = {};

  mounted() {
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
        lazy: true
      },
      city: {
        model: 0,
        name: "city",
        resourceUrl: "cities",
        children: [],
        parent: "region",
        lazy: true
      }
    };
  }

  public changeValue(parentName: string, parentID: number): void {
    const filter: object = { parentName, parentID };
    if (parentName !== "") {
      this.dataObject[parentName] = parentID;
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
        :parent-value.sync="dataObject[select.parent]"
        @change="changeValue(select.name, select.model)"
      ></Select>
    </div>

    {{ selects }}
  </div>
</template>
