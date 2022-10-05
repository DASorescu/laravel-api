<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">{{title}}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'contacts'}">Contacts</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{name: 'about'}">About Us</router-link>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
</template>

<script>
export default {
    name: 'AppHeader',
    props: {
        title: String,
    }
};
</script>