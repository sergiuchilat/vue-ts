<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { GlobalRepository } from "@/modules/admin/repositories/AdminRepositories";
import Entity from "@/modules/admin/models/Entity";
@Component({
  name: "Select"
})
export default class Select extends Vue {
  @Prop(Number) parentId!: number;
  @Prop(String) childrenResourceUrl!: string;

  dataRepository: GlobalRepository = new GlobalRepository();
  entities: Array<Entity> = [];
  entity: Entity = Select.resetEntity();
  testWatch: string = "";

  @Watch("testWatch")
  testChanged() {
    console.log("test changed");
  }

  mounted() {
    console.log(this.childrenResourceUrl);
    this.dataRepository.setResource(this.childrenResourceUrl);
    setTimeout(() => {
      this.getEntities();
    }, 500);
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
