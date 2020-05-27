<template>
  <div class="home">
      <Dragged msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Prop, Vue } from "vue-property-decorator";
import Dragged from '@/components/Dragged.vue'
@Component({
  components: {
    Dragged
  }
})
export default class Home extends Vue {

}
</script>
