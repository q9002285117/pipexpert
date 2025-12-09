<template>
  <div class="about-page">
    <section class="intro-section">
      <h2>{{$t('TITLE_ABOUT')}}</h2>
      <p class="intro-text">
        {{$t('ABOUT_DESC_1')}}
      </p>
      <h3>{{$t('ABOUT_PRODUCT_1')}}</h3>
      <h3>{{$t('ABOUT_PRODUCT_2')}}</h3>
      <h3>{{$t('ABOUT_PRODUCT_3')}}</h3>
      <h3>{{$t('ABOUT_PRODUCT_4')}}</h3>
      <h3>{{$t('ABOUT_PRODUCT_5')}}</h3>
      <h3>{{$t('ABOUT_PRODUCT_6')}}</h3>
      <p class="intro-text">
        {{$t('ABOUT_DESC_2')}}
      </p>
      <p class="intro-text">
        {{$t('ABOUT_DESC_3')}}
      </p>
      <h3>
        {{$t('ABOUT_DESC_4')}}
      </h3>
      <p class="intro-text">
        {{$t('ABOUT_DESC_5')}}
      </p>
      <h3>
        {{$t('ABOUT_DESC_6')}}
      </h3>
      <p class="intro-text">
        {{$t('ABOUT_DESC_7')}}
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timelineData:[],
      
    };
  },
  watch: {
    '$i18n.locale': {
      immediate: true, // 初始語言設置
      handler() {
        this.loadTime();
      },
    },
  },
  methods: {
    loadTime(){
      this.timelineData = [
        { year: "2012", content: this.$t('ABOUT_TIME_1') },
        { year: "2019", content: this.$t('ABOUT_TIME_2') },
        { year: "2020", content: this.$t('ABOUT_TIME_3') },
        { year: "2021", content: this.$t('ABOUT_TIME_4') },
        { year: "2022", content: this.$t('ABOUT_TIME_5') },
        { year: "2023", content: this.$t('ABOUT_TIME_6') },
      ];
    }
  },
  created() {
    this.loadTime(); // 初始加載
  },
};
</script>

<style scoped>
/* 全局样式 */
.about-page {
  position: relative;
  font-family: "Roboto", sans-serif;
  color: white;
  padding: 50px 20px;
}

/* 标题样式 */
h2 {
  font-size: 36px;
  color: #00bcd4;
  text-align: center;
  margin-bottom: 40px;
}

/* 引言部分 */
.intro-section {
  text-align: center;
}

.intro-text {
  max-width: 800px;
  margin: 20px auto;
  font-size: 18px;
  color: #ccc;
  line-height: 1.6;
}

/* 时间轴部分样式 */
.timeline-section {
  margin-top: 50px;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  border-left: 4px solid #00bcd4; /* 左侧蓝色主线 */
  padding-left: 20px;
}

/* 每个时间节点 */
.timeline-item {
  position: relative;
  margin-bottom: 50px;
}

/* 时间点的圆形标记 */
.timeline-dot {
  position: absolute;
  top: 0;
  left: -36px;
  width: 20px;
  height: 20px;
  background: #00bcd4;
  border: 4px solid white;
  border-radius: 50%;
}

/* 时间节点内容 */
.timeline-content {
  margin-left: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.timeline-content h3 {
  font-size: 20px;
  color: #00bcd4;
  margin-bottom: 10px;
}

.timeline-content p {
  font-size: 16px;
  color: #ccc;
  line-height: 1.5;
}
/* 調整圖片的樣式 */
.video-container img {
  width: 100%; /* 設定圖片寬度為100%，讓圖片跟容器寬度一致 */
  height: auto; /* 自動調整高度以保持圖片比例 */
  max-width: 800px; /* 限制圖片的最大寬度，避免在大螢幕上過於寬大 */
  display: block; /* 確保圖片作為區塊元素居中 */
  margin: 0 auto; /* 將圖片在容器中水平居中 */
}

/* 響應式設計 */
@media (max-width: 768px) {
  h2 {
    font-size: 28px;
  }

  .intro-text {
    font-size: 16px;
  }

  .timeline-content {
    padding: 15px;
  }

  .timeline-content h3 {
    font-size: 18px;
  }

  .timeline-content p {
    font-size: 14px;
  }

  .timeline {
    padding-left: 15px;
  }
  
  .timeline-dot {
    left: -29px;
    width: 16px;
    height: 16px;
  }

  .video-container img {
    max-width: 100%; /* 在小螢幕上取消最大寬度限制 */
  }
}

@media (max-width: 480px) {
  h2 {
    font-size: 24px;
  }

  .intro-text {
    font-size: 14px;
  }

  .timeline-content {
    padding: 10px;
  }

  .timeline-content h3 {
    font-size: 16px;
  }

  .timeline-content p {
    font-size: 12px;
  }

  .timeline-dot {
    left: -30px;
    width: 16px;
    height: 16px;
  }
  .video-container img {
    max-width: 100%; /* 同樣保持適應小螢幕 */
  }
}

</style>
