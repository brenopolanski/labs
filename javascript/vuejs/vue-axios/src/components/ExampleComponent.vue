<template>
  <ul v-if="posts && posts.length">
    <li v-for="post of posts" v-bind:key="post.id">
      <p>
        <strong>{{post.title}}</strong>
      </p>
      <p>{{post.body}}</p>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "ExampleComponent",
  data() {
    return {
      posts: [],
      errors: []
    };
  },

  // Fetches posts when the component is created.
  async created() {
    /*
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then(res => {
        this.posts = res.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
    */

    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );
      this.posts = response.data;
    } catch (e) {
      this.errors.push(e);
    }
  }
};
</script>
