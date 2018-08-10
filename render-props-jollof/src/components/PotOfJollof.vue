<template>
  <div>
    <Pot>
      <Water />
      <Stew  />
      <Veggies />
      <Meat />
      <Rice />
    </Pot>
  </div>
</template>

<script>
import Stew from './Stew.vue';
import Water from './Water.vue';
import Rice from './Rice.vue';
import Veggies from './Veggies.vue';
import Meat from './Meat.vue';
import Chili from './Chili.vue';
import Pot from './Pot.vue';

export default {
  name: 'PotOfJollof',
  components: {
    Water,
    Stew,
    Rice,
    Veggies,
    Meat,
    Chili,
    Pot
  },
  props: {
    temperature: {
      type: Number
    }
  },
  provide () {
    const state = {}
    Object.defineProperty(state, 'temperature', {
       enumerable: true,
       get: () => this.temperature,
    })
    return { state }
  }
}
</script>

<style scoped>

</style>