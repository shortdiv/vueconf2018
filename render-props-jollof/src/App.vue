<template>
  <div class="container">
    <Meal>
      <template slot="jollof" slot-scope="{ temperature }">
        <InstantPot :temperature="temperature"></InstantPot>
      </template>
    </Meal> 
  </div>
</template>

<script>
import Meal from './components/Meal.vue';
import InstantPot from './components/InstantPot.vue';

export default {
  name: "app",
  components: {
    Meal,
    InstantPot
  },
  data () {
    return {

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
