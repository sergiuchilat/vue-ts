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

@Component({
  name: "Select"
})
export default class Select extends Vue {
  @Model("change") model!: Array<number>;

  @Prop({ default: "text" }) itemText!: string;
  @Prop({ default: "value" }) itemValue!: string;
  @Prop({ type: Array, required: true }) items!: Array<SelectInterface>;

  selected: Array<number> = [];

  @Emit("change")
  change(selected: Array<number> | number): Array<number> {
    if (typeof selected === "number") {
      return [selected];
    }
    return selected;
  }
}
</script>
<template>
  <div>
    <v-select
      v-model="selected"
      :items="items"
      :item-text="itemText"
      :item-value="itemValue"
      label="Outline style"
      outlined
      @change="change(selected)"
    ></v-select>
  </div>
</template>
