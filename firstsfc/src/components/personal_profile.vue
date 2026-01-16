<template>
<head>
  <title>MyPage</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand nav-btn" data-page="home" href="#">Personal Profile</a>

    <ul class="navbar-nav ms-auto">
      <li class="nav-item">
        <a class="nav-link nav-btn" data-page="about" href="#">About Me</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-btn" data-page="gallery" href="#">Gallery</a>
      </li>
    </ul>
  </div>
</nav>


  <div class="star-field"></div>

  <div class="container d-flex justify-content-center align-items-center">
    <div class="profile-card text-center col-12 col-md-7 col-lg-5">
      <section id="home" class="page active">
          <h1>Welcome to my personal webpage!</h1>
      </br>
            <h2 class="fw-bold">Chase Ian</h2>
      <img
        class="avatar mb-4"
        src="avatar.jpg"
        alt="Avatar placeholder">
        <p>• Programmer • Game Developer</p>
        </section>

        <section id="about" class="page">
          
        <img
        class="avatar mb-4"
        src="avatar.jpg"
        alt="Avatar placeholder">

      <h2 class="fw-bold">Chase Ian</h2>
      <p class="mt-3">
        <strong>About Me</strong><br>
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

        <section id="gallery" class="page">
  <div class="container my-5">


      <h2 class="text-center mb-4">Image Gallery</h2>

      <div class="row g-3">

        <div class="col-6 col-md-4 col-lg-3">
          <img src="imageGalleryImage1.png" class="img-fluid gallery-img" alt="Gallery image 1">
        </div>

        <div class="col-6 col-md-4 col-lg-3">
          <img src="imageGalleryImage2.jpg" class="img-fluid gallery-img" alt="Gallery image 2">
        </div>

        <div class="col-6 col-md-4 col-lg-3">
          <img src="imageGalleryImage3.jpg" class="img-fluid gallery-img" alt="Gallery image 3">
        </div>

        <div class="col-6 col-md-4 col-lg-3">
          <img src="imageGalleryImage4.jpg" class="img-fluid gallery-img" alt="Gallery image 4">
        </div>

      </div>

  </div>
</section>
        

      


      
      

    </div>
  </div>
<script src="js/myScript.js"></script>
</body>
</template>
<script>
const buttons = document.querySelectorAll(".nav-btn");
  const pages = document.querySelectorAll(".page");

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const targetPage = button.getAttribute("data-page");

      pages.forEach(page => {
        page.classList.remove("active");
      });

      document.getElementById(targetPage).classList.add("active");
    });
  });
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
.social a {
color: #ffffff;
margin: 0 10px;
font-size: 1.5rem;
transition: 0.3s;
}
.social a:hover {
color: #9bbcff;
}

p {
color:#cdcdcd;
font-family: 'Roboto', sans-serif;
font-size: clamp(0.9rem, 2.5vw, 1rem);
}

h1 {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
}

h2 {
  font-size: clamp(1.3rem, 3vw, 1.8rem);
}

h3{
font-size: clamp(1.1rem, 2.5vw, 1.25rem);
}

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

@media (min-width: 992px) {
  .gallery-img:hover {
    transform: scale(1.1);
  }
}

.page {
  display: none;
  padding-top: 100px;
}

.page.active {
  display: block;
}
 
 
 
</style>