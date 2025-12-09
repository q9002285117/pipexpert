<template>
    <section class="hero">
      <div class="hero-content">
        <h1>Revolutionizing Thermal Technology</h1>
        <p>Discover cutting-edge cooling solutions for modern industries.</p>
        <button class="cta-button">Learn More</button>
      </div>
      <div class="hero-image">
        <img src="@/assets/thermal-module.png" alt="Thermal Module" />
      </div>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
<style scoped>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  background: url("@/assets/background.png") no-repeat center center;
  background-size: cover;
  color: #fff;
  text-align: center;
}

.hero-content {
  max-width: 50%;
}

.hero h1 {
  font-size: 48px;
  color: #00bcd4;
}

.hero p {
  font-size: 18px;
  color: #ccc;
}

.cta-button {
  background-color: #00bcd4;
  border: none;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.cta-button:hover {
  background-color: #007b9e;
}

.hero-image img {
  max-width: 100%;
  height: auto;
}

/* 響應式設定 */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
  }

  .cta-button {
    width: 100%;
  }
}
</style>

  