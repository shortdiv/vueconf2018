<template>
  <div class="container">
    <Pot>
      <Water slot="water" />
      <Stew slot="stew" />
      <Veggies slot="veggies" v-if="vegetarian" />
      <Meat slot="veggies" v-else />
      <Rice slot="rice"/>
    </Pot>
  </div>
</template>

<script>
import Stew from './components/Stew.vue';
import Water from './components/Water.vue';
import Rice from './components/Rice.vue';
import Veggies from './components/Veggies.vue';
import Meat from './components/Meat.vue';
import Chili from './components/Chili.vue';
import Pot from './components/Pot.vue';

export default {
  name: "app",
  components: {
    Water,
    Stew,
    Rice,
    Veggies,
    Meat,
    Chili,
    Pot
  },
  data() {
    return {
      vegetarian: false
    }
  },
};
</script>

<style lang="scss">
body {
  background: #888;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-flow: row wrap;
  margin: 0;
}
.container {
  position: absolute;
  text-align: center;
}
</style>
