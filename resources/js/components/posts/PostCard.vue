<template>
    <div id="post-card">

    </div>
</template>


<script>

export default {
    name: 'PostsCard',
    props: {
        posts: Array
    },
    data() {
        return {
            posts: [],
        }
    }
}
</script>