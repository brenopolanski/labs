<template>
  <vuetable
    ref="vuetable"
    api-url="https://explorer.ark.io/api/wallets/AUDud8tvyVZa67p3QY7XPRUTjRGnWQQ9Xv/transactions"
    :fields="['id']"
    :query-params="makeQueryParams"
  ></vuetable>
</template>

<script>
import Vuetable from "vuetable-2";

export default {
  name: "HelloWorld",
  components: {
    Vuetable
  },
  methods: {
    makeQueryParams(sortOrder, currentPage, perPage) {
      return {
        orderBy: "timestamp:desc",
        page: currentPage,
        limit: perPage
      };
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
