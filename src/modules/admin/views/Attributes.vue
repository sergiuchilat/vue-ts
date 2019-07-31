<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import EntitiesRepository from "@/modules/admin/repositories/EntitiesRepository";
@Component({})
export default class AttributesPage extends Vue {
  protected entitiesRepository: EntitiesRepository;
  private entities: Array<object> = [];
  constructor() {
    super();
    this.entitiesRepository = new EntitiesRepository("");
  }

  mounted () {
    this.entitiesRepository
      .get()
      .then((response: any) => {
        this.entities = response;
      })
      .catch((error: any) => {
        this.entities = error;
      })
  }
}
</script>
<template>
  <div>
    Admin attributes page
    <hr />
    {{ entities }}
  </div>
</template>
