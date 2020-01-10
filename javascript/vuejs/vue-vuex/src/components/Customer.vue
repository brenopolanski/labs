<template>
  <div class="customer">
    <h1>I'm a customer</h1>
    <p>I see {{ totalTvCount }} TVs!</p>
    <p v-show="happyStaff">The staff seems happy!</p>
    <p v-show="!totalTvCount">I can't buy any...</p>
    <button :disabled="!totalTvCount" @click="buyTv">Buy TV</button>
    <button :disabled="totalTvCount < 2" @click="buyTwoTvs">Buy Two TVs</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Customer",
  computed: {
    /*totalTvCount() {
      return this.$store.state.totalTvCount;
    },
    happyStaff() {
      // Check in the getter if the staff is happy
      return this.$store.getters.happyStaff;
    }*/
    ...mapState(["totalTvCount"]),
    ...mapGetters(["happyStaff"])
  },
  methods: {
    ...mapActions(["removeTv"]),
    buyTv() {
      // Dispatch the action to buy a TV
      this.$store.dispatch("removeTv", 1);
    },
    buyTwoTvs() {
      // Dispatch the action to buy two TVs
      this.$store.dispatch("removeTv", 2);
    }
  }
};
</script>
