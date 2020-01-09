<template>
  <div>
    <input type="text" v-model="postBody" @change="postPost" />
    <ul v-if="posts && posts.length">
      <li v-for="post of posts" v-bind:key="post.id">
        <p>
          <strong>{{post.title}}</strong>
        </p>
        <p>{{post.body}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ExampleComponent2",
  data() {
    return {
      postBody: "",
      posts: [],
      errors: []
    };
  },
  methods: {
    // Pushes posts to the server when called.
    postPost() {
      axios
        .post("http://jsonplaceholder.typicode.com/posts", {
          body: this.postBody
        })
        .then(response => this.posts.push(response.data))
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>
