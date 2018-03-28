<template>
  <div id="app">
        <order>
      <template
        slot="tea"
        slot-scope="{temperature, milk, water, tea}"
      >
      <ToGo
        :milk="milk"
        :water="water"
        :tea="tea"
        :temperature="temperature"
      ></ToGo>
      </template>
    </order>
  </div>
</template>

<script>
import Order from './components/Order';
import ToGo from './components/ToGo';

export default {
  name: 'App',
  components: {
    Order,
    ToGo,
  },
};
</script>


<style>
body,
html {
  position: relative;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #6e4228;
  background: linear-gradient(to bottom, #6e4228 0%, #956f5a 100%);
}

#app {
  margin-top: 6em;
}

@mixin risingSteam($dist, $duration, $delay) {
  animation: move-and-fade $duration linear infinite;
  animation-delay: $delay;

  @keyframes move-and-fade {
    0% {
      opacity: 0;
      transform: translateY(0) rotate(90deg);
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0;
    }
    100% {
      transform: translateY(-$dist) rotate(90deg);
      opacity: 0;
    }
  }
}

@keyframes pour-coffee {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}

#mug {
  width: 8em;
  height: 6em;
  border-radius: 0.05em 0.05em 3em 3em;
  border: 10px solid #c6c6c6;
  position: relative;
  margin: 0 auto;

  &:after {
    content: "";
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
.stream {
  position: absolute;
  transform: rotate(90deg);
  height: 80px;
  width: 80px;
  margin-top: -55px;
  opacity: 0;
  @include risingSteam(15px, 2.5s, 3.4s);

  &:before {
    position: absolute;
    content: "~";
    font-size: 70px;
  }

  &:first-child {
    margin-left: 20px;
    margin-top: -70px;
    @include risingSteam(10px, 2.5s, 3.2s);
  }
  &:last-child {
    margin-left: 40px;
    @include risingSteam(20px, 2.5s, 3s);
  }
}

#cold {
  position: absolute;
  margin-left: 50px;
}

.flake {
  position: absolute;
  margin-top: -55px;
  opacity: 0;
  @include risingSteam(15px, 2.5s, 3.4s);
  &:before {
    content: "*";
    position: absolute;
    color: white;
    height: 80px;
    width: 80px;
    margin-top: 0px;
    font-size: 40px;
  }
  &:first-child {
    margin-left: 20px;
    margin-top: -70px;
    @include risingSteam(10px, 2.5s, 3.2s);
  }
  &:last-child {
    margin-left: 40px;
    margin-top: -45px;
    @include risingSteam(20px, 2.5s, 3s);
  }
}

.steam {
  position: absolute;
  top: -30px;
}
</style>
