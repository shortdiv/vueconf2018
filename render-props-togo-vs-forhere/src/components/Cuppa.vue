<template>
  <div class='mug'>
    <Steam v-if='temperature >= 50'></Steam>
    <Carafe>
      <Water />
      <Milk />
      <Tea />
    </Carafe>
    <Saucer />
  </div>
</template>

<script>
import Steam from './Steam';
import Carafe from './Carafe';
import Saucer from './Saucer';
import Tea from './Tea';
import Milk from './Milk';
import Water from './Water';

export default {
  name: 'cuppa',
  components: {
    Tea,
    Water,
    Milk,
    Carafe,
    Saucer,
    Steam,
  },
  props: {
    temperature: {
      type: Number,
    },
  },
};
</script>

<style lang='scss' scoped>
.mug {
  width: 8em;
  height: 6em;
  border-radius: 0.05em 0.05em 3em 3em;
  border: 10px solid #c6c6c6;
  position: relative;
  margin: 0 auto;
  margin-bottom: 5em;

  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2em;
    right: 0;
    margin-right: -2.5em;
    top: 1em;
    border-radius: 0.05em 3em 3em 0.5em;
    border: 10px solid #c6c6c6;
  }
}
</style>
