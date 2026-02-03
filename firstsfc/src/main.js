import { createApp } from 'vue'

import App from './App.vue'
import personal_profile from './components/personal_profile.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import Comment from './components/Comment.vue'
import CommentForm from './components/CommentForm.vue'
import RestApi from './components/RestApi.vue'

const app = createApp(App)
app.component('personal-profile',personal_profile)
app.component('food-item', FoodItem)
app.component('food-item2',FoodItem2)
app.component('comment',Comment)
app.component('commentform',CommentForm)
app.mount('rest-api',RestApi)
app.mount('#app')