<template>
    <header class="header">
      <div class="logo">
        <!-- <img src="@/assets/acme-logo.png" alt="ACME Logo" /> -->
      </div>
      <nav class="navbar">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <router-link to="/">test</router-link>
        <router-link to="/about">test</router-link>
        <a href="#products">Products & Solutions</a>
        <a href="#services">Industries Served</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #2a2a2a;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.logo img {
  height: 50px;
}

.navbar {
  display: flex;
  gap: 15px;
}

.navbar a {
  color: #f5f5f5;
  text-decoration: none;
  font-size: 14px;
}

.navbar a:hover {
  color: #00bcd4;
}

/* 響應式設定 */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 10px;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>

  