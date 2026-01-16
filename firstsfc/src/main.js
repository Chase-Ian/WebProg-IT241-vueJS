import { createApp } from 'vue'

import App from './App.vue'
import personal_profile from './components/personal_profile.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'

const app = createApp(App)
app.component('personal-profile',personal_profile)
app.component('food-item', FoodItem)
app.component('food-item2',FoodItem2)
app.mount('#app')