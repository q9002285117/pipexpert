<template>
  <div class="product-page">
    <!-- 頁面標題 -->
    <section class="hero">
      <h1>{{$t('TITLE_PRODUCT')}}</h1>
      <p>{{$t('PRODUCT_DESC')}}</p>
    </section>

    <!-- 產品展示 -->
    <section class="products-section">
      <div
        class="product-card"
        v-for="(product, index) in products"
        :key="index"
      >
        <img :src="product.image" :alt="product.name" class="product-image" />
        <h3 class="product-title">{{ product.name }}</h3>
        <p class="product-description">{{ product.description }}</p>
        <button class="cta-button" @click="showDetails(index)">
          Learn More
        </button>
      </div>
    </section>

    <!-- 展開的詳細內容區域 -->
    <section ref="detailsSection" v-if="activeProduct !== null" class="details-section">
      <h2>{{ products[activeProduct].name }}</h2>
      <p>{{ products[activeProduct].description }}</p>
      <div
        style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px;"
        v-for="(product, index) in products[activeProduct].details"
        :key="index"
      >
        <div class="details-images" style="flex: 1; max-width: 40%;">
          <img
            :key="index"
            :src="product.image"
            style="width: 100%; height: auto; object-fit: contain;"
          />
        </div>
        <div class="details-text" style="flex: 1; max-width: 60%;">
          <h3>{{ product.feature }}</h3>
          <p>
            {{ product.specification }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeProduct: null,
      products:[],
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
          description: this.$t('PRODUCT_DESC_1'),
          image:require("@/assets/cost.png"),
          details: [
          {
            image: require("@/assets/cost1.png"),
            feature:this.$t('PRODUCT_COST_1'),
            specification:
            this.$t('PRODUCT_COST_2'),
          },
          ],
        },
        {
          name: this.$t('PRODUCT_TITLE_2'),
          description: this.$t('PRODUCT_DESC_2'),
          image: require("@/assets/net.png"),
          details: [
            {
              image: require("@/assets/net1.png"),
              feature:this.$t('PRODUCT_PIPE_1'),
              specification:
              this.$t('PRODUCT_PIPE_2'),
            }
          ],
        },
        {
          name: this.$t('PRODUCT_TITLE_3'),
          description: this.$t('PRODUCT_DESC_3'),
          image: require("@/assets/water.png"),
          details: [
          {
            image: require("@/assets/water1.png"),
            feature:this.$t('PRODUCT_THERMAL_1'),
            specification:
              this.$t('PRODUCT_THERMAL_2'),
          }
          ],
        },
        {
          name: this.$t('PRODUCT_TITLE_4'),
          description: this.$t('PRODUCT_DESC_4'),
          image: require("@/assets/other.png"),
          details: [
          {
            image: require("@/assets/other1.png"),
            feature:this.$t('PRODUCT_WATER_1'),
            specification:
              this.$t('PRODUCT_WATER_2'),
          },
          ],
        },
      ];
    },
    showDetails(index) {
      this.activeProduct = index;

      // 滾動到詳細內容區域
      this.$nextTick(() => {
        const detailsSection = this.$refs.detailsSection;
        if (detailsSection) {
          detailsSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
  },
  created() {
    this.loadProducts(); // 初始加載產品資料
  },
};
</script>

<style scoped>
/* 全局樣式 */
.product-page {
  position: relative;
  font-family: "Roboto", sans-serif;
  color: white;
  padding: 20px;
}

/* Hero 橫幅區域 */
.hero {
  text-align: center;
  padding: 50px 20px;
  /* background: url("@/assets/banner-products.jpg") no-repeat center center; */
  background-size: cover;
  color: white;
}
.hero h1 {
  font-size: 48px;
  margin-bottom: 10px;
  color: #00bcd4;
}

.hero p {
  font-size: 18px;
  color: #ccc;
}

/* 產品展示區域 */
.products-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 50px 0;
}

.product-card {
  background: rgba(51, 51, 51, 0.8);
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  max-width: 300px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
}

.product-card:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
}

.product-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
}

.product-title {
  font-size: 20px;
  color: #00bcd4;
  margin-bottom: 10px;
}

.product-description {
  font-size: 14px;
  color: #ccc;
  margin-bottom: 20px;
}

.cta-button {
  background-color: #00bcd4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.cta-button:hover {
  background-color: #007b9e;
}

/* 詳細內容區域 */
.details-section {
  justify-content: center;
  margin-top: 50px;
  background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  scroll-margin-top: 100px; /* 解決固定導航欄可能擋住的情況 */
}

.details-section h2 {
  font-size: 24px;
  color: #00bcd4;
  margin-bottom: 15px;
}

.details-images {
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px;
  margin-bottom: 20px;
}

.details-text h3 {
  font-size: 20px;
  color: #00bcd4;
  margin-bottom: 10px;
}

.details-text ul {
  list-style: none;
  padding: 0;
}

.details-text li {
  color: #ccc;
  font-size: 14px;
  line-height: 1.8;
}
</style>