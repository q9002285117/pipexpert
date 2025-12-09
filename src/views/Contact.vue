<template>
  <div class="contact-us">
    <!-- 标题区域 -->
    <section class="hero">
      <div class="hero-content">
        <h1>{{$t('TITLE_CONTACT')}}</h1>
        <p>{{$t('CONTACT_DESC')}}</p>
      </div>
    </section>

    <!-- 地址信息（顶部） -->
    <section class="address-info">
      <div class="info-card address-card">
        <h3>📍 {{$t('CONTACT_LOCATION')}}</h3>
        <p>
          {{$t('CONTACT_LOCATION_DESC')}}
        </p>
        <p>
          {{$t('CONTACT_LOCATION_DESC_1')}}
        </p>
        <p>
          {{$t('CONTACT_LOCATION_DESC_2')}}
        </p>
        <p>
          {{$t('CONTACT_LOCATION_DESC_3')}}
        </p>
        <!-- Google地图嵌入 -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.989700017585!2d121.45438647469429!3d25.068338236909234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a899e28d18c9%3A0xd521196da017efe8!2zMjQ45paw5YyX5biC5LqU6IKh5Y2A5LqU5bel5LqM6LevMTA36JmfNQ!5e0!3m2!1szh-TW!2stw!4v1765279360461!5m2!1szh-TW!2stw"
          class="google-map"
          allowfullscreen=""
          loading="lazy">
        </iframe>
      </div>
    </section>

    <!-- 其他联系信息（下方） -->
    <section class="contact-info">
      <div class="info-card">
        <h3>📞 {{$t('CONTACT_PHONE')}}</h3>
        <p>02-22982388</p>
      </div>
    </section>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
/* 页面布局 */
/* 页面布局 */
.contact-us {
  position: relative;
  text-align: center;
  padding: 20px;
}

/* Hero 区域 */
.hero {
  background-size: cover;
  color: white;
  padding: 80px 20px;
}

.hero-content h1 {
  font-size: 36px; /* 默認大小 */
  margin-bottom: 20px;
  color: #00bcd4;
}

.hero-content p {
  font-size: 18px;
  color: #ccc;
}

/* 地址信息样式 */
.address-info {
  margin-bottom: 30px;
}

.address-card {
  width: 100%;
  max-width: 100%; /* 寬度調整為100% */
  margin: 0 auto;
  padding: 20px;
  background: rgba(51, 51, 51, 0.8);
  border-radius: 10px;
  color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  text-align: left;
}

.address-card h3 {
  color: #00bcd4;
  margin-bottom: 10px;
}

.google-map {
  margin-top: 15px;
  border-radius: 10px;
  width: 100%;
  height: 300px; /* 高度為響應式 */
  border: none;
}

/* 联系信息样式 */
.contact-info {
  display: flex;
  flex-wrap: wrap; /* 啟用換行 */
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.info-card {
  background: rgba(255, 255, 255, 0.1); /* 半透明背景 */
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 500px; /* 設置最大寬度 */
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card h3 {
  color: #00bcd4;
  margin-bottom: 10px;
}

.info-card p {
  color: #ccc;
  font-size: 14px;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.5);
}

/* Email 链接样式 */
.email-link {
  color: #00bcd4;
  text-decoration: none;
  font-weight: bold;
}

.email-link:hover {
  text-decoration: underline;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 28px; /* 小屏幕標題縮小 */
  }

  .hero-content p {
    font-size: 16px;
  }

  .google-map {
    height: 200px; /* 小屏幕調整地圖高度 */
  }

  .info-card {
    max-width: 80%; /*小屏幕全寬顯示*/
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 24px; /* 更小屏幕標題縮小 */
  }

  .hero-content p {
    font-size: 14px;
  }

  .google-map {
    height: 150px; /* 更小屏幕調整地圖高度 */
  }
}

</style>
