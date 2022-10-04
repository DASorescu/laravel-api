<template>
    <section id="post-list">
        <h2>Posts</h2>
        <ul v-if="posts.length">
            <li v-for="post in posts" :key="post.id">
                <PostCard :post="post" />
            </li>
        </ul>
        <h5 v-else>Nessun Post</h5>
    </section>
</template>


<script>
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
    }
}
</script>