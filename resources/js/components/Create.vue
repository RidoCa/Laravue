<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Create New Data</div>

                    <div class="card-body">
                        <!-- memakai ini mengakibatkan adanya simbol ? pada url -->
                        <form v-on:submit="submitPost()">
                        <!-- <form> -->
                            <div class="form-group">
                                <input type="text" v-model="posts.title" placeholder="Title" class="form-control">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" placeholder="Description" v-model="posts.description" id="" cols="30" rows="5"></textarea>
                            </div>
                             <div class="form-group">
                                     <router-link to="/" class="btn btn-danger float-right">Cancel</router-link>
                                <button class="btn btn-primary" type="submit">Create</button>
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

    methods:{
    // Fetches posts when the component is created.
        submitPost() {
            axios.post('/posts', this.posts)
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
