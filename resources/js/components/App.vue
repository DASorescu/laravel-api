<template>
    <div class="content ">
        <AppHeader :title="title" />
        <main class="container mt-3">
            <ul>
                <PostsList />
                </ul>
        </main>
    </div>
</template>
<script>

import AppHeader from "./AppHeader";
import PostList from "./posts/PostsList.vue";
import PostsList from "./posts/PostsList.vue";

export default {
    name: "App",
    components: {
        AppHeader,
        PostList,
        PostsList
    },
    data(){
        return{
            title: "Boolpress",
        } 
            
    },

};
</script>