<template>
    <div class="content ">
        <AppHeader :title="title" />
        <main class="container mt-3">
            <ul>
    
            </ul>
        </main>
    </div>
</template>
<script>

import AppHeader from "./AppHeader";
import PostList from "./posts/PostsList.vue";

    export default{
    name: "App",
    components: {
        AppHeader,
        PostList
    },
    data(){
        return{
            title: "Boolpress",
        } 
            
    },

};
</script>