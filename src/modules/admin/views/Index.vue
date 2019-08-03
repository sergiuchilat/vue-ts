<script lang="ts">
import { Vue, Component, Prop, Watch, Ref } from "vue-property-decorator";
import Select from "@/core/components/Form/components/Select/index.vue";
import { API as SelectAPI } from "@/core/components/Form/components/Select/core/API";
import {
  SelectInterface,
  SelectsInterface
} from "@/core/components/Form/components/Select/core/Interfaces";
import {
  CountriesRepository,
  RegionsRepository,
  CitiesRepository
} from "../repositories/AdminRepositories";

@Component({
  components: { Select }
})
export default class IndexPage extends Vue {
  selects: SelectsInterface = {};

  mounted() {
    this.selects = {
      country: {
        model: [],
        itemValue: "id",
        itemText: "name",
        repository: new CountriesRepository(),
        children: ["region"],
        data: [{ value: 777, text: "777" }, { value: 888, text: "888" }],
        appendData: true
      },
      region: {
        model: [],
        itemValue: "id",
        itemText: "name",
        repository: new RegionsRepository(),
        children: ["city"],
        lazy: true,
        data: []
      },
      city: {
        model: [],
        itemValue: "id",
        itemText: "name",
        repository: new CitiesRepository(),
        lazy: true,
        data: []
      }
    };
    SelectAPI.loadDataSource(this.selects.country, {});
  }

  public changeValue(selectObject: SelectInterface): void {
    SelectAPI.handleChange(selectObject, this.selects);
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
        @change="changeValue(select)"
      ></Select>
    </div>
  </div>
</template>
