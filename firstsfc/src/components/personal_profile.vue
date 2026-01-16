<template>
  <div>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
          @click.prevent="currentPage = 'home'"
        >
          Personal Profile
        </a>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="currentPage = 'about'"
            >
              About Me
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              @click.prevent="currentPage = 'gallery'"
            >
              Gallery
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- BACKGROUND -->
    <div class="star-field"></div>

    <!-- CONTENT -->
    <div class="container d-flex justify-content-center align-items-center">
      <div class="profile-card text-center col-12 col-md-7 col-lg-5">

        <!-- HOME -->
        <section v-show="currentPage === 'home'" class="page">
          <h1>Welcome to my personal webpage!</h1>
          <br />
          <h2 class="fw-bold">Chase Ian</h2>

          <img
            class="avatar mb-4"
            :src="avatar"
            alt="Avatar"
          />

          <p>• Programmer • Game Developer</p>
        </section>

        <!-- ABOUT -->
        <section v-show="currentPage === 'about'" class="page">
          <img
            class="avatar mb-4"
            :src="avatar"
            alt="Avatar"
          />

          <h2 class="fw-bold">Chase Ian</h2>

          <p class="mt-3">
            <strong>About Me</strong><br />
            Good day! My name is Chase from IT241.
          </p>

          <div class="container mt-5">
            <div class="row">
              <div class="col-sm-4">
                <h3>Education / Achievements</h3>
                <p>Asia Pacific College (on-going)</p>
              </div>

              <div class="col-sm-4">
                <h3>Course</h3>
                <p>Bachelor of Information Technology (on-going)</p>
              </div>

              <div class="col-sm-4">
                <h3>IT Experience</h3>
                <p>GitHub, game development, programming in Lua and Python</p>
              </div>
            </div>

            <div class="row mt-4">
              <div class="col-sm-6">
                <h3>Hobbies / Interests</h3>
                <p>Gaming and gala with friends</p>
              </div>

              <div class="col-sm-6">
                <h3>Goals in Life / Dream</h3>
                <p>Develop a successful game</p>
              </div>
            </div>
          </div>
        </section>

        <!-- GALLERY -->
        <section v-show="currentPage === 'gallery'" class="page">
          <div class="container my-5">
            <h2 class="text-center mb-4">Image Gallery</h2>

            <div class="row g-3">
              <div
                v-for="(img, index) in gallery"
                :key="index"
                class="col-6 col-md-4 col-lg-3"
              >
                <img
                  :src="img"
                  class="img-fluid gallery-img"
                  :alt="`Gallery image ${index + 1}`"
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import avatar from '@/assets/avatar.jpg'
import img1 from '@/assets/imageGalleryImage1.png'
import img2 from '@/assets/imageGalleryImage2.jpg'
import img3 from '@/assets/imageGalleryImage3.jpg'
import img4 from '@/assets/imageGalleryImage4.jpg'

const currentPage = ref('home')

const gallery = [img1, img2, img3, img4]
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background: radial-gradient(circle at 20% 20%, #0d0f1a, #000000 80%);
  color: #ffffff;
  font-family: "Inter", sans-serif;
  min-height: 100vh;
}

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

.profile-card {
  width: min(90%, 1200px);
  min-height: 70vh;
  padding: clamp(32px, 5vw, 64px);
  backdrop-filter: blur(14px);
}

.avatar {
  width: clamp(100px, 25vw, 140px);
  height: clamp(100px, 25vw, 140px);
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255,255,255,0.3);
  box-shadow: 0 0 15px rgba(255,255,255,0.25);
}

p {
  color: #cdcdcd;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
}

h1 { font-size: clamp(1.6rem, 4vw, 2.2rem); }
h2 { font-size: clamp(1.3rem, 3vw, 1.8rem); }
h3 { font-size: clamp(1.1rem, 2.5vw, 1.25rem); }

.gallery-img {
  width: clamp(180px, 22vw, 360px);
  aspect-ratio: 1 / 1;
  object-fit: cover;
  display: block;
  margin: auto;
  transition: transform 0.3s ease;
}

.gallery-img:hover {
  transform: scale(1.08);
  box-shadow: 0 0 20px rgba(255,255,255,0.25);
}

.page {
  padding-top: 100px;
}
</style>
