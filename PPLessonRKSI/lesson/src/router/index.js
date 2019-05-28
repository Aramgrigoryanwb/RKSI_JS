import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import UserProfile from '@/components/UserProfile'
import UserPosts from '@/components/UserPosts'

Vue.use(Router)

export default new Router({
    routes: [
      { path: '/user/:id', name: 'user', component: User, // :id = $route.params.id
        children: [
          { path: 'profile', name: 'userprofile', component: UserProfile }, // user/1/profile
          { path: 'posts', name: 'userposts', component: UserPosts } // user/1/posts
  
        ]
      }
    ]
  })