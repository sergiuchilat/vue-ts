<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Model,
  Emit,
  Watch
} from "vue-property-decorator";

import { SelectInterface } from "./core/Interfaces";
import ArrayUtils from "@/core/utils/Array";

@Component({
  name: "Select"
})
export default class Select extends Vue {
  @Model("change") model!: Array<number>;

  @Prop({ default: "text" }) itemText!: string;
  @Prop({ default: "value" }) itemValue!: string;
  @Prop({ default: false }) multiple!: boolean;
  @Prop({ type: Array, required: true }) items!: Array<SelectInterface>;

  selected: Array<number> = [];
  queryString: string = "";
  selectedAll: boolean = false;

  @Emit("change")
  change(selected: Array<number> | number): Array<number> {
    if (typeof selected === "number") {
      return [selected];
    }
    return selected;
  }

  searchItems() {
    if (this.queryString !== "") {
      return this.items.filter((item: any) => {
        if (item[this.itemText]) {
          return item[this.itemText]
            .toLowerCase()
            .includes(this.queryString.toLowerCase());
        }
      });
    }
    return this.items;
  }

  toggleSelectedAll() {
    this.selectedAll = !this.selectedAll;
    this.$nextTick(() => {
      if (!this.selectedAll) {
        this.selected = ArrayUtils.arrayDiff(this.selected, this.searchItems());
      }
    });
  }
  selectSomeItems() {
    return this.model.length > 0 && !this.items;
  }

  icon() {
    if (this.selectedAll) return "check_box";
    if (this.model.length && this.selectSomeItems) {
      return "indeterminate_check_box";
    }
    return "check_box_outline_blank";
  }
}
</script>
<template>
  <div>
    <v-select
      v-model="selected"
      :items="searchItems()"
      :item-text="itemText"
      :item-value="itemValue"
      label="Outline style"
      outlined
      :multiple="multiple"
      @change="change(selected)"
    >
      <template v-slot:prepend-item>
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          class="pl-2 pr-2 cardColor stickyInput"
          placeholder="Placeholder"
          ref="search"
          v-model="queryString"
        ></v-text-field>
        <v-list-item
          class="cardColor sticky-select-all"
          @click="toggleSelectedAll()"
          ripple
          v-if="multiple && items.length"
        >
          <v-list-item-action>
            <v-icon :color="items.length > 0 ? 'primary' : ''">{{
              icon
            }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Select ALL</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mt-2 "></v-divider>
      </template>
    </v-select>
  </div>
</template>
