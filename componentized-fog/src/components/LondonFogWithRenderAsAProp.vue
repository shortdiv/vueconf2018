<script>
import Order from "./Order.vue";
import Cold from "./Cold.vue";
import Hot from "./Hot.vue";
import Mug from "./Mug.vue";
import Tea from "./Tea.vue";
import Milk from "./Milk.vue";
import Vanilla from "./Vanilla.vue";

export default {
  name: "LondonFog",
  components: {
    Hot,
    Cold,
    Mug,
    Tea,
    Milk,
    Vanilla
  },
  render() {
    return (
      <Order
        renderChild={({ currentTemp }) => {
          return (
            <Mug>
              {currentTemp === "cold" ? <Cold /> : <Hot />}
              <div class="contents">
                <Milk />
                <Vanilla />
                <Tea />
              </div>
            </Mug>
          );
        }}
      />
    );
  }
};
</script>

<style scoped>
</style>