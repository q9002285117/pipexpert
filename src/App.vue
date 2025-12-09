<template>
  <div id="app">
  <!-- 全局導航欄 -->
  <header class="header">
    <nav class="nav-container">
      <div class="logo">
        <router-link to="/">
          <!-- <img style="height: 40px;" src="@/assets/acme-logo.png" alt="ACME Logo" /> -->
        </router-link>
      </div>

      <div v-if="!isMobileView || isSidebarOpen" class="nav-links">
        <router-link
          v-for="route in filteredRoutes"
          :key="route.name"
          :to="route.path"
          class="nav-link"
          @click="isSidebarOpen = false"
        >
          {{ $t(route.name) }}
        </router-link>
        <!-- 地球圖標語言切換 -->
        <div class="language-switcher">
          <button @click="toggleLanguageMenu" class="language-button">
            <img src="@/assets/language.png" alt="Language" />
          </button>
          <ul v-if="languageMenuOpen" class="language-menu">
            <li @click="switchLanguage('en')">English</li>
            <li @click="switchLanguage('zh')">中文</li>
          </ul>
        </div>
      </div>

      <div v-if="isMobileView" style="display: flex;">
        <!-- 漢堡菜單按鈕 -->
        <button class="hamburger-menu" @click="toggleSidebar">
            ☰
        </button>
        <!-- 地球圖標語言切換 -->
        <div class="language-switcher" style="display: flex;">
            <button @click="toggleLanguageMenu" class="language-button">
              <img src="@/assets/language.png" alt="Language" />
            </button>
            <ul v-if="languageMenuOpen" class="language-menu">
              <li @click="switchLanguage('en')">English</li>
              <li @click="switchLanguage('zh')">中文</li>
            </ul>
          </div>
      </div>
    </nav>
    <!-- 側邊欄（小螢幕） -->
    <aside v-if="isMobileView && isSidebarOpen" class="sidebar">
        <ul>
          <router-link to="/">
           <!-- <img @click="toggleSidebar" style="height: 40px;" src="@/assets/acme-logo.png" alt="ACME Logo" /> -->
          </router-link>
          <li v-for="route in filteredRoutes" :key="route.name">
            <router-link :to="route.path" @click="toggleSidebar" class="nav-link">
              {{ $t(route.name) }}
            </router-link>
          </li>
        </ul>
      </aside>
  </header>
  <!-- 主內容區域 -->
  <main class="main-content">
    <div class="background-overlay"></div> <!-- 背景圖片 -->
    <router-view />
  </main>
  <!-- 全局頁腳 -->
  <footer class="footer">
    <!-- <p>© 2024 ACME Thermal Solutions. All rights reserved.</p> -->
  </footer>
</div>

</template>

<script>
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      languageMenuOpen: false, // 控制語言選單是否顯示
      isSidebarOpen: false,
      isMobileView: window.innerWidth <= 768,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    toggleLanguageMenu() {
      this.languageMenuOpen = !this.languageMenuOpen;
      this.isSidebarOpen = false;
    },
    switchLanguage(locale) {
      this.$i18n.locale = locale;
      this.languageMenuOpen = false;
    },
    handleResize() {
      this.isMobileView = window.innerWidth <= 768;
      if (!this.isMobileView) {
        this.isSidebarOpen = false;
      }
    },
  },
  setup() {
    const router = useRouter();
    const filteredRoutes = router.options.routes.filter(
      (route) => route.name && route.path !== "*"
    );

    return {
      filteredRoutes,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
};

</script>

<style>
/* 全局樣式 */
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  background-color: #1a1a1a;
  color: white;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 頂部導航欄樣式 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #2a2a2a;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.logo {
  flex-shrink: 0;
}

.nav-links {
  display: flex;
  gap: 15px;
}

.nav-link {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
}

.nav-link:hover {
  color: #00bcd4;
}

.nav-link.router-link-active {
  color: #00bcd4;
  border-bottom: 2px solid #00bcd4;
}

/* 主內容區域樣式 */
.main-content {
  flex: 1;
  position: relative;
  margin-top: 20px;
}

/* 背景圖片樣式 */
.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("@/assets/hero-image.png") no-repeat center center;
  background-size: cover;
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
}

/* 頁腳樣式 */
.footer {
  text-align: center;
  background-color: #2a2a2a;
  padding: 10px;
  font-size: 14px;
  color: #777;
}
.language-switcher {
  position: relative;
}

.language-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}

.language-button img {
  width: 24px; /* 地球圖標大小 */
  height: 24px;
}

.language-menu {
  position: absolute;
  top: 30px;
  right: 0;
  background: #2a2a2a;
  border: 1px solid #ccc;
  border-radius: 5px;
  list-style: none;
  margin: 0;
  padding: 5px 0;
  width: 100px;
  text-align: center;
  z-index: 1000;
}

.language-menu li {
  padding: 8px 12px;
  cursor: pointer;
  color: white;
}

.language-menu li:hover {
  background: #00bcd4;
  color: white;
}

/* 漢堡菜單按鈕 */
.hamburger-menu {
  background: none;
  border: none;
  font-size: 24px;
  color: white;
  cursor: pointer;
  display: none; /* 默認隱藏，響應式時顯示 */
}

@media (max-width: 768px) {
  .nav-links {
    display: none; /* 隱藏選單 */
  }
  .hamburger-menu {
    display: block;
  }
}

/* 側邊欄樣式 */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: #2a2a2a;
  z-index: 1000;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 20px;
}

</style>
