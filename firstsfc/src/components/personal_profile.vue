<template>
  <div class="profile-container">

    <!-- NAVBAR -->
    <nav class="navbar">
      <div class="nav-inner">
        <span class="brand" @click="go('home')">Personal Profile</span>

        <button class="hamburger" @click="menuOpen = !menuOpen">☰</button>

        <ul class="nav-links" :class="{ open: menuOpen }">
          <li @click="go('home')">Home</li>
          <li @click="go('about')">About</li>
          <li @click="go('gallery')">Gallery</li>
        </ul>
      </div>
    </nav>

    <!-- BACKGROUND -->
    <div class="star-field"></div>

    <!-- CONTENT -->
    <main class="content">
      <div class="profile-card">

        <!-- HOME -->
        <section v-show="currentPage === 'home'" class="page">
          <h1>Welcome to my personal webpage!</h1>
          <h2>Chase Ian</h2>

          <img class="avatar" :src="avatar" alt="Avatar" />
          <p>• Programmer • Game Developer</p>
        </section>

        <!-- ABOUT -->
        <section v-show="currentPage === 'about'" class="page">
          <img class="avatar" :src="avatar" alt="Avatar" />
          <h2>Chase Ian</h2>

          <p>
            <strong>About Me</strong><br />
            Good day! My name is Chase from IT241.
          </p>

          <div class="about-grid">
            <div>
              <h3>Education</h3>
              <p>Asia Pacific College (on-going)</p>
            </div>
            <div>
              <h3>Course</h3>
              <p>Bachelor of IT</p>
            </div>
            <div>
              <h3>IT Experience</h3>
              <p>GitHub, game dev, Lua & Python</p>
            </div>
            <div>
              <h3>Hobbies</h3>
              <p>Gaming and gala with friends</p>
            </div>
            <div>
              <h3>Goals</h3>
              <p>Develop a successful game</p>
            </div>
          </div>
        </section>

        <!-- GALLERY -->
        <section v-show="currentPage === 'gallery'" class="page">
          <h2>Image Gallery</h2>

          <div class="gallery-grid">
            <img
              v-for="(img, index) in gallery"
              :key="index"
              :src="img"
              class="gallery-img"
              :alt="`Gallery image ${index + 1}`"
            />
          </div>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// replace these with your actual local images
import avatar from '@/assets/avatar.jpg'
import img1 from '@/assets/imageGalleryImage1.png'
import img2 from '@/assets/imageGalleryImage2.jpg'
import img3 from '@/assets/imageGalleryImage3.jpg'
import img4 from '@/assets/imageGalleryImage4.jpg'

const currentPage = ref('home')
const menuOpen = ref(false)

const gallery = [img1, img2, img3, img4]

const go = (page) => {
  currentPage.value = page
  menuOpen.value = false
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.profile-container {
  min-height: 100vh;
  background: radial-gradient(circle at 20% 20%, #0d0f1a, #000 80%);
  color: #fff;
  font-family: Inter, sans-serif;
}

/* NAVBAR */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: #111;
  z-index: 1000;
}

.nav-inner {
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-weight: bold;
  cursor: pointer;
}

.hamburger {
  display: none;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links li {
  cursor: pointer;
}

/* MOBILE NAV */
@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 64px;
    right: 0;
    background: #111;
    flex-direction: column;
    width: 200px;
    display: none;
  }

  .nav-links.open {
    display: flex;
  }
}

/* STAR FIELD */
.star-field {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
  z-index: -1;
  background: url('https://i.pinimg.com/originals/f5/42/b4/f542b451edfdd55a8bf3f0a1392ef9f6.jpg');
  opacity: 0.35;
  background-size: contain;
}

/* CONTENT */
.content {
  padding-top: 90px;
  display: flex;
  justify-content: center;
}

.profile-card {
  width: min(90%, 1000px);
  padding: 2rem;
  backdrop-filter: blur(14px);
}

/* ABOUT GRID */
.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

/* GALLERY GRID */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.gallery-img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-img:hover {
  transform: scale(1.05);
}

/* AVATAR */
.avatar {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  margin: 1rem auto;
  display: block;
}
</style>
