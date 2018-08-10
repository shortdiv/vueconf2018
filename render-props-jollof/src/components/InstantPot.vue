<template>
  <div class="instant-pot">
    <div class="pot-lid"></div>
    <div class="pot-body"></div>
    <div class="pot-bottom"> </div>
    <div class="pot-display" ref="display" data-temp="Pot's hot"></div>
  </div>
</template>

<script>
  export default {
    name: 'InstantPot',
    props: {
      temperature: {
        type: Number
      }
    },
    watch: {
      temperature() {
        if (this.temperature < 40) {
          this.$refs.display.dataset.temp = "Pot's Not Hot"
        }
        else {
          this.$refs.display.dataset.temp = "Pot's Hot"
        }
      }
    },
    mounted () {
      //this.$refs.display.attr
      //$(this).attr("data-count", parseInt($(this).attr("data-count")) + 1);
    }
  }
</script>

<style lang="scss">
.instant-pot {
  position: relative;
  margin-bottom: 3.2em;
  & .pot-lid {
    width: 15em;
    height: 2em;
    border: 0.4em solid black;
    border-radius: 40% 40% 0 0;
    background: #fff;
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
  & .pot-body {
    width: 15em;
    height: 10em;
    border-radius: 0 0 0.5em 0.5em;
    border: 0.4em solid black;
    margin-top: -0.5em;
    background: #fff;
    &:before {
      content: '';
      position: absolute;
      width: 2em;
      height: 0.5em;
      margin-left: 7.5em;
      border: 0.4em solid black;
      background: #000;
      border-radius: 0 0.5em 0.5em 0;
    }
    &:after {
      content: '';
      position: absolute;
      width: 2em;
      height: 0.5em;
      left: -40px;
      border: 0.4em solid black;
      background: #000;
      border-radius: 0.5em 0 0 0.5em;
    }
  }
  .pot-bottom {
    border-top: 1em solid #000;
	  border-left: 50px solid transparent;
	  border-right: 50px solid transparent;
	  height: 0;
	  width: 9em;
    position: absolute;
    right: 5px;
  }
  .pot-display {
    position: absolute;
    width: 5em;
    height: 5em;
    border: 0.2em solid black;
    border-radius: 10px;
    bottom: 2em;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    background: grey;
    &:before {
      content: attr(data-temp);
      word-wrap: break-word;
      position: absolute;
      background: #4D60E3;
      width: 3em;
      height: 4em;
      top: 0.2em;
      margin-left: 7.5em;
      border: 0.2em solid black;
      border-radius: 10px;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>