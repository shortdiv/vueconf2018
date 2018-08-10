<template>
  <div class="pot">
    <div :class="{ 'pot-lid': true, 'dance-lid': isHot() }"></div>
    <div class="pot-base">
      <div class="contents">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Pot',
    inject: ['state'],
    methods: {
      isHot () {
        return this.state.temperature > 80 ? true : false
      }
    }
  }
</script>

<style lang="scss">
.pot {
  margin-bottom: 3.2em;
  display: inline-block;
}
.pot-lid{
  width: 15em;
  height: 1em;
  border-radius: 0.5em 0.5em 0 0;
  border: 0.4em solid black;
  //animation: open-lid 10s 1;
  margin-bottom: 0.5em;
  border-bottom: 0.1em solid black;
  &:before{
    content: '';
    position: absolute;
    width: 2em;
    height: 0.5em;
    margin-top: -1.5em;
    margin-left: -1em;
    border-radius: 0.5em 0.5em 0 0;
    border: 0.4em solid black;
  }
}
.pot-base {
  width: 15em;
  height: 10em;
  border-radius: 0 0 0.5em 0.5em;
  border: 0.4em solid black;
  margin-top: -0.5em;
  &:before {
    content: '';
    position:absolute;
    width: 2em;
    height: 0.5em;
    margin-left: -10.5em;
    margin-top: 2em;
    -webkit-transform: skew(0, 20deg);
	   -moz-transform: skew(0, 20deg);
	     -o-transform: skew(0, 20deg);
    border: 0.4em solid black;
    background: #888;
    border-radius: 0.5em 0 0 0.5em;
  }
  &:after {
    content: '';
    position:absolute;
    width: 2em;
    height: 0.5em;
    margin-left: 7.5em;
    margin-top: -8em;
    -webkit-transform: skew(0, -20deg);
	   -moz-transform: skew(0, -20deg);
	     -o-transform: skew(0, -20deg);
    border: 0.4em solid black;
    background: #888;
    border-radius: 0 0.5em 0.5em 0;
  }
}
.contents {
  position: relative;
  height: 100%;
}

.dance-lid {
  animation: lid-dance 1s infinite;
}
@keyframes lid-dance {
  10%, 20% { 
    transform:  rotate3d(0, 0, 1, -3deg); 
  }
  30%, 50%, 70%, 90% { 
    transform: rotate3d(0, 0, 1, 3deg); 
  }
  40%, 60%, 80% {
    transform:  rotate3d(0, 0, 1, -3deg);
  }
}
</style>