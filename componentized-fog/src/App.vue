<template>
  <div id="app">
    <Mug :isIced="isIced" />
    <!-- <Mug>
      <Cold v-if="isIced"/>
      <Hot v-else />
      <div class="contents">
        <Milk />
        <Vanilla />
        <Tea></Tea>
      </div>
    </Mug> -->
    <!-- <LondonFogWithRenderAsAProp /> -->
    <!-- <LondonFogWithScopedSlots /> -->
  </div>
</template>

<script>
import Mug from "./components/Mug.vue";
import LondonFogWithRenderAsAProp from "./components/LondonFogWithRenderAsAProp.vue";
import LondonFogWithScopedSlots from "./components/LondonFogWithScopedSlots.vue";

import Tea from "./components/Tea.vue";
import Milk from "./components/Milk.vue";
import Vanilla from "./components/Vanilla.vue";
import Hot from "./components/Hot.vue";
import Cold from "./components/Cold.vue";

export default {
  name: "app",
  components: {
    Mug,
    LondonFogWithRenderAsAProp,
    LondonFogWithScopedSlots,
    Tea,
    Milk,
    Vanilla,
    Hot,
    Cold
  },
  data() {
    return {
      isIced: false
    };
  }
};
</script>

<style lang="scss">
body,
html {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}
</style>
