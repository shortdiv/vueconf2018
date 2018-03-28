<template>
<div id="drink">
  <slot name="tea"
    :temperature="temperature"
  >
    <Cuppa :temperature="temperature" />
  </slot>
    <h2>{{temperature}}</h2>
  </div>
</template>
<script>
import Cuppa from './Cuppa';

export default {
  name: 'order',
  components: {
    Cuppa,
  },
  data() {
    return {
      temperature: 100, // setInterval for temp cooling off
      tea: 50,
      milk: 20,
      water: 30,
      sugars: 0,
    };
  },
  methods: {
    coolOff() {
      if (this.temperature > 40) {
        this.temperature -= 1;
      } else {
        window.clearInterval(this.interval);
      }
    },
  },
  mounted() {
    this.interval = setInterval(this.coolOff, 5000);
  },
  props: {},
};
</script>

<style lang="scss" scoped>
#drink {
  margin-top: 3em;
}
h2 {
  font-size: 60px;
  text-align: center;
}
</style>
