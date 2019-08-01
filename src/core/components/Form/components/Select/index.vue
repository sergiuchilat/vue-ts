<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { DataRepository } from "./core/Repository";
import Entity from "./core/Model";
@Component({
  name: "Select"
})
export default class Select extends Vue {
  @Prop(Number) parentId!: number;
  @Prop(String) childrenResourceUrl!: string;
  @Prop(Boolean) lazy: boolean = true;

  dataRepository: DataRepository = new DataRepository();
  entities: Array<Entity> = [];
  entity: Entity = Select.resetEntity();
  testWatch: string = "";

  @Watch("testWatch")
  testChanged() {
    console.log("test changed");
  }

  mounted() {
    this.dataRepository.setResource(this.childrenResourceUrl);
    this.getEntities();
  }

  static resetEntity(): Entity {
    return { id: 0, name: "", description: "" };
  }

  async getEntities() {
    this.entities = await this.dataRepository.get();
  }

  async getEntity(id: Number) {
    this.entity = await this.dataRepository.getOne(id);
  }
}
</script>
<template>
  <div>
    Admin attributes page
    <hr />
    <v-select
      v-model="entity.id"
      :items="entities"
      label="Outline style"
      item-text="name"
      item-value="id"
      outlined
      @change="getEntity(+entity.id)"
    ></v-select>
    <Select
      v-if="entity.children_resource_url"
      :parent-id="entity.id"
      :childrenResourceUrl="entity.children_resource_url"
    />
  </div>
</template>
