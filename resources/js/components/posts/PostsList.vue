<template>
    <section id="post-list">
        <h2>Posts</h2>
        <div v-if="posts.length">
            <PostCard v-for="post in posts" :key="post.id" :post="post" />
        </div>
        <h5 v-else>Nessun Post</h5>
    </section>
</template>


<script>
import axios from "axios";
import PostCard from "./PostCard";
export default {
    name: 'PostsList',
    components: {
        PostCard
    },
    data() {
        return {
            posts: [],
        }
    },

    methods: {
        fetchPosts() {
            axios.get('http://localhost:8000/api/posts').then(res => {
                this.posts = res.data;
            }).catch((err) => {
                console.error(err);
            }).then(() => {
                console.info("Chiamata Terminata")
            })
        }
    },
    mounted() {
        this.fetchPosts();
    }
}
</script>