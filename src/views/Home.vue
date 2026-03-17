<template>
  <div class="home">
    <!-- 主英雄區域 -->
    <section class="hero">
      <div class="hero-content">
        <!-- <img src="@/assets/acme-logo.png"> -->
        <p>Mastering the Heat.</p>
        <p>Engineering the Future of Thermal Solutions.</p>
      </div>
    </section>

    <!-- 產品展示區域 -->
    <section class="product-carousel">
      <Carousel  :itemsToScroll="1" class="carousel-container" :breakpoints="breakpoints">
        <Slide v-for="(product, index) in products" :key="index" class="slide">
          <router-link to="/product">
            <div class="product">
            <img :src="product.image" :alt="product.name" />
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
          </div>
          </router-link>
          
        </Slide>
      </Carousel>
    </section>
    
    <!-- 核心優勢 -->
    <section class="main-content">
      <div class="feature">
        <h2>{{$t('ADVANTAGE_TITLE_1')}}</h2>
        <p>{{$t('ADVANTAGE_DESC_1')}}</p>
      </div>
      <div class="feature">
        <h2>{{$t('ADVANTAGE_TITLE_2')}}</h2>
        <p>{{$t('ADVANTAGE_DESC_2')}}</p>
      </div>
      <div class="feature">
        <h2>{{$t('ADVANTAGE_TITLE_3')}}</h2>
        <p>{{$t('ADVANTAGE_DESC_3')}}</p>
      </div>
      <div class="feature">
        <h2>{{$t('ADVANTAGE_TITLE_4')}}</h2>
        <p>{{$t('ADVANTAGE_DESC_4')}}</p>
      </div>
    </section>

    
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      products:[],
      breakpoints: {
        1024: { itemsToShow: 3 }, // 在寬度 >= 1024px 時顯示 3 個項目
        768: { itemsToShow: 2 },  // 在寬度 >= 768px 時顯示 2 個項目
        480: { itemsToShow: 1 },  // 在寬度 >= 480px 時顯示 1 個項目
      },
    };
  },
  watch: {
    '$i18n.locale': {
      immediate: true, // 初始語言設置
      handler() {
        this.loadProducts();
      },
    },
  },
  methods: {
    loadProducts(){
      this.products = [
        {
          name: this.$t('PRODUCT_TITLE_1'),
          image: require("@/assets/cost.png"),
          description: this.$t('PRODUCT_DESC_1'),
        },
        {
          name: this.$t('PRODUCT_TITLE_2'),
          image: require("@/assets/net.png"),
          description: this.$t('PRODUCT_DESC_2'),
        },
        {
          name: this.$t('PRODUCT_TITLE_3'),
          image: require("@/assets/water.png"),
          description: this.$t('PRODUCT_DESC_3'),
        },
        {
          name: this.$t('PRODUCT_TITLE_4'),
          image: require("@/assets/other.png"),
          description: this.$t('PRODUCT_DESC_4'),
        },
      ];
    }
  },
    created() {
    this.loadProducts(); // 初始加載產品資料
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 20px 0px;
  width: 100%;
}

.hero img {
  max-width: 100%; /* 確保圖片寬度不超過容器 */
  height: 300px; /* 確保圖片比例正確 */
}

.hero-content {
  margin-top: 50px;
}

.hero-content h1 {
  font-size: 3rem;
  color: #00bcd4;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.2rem;
  color: #ccc;
  margin-bottom: 30px;
}

/* 核心優勢區域 */
.main-content {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.feature {
  background: #333;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  max-width: 300px;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.5);
}

.feature h2 {
  color: #00bcd4;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.feature p {
  font-size: 1rem;
  color: #ccc;
}

/* 產品輪播區域 */
.product-carousel {
  text-align: center;
  padding: 20px;
  background: #1a1a1a;
}

.product-carousel h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #00bcd4;
}

.carousel-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 10px;
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.product {
  text-align: center;
  max-width: 300px;
  color: white;
  padding: 20px;
  margin: 20px;
  background: #60656f;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.product h3 {
  color: #00bcd4;
  margin: 15px 0 10px;
}

.product p {
  font-size: 14px;
  color: #ccc;
}

.product:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.5);
}

/* 響應式設計 */
@media screen and (max-width: 768px) {
  .hero img {
    max-width: 80%;
    height: 200px; /* 確保圖片比例正確 */
  }

  .hero-content h1 {
    font-size: 2rem;
  }

  .hero-content p {
    font-size: 1rem;
  }

  .product-carousel h2 {
    font-size: 1.5rem;
  }

  .product {
    max-width: 90%;
  }

  .feature {
    max-width: 90%;
  }
}

@media screen and (max-width: 480px) {
  .hero img {
    max-width: 60%; /* 在小裝置上進一步縮小圖片寬度 */
    height: 100px; /* 確保圖片比例正確 */
  }

  .hero-content h1 {
    font-size: 1.8rem;
  }

  .hero-content p {
    font-size: 0.9rem;
  }

  .product-carousel h2 {
    font-size: 1.2rem;
  }

  .product {
    padding: 15px;
    margin: 10px;
  }

  .feature {
    padding: 15px;
    margin: 10px;
  }
}

</style>
