<script lang="ts">
import {
  Vue,
  Component,
  Prop,
  Model,
  Emit,
  Watch
} from "vue-property-decorator";
import { DataRepository } from "./core/Repository";
import Entity from "./core/Model";

export interface parentsValue {
  [value: string]: number;
}

export interface SelectInterface {
  model: number;
  name: string;
  resourceUrl: string;
  children: Array<string>;
  parent: string;
  lazy: boolean;
}

@Component({
  name: "Select"
})
export default class Select extends Vue {
  @Model("change") model!: number;

  @Prop(String) resourceUrl!: string;
  @Prop(Boolean) lazy!: boolean;
  @Prop(Number) parentValue!: number;

  dataRepository: DataRepository = new DataRepository();
  entities: Array<Entity> = [];
  entity: Entity = Select.resetEntity();

  mounted() {
    this.dataRepository.setResource(this.resourceUrl);
    if (!this.lazy) {
      this.getEntities({});
    }
  }

  @Watch("parentValue")
  update() {
    this.getEntities({ parentID: this.parentValue });
  }

  @Emit("change")
  change(id: number): number {
    return id;
  }

  static resetEntity(): Entity {
    return { id: 0, name: "", description: "" };
  }

  async getEntities(filter: Object) {
    console.log(filter);
    this.dataRepository.setFilter(filter);
    this.entities = await this.dataRepository.get();
  }
}
</script>
<template>
  <div>
    p: {{ parentValue }}
    <v-select
      v-model="entity.id"
      :items="entities"
      label="Outline style"
      item-text="name"
      item-value="id"
      outlined
      @change="change(+entity.id)"
    ></v-select>
  </div>
</template>
