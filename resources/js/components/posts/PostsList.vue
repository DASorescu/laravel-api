<template>
    <section id="post-list">
        <h2>Posts</h2>
        <AppLoader v-if="isLoading" />
        <div v-else-if="error">
            <ErrorAlert :error="error" @set-error=deleteError />
        </div>
        <div v-else>
            <div v-if="posts.length">
                <PostCard v-for="post in posts" :key="post.id" :post="post" />
            </div>
            <h5 v-else>Nessun Post</h5>
        </div>
    </section>
</template>



<script>
import axios from "axios";
import PostCard from "./PostCard";
import AppLoader from "../AppLoader";
import ErrorAlert from "./ErrorAlert";
export default {
    name: 'PostsList',
    components: {
        PostCard,
        AppLoader,
        ErrorAlert,
    },
    data() {
        return {
            posts: [],
            isLoading: false,
            error: null,
        }
    },

    methods: {
        fetchPosts() {
            this.isLoading = true;
            axios.get('http://localhost:8000/ap/posts').then(res => {
                this.posts = res.data;
            }).catch((err) => {
                this.error = "Errore durante il fetch dei post";
            }).then(() => {
                this.isLoading = false;
            })
        },
        deleteError() {
            this.error = null;
        }
    },
    mounted() {
        this.fetchPosts();
    }
}
</script>