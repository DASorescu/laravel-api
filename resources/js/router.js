
// import vue plus router 
import Vue from 'vue'
import VueRouter from 'vue-router'

// importo i componenti
import HomePage from "./components/pages/HomePage";
import ContactsPage from "./components/pages/ContactsPage";
import AboutUsPage from "./components/pages/AboutUsPage";
import NotFoundPage from "./components/pages/NotFoundPage";


// uso il router 
Vue.use(VueRouter)

// definizione rotte 
const routes = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/about', component: AboutUsPage, name: 'about' },
        { path: '/contacts', component: ContactsPage, name: 'contacts' },

        // ! SEMPRE IN FONDO!
        { path: '*', component: NotFoundPage, name: 'notFound' },

    ]
});

export default routes;