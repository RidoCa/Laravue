<template>
    <div class="card">
        <div class="card-header">
            <router-link to="/create" class="btn btn-info float-right">Create New Post</router-link>
        </div>

        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th>
                            No
                        </th>
                        <th>
                            Title
                        </th>
                        <th>
                            Description
                        </th>
                        <th class="text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(post, index) in posts" :key="post.id">
                        <td>
                            {{index+1}}
                        </td>
                        <td>
                           {{post.title}}
                        </td>
                        <td>
                           {{post.description}}
                        </td>
                        <td class="text-center" style="white-space: nowrap; color:white">
                             <router-link :to="{name: 'readPost', params:{ids:post.id}}" class="btn btn-info">View</router-link>
                              <router-link :to="{name: 'editPost', params:{ids:post.id}}" class="btn btn-primary">Edit</router-link>
                            <button class="btn btn-danger" v-on:click="submitPostDelete(post.id, index)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
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
    axios.get('/posts')
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

    methods:{
    // Fetches posts when the component is created.
        submitPostDelete(id, index) {
        if(confirm("click ok to delete")){

                axios.delete('/posts/' + id)
                .then(response => {
                    // console.log(response)
                // JSON responses are automatically parsed.
                this.posts.splice(index, 1);
                })
                .catch(e => {
                this.errors.push(e)
                })
            }
        }

  }

}
</script>
