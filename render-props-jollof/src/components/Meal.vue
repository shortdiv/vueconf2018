<template>
  <div id="meal">
    <slot
      name="jollof"
      :temperature="temperature">
      <PotOfJollof :temperature="temperature" />
    </slot>
    <h2>Temperature: {{ temperature }}</h2>
  </div>
</template>

<script>
  import PotOfJollof from './PotOfJollof.vue';
  export default {
    name: 'Meal',
    components: {
      PotOfJollof
    },
    data() {
      return {
        temperature: 100
      }
    },
    methods: {
    coolOff () {
      if(this.temperature > 40) {
        this.temperature -= 1
      } else {
        window.clearInterval(this.interval)
      }
    }
  },
    mounted () {
      this.interval = setInterval(this.coolOff, 5000)
    }
  }
</script>

<style scoped>

</style>