<template>
    <div class="card">
        <div class="card-header">
        <router-link to="/" class="btn btn-info float-left">Create New Post</router-link>
        </div>
        <div class="card-body">
            <h2>
                Post Title : {{posts.title}}
            </h2>
                Post Description : {{posts.description}}
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    let id = this.$route.params.ids;

    axios.get('/posts/' + id)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
