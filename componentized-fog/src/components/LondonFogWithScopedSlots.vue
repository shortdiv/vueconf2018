<script>
import OrderWithScopedSlots from "./OrderWithScopedSlots.vue";
import Cold from "./Cold.vue";
import Hot from "./Hot.vue";
import Mug from "./Mug.vue";
import Tea from "./Tea.vue";
import Milk from "./Milk.vue";
import Vanilla from "./Vanilla.vue";

export default {
  name: "LondonFogWithScopedSlots",
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
      <OrderWithScopedSlots
        scopedSlots={{
          default: ({ currentTemp }) => {
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
          }
        }}
      />
    );
  }
};
</script>

<style scoped>
</style>