<script lang="ts">
import { Vue, Component, Prop, Watch, Ref } from "vue-property-decorator";
import Select from "@/core/components/Form/components/Select/index.vue";
import { SelectAPI } from "@/core/components/Form/components/Select/core/API";
import {
  SelectInterface,
  SelectsInterface
} from "@/core/components/Form/components/Select/core/Interfaces";

@Component({
  components: { Select }
})
export default class IndexPage extends Vue {
  selects: SelectsInterface = {};
  selectAPI: SelectAPI = new SelectAPI();

  mounted() {
    this.selects = {
      country: {
        model: [],
        itemValue: "id",
        itemText: "name",
        resourceUrl: "countries",
        children: ["region"],
        data: [{ value: 777, text: "777" }, { value: 888, text: "888" }],
        appendData: true
      },
      region: {
        model: [],
        itemValue: "id",
        itemText: "name",
        resourceUrl: "regions",
        children: ["city"],
        lazy: true,
        data: [],
        multiple: true
      },
      city: {
        model: [],
        itemValue: "id",
        itemText: "name",
        resourceUrl: "cities",
        lazy: true,
        data: []
      }
    };
    this.selectAPI.loadDataSource(this.selects.country, {});
  }

  public changeValue(selectObject: SelectInterface): void {
    this.selectAPI.handleChange(selectObject, this.selects);
    // + some code HERE
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
        :items.sync="select.data"
        :item-value="select.itemValue"
        :item-text="select.itemText"
        :multiple="select.multiple"
        @change="changeValue(select)"
      ></Select>
    </div>
  </div>
</template>
