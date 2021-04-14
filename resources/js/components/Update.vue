<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Edit Post</div>

                    <div class="card-body">
                        <!-- memakai ini mengakibatkan adanya simbol ? pada url -->
                        <form v-on:submit="submitPostEdit()">
                        <!-- <form> -->
                            <div class="form-group">
                                <input type="text" v-model="posts.title" placeholder="Title" class="form-control">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" placeholder="Description" v-model="posts.description" id="" cols="30" rows="5"></textarea>
                            </div>
                             <div class="form-group">
                                     <router-link to="/" class="btn btn-danger float-right">Cancel</router-link>
                                <button class="btn btn-primary" type="submit">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: {
          title: '',
          description: ''
      },
      errors: []
    }
  },

    // Fetches posts when the component is created.
  created() {
    let id = this.$route.params.ids;

    axios.get('/posts/' + id + '/edit')
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
        submitPostEdit() {
            let id = this.$route.params.ids;

            axios.put('/posts/' + id, this.posts)
            .then(response => {
                // console.log(response)
            // JSON responses are automatically parsed.
            this.$router.push({path:'/'})
            this.posts = response.data
            })
            .catch(e => {
            this.errors.push(e)
            })
        }
  }
}
</script>
