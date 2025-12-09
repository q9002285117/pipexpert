<template>
    <section class="features">
      <div class="feature">
        <h2>Custom Solutions</h2>
        <p>Tailored thermal solutions for specific industry needs.</p>
      </div>
      <div class="feature">
        <h2>Innovative Technologies</h2>
        <p>Utilizing the latest advancements in thermal design.</p>
      </div>
      <div class="feature">
        <h2>Global Support</h2>
        <p>Providing reliable service across the globe.</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
.features {
  display: flex;
  justify-content: space-around;
  padding: 50px;
  background-color: #2a2a2a;
}

.feature {
  max-width: 300px;
  text-align: center;
}

.feature h2 {
  color: #00bcd4;
  margin-bottom: 10px;
}

.feature p {
  color: #ccc;
}

/* 響應式設定 */
@media (max-width: 768px) {
  .features {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>

  