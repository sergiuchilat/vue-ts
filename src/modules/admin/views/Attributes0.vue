<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import {
  EntityRepository,
  GlobalRepository
} from "@/modules/admin/repositories/AdminRepositories";
import Entity from "@/modules/admin/models/Entity";
import Select from "../components/Select.vue";
@Component({
  components: { Select }
})
export default class AttributesPage extends Vue {
  entitiesRepository: GlobalRepository = new GlobalRepository();
  entities: Array<Entity> = [];
  entity: Entity = AttributesPage.resetEntity();
  resourceURL: string = "level1";
  testWatch: string = "";

  @Watch("testWatch")
  testChanged() {
    console.log("test changed");
  }

  mounted() {
    this.entitiesRepository.setResource(this.resourceURL);
    this.getEntities();
  }

  static resetEntity(): Entity {
    return { id: 0, name: "", description: "" };
  }

  async getEntities() {
    this.entities = await this.entitiesRepository.get();
  }

  async getEntity(id: Number) {
    this.entity = await this.entitiesRepository.getOne(id);
    this.testWatch = this.entity.description;
  }
}
</script>
<template>
  <div>
    Admin attributes page
    <hr />
    <Select :parent-id="entity.id" :childrenResourceUrl="resourceURL" />
  </div>
</template>
