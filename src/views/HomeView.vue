<script setup>
import { ref, onMounted } from 'vue'

// 英雄区域数据
const heroData = {
  name: '金庆浩',
  title: '全栈开发',
  subtitle: '系统架构 · AI工程化 · 项目管理',
  description: '浙商银行 & 中国农业发展银行六年深耕，主导运营全国大集中、统一生物认证、信用卡管理、统一代发、总行查冻扣等十余个核心系统建设。精通Spring Cloud微服务架构、SpringAI大模型应用，同时具备Vue.js前端完整开发能力，形成"后端架构+AI工程+前端开发"的全栈技术栈。',
  highlights: [
    { number: '120万+', label: '日处理认证量' },
    { number: '10+', label: '核心系统建设' },
    { number: '23%', label: '研发效率提升' },
    { number: '6年+', label: '金融科技经验' }
  ]
}

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section id="hero" class="hero-section">
    <!-- 背景装饰 -->
    <div class="hero-bg">
      <div class="bg-grid"></div>
      <div class="bg-gradient"></div>
      <div class="bg-particles">
        <span v-for="i in 20" :key="i" class="particle" :style="{ '--i': i }"></span>
      </div>
    </div>

    <div class="hero-container">
      <div class="hero-content" :class="{ 'is-visible': isVisible }">
        <!-- 标签 -->
        <div class="hero-badge">
          <span class="badge-dot"></span>
          正在找工作
        </div>

        <!-- 姓名和职位 -->
        <h1 class="hero-name">{{ heroData.name }}</h1>
        <div class="hero-title-wrapper">
          <span class="hero-title">{{ heroData.title }}</span>
          <span class="hero-divider">|</span>
          <span class="hero-subtitle">{{ heroData.subtitle }}</span>
        </div>

        <!-- 简介 -->
        <p class="hero-description">{{ heroData.description }}</p>

        <!-- CTA按钮 -->
        <div class="hero-actions">
          <router-link to="/projects" class="btn btn-primary hero-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            查看项目作品
          </router-link>
          <router-link to="/contact" class="btn btn-outline hero-btn">
            联系我
          </router-link>
        </div>
      </div>

      <!-- 数据亮点 -->
      <div class="hero-highlights" :class="{ 'is-visible': isVisible }">
        <div
          v-for="(item, index) in heroData.highlights"
          :key="index"
          class="highlight-card"
          :style="{ '--delay': `${index * 0.1 + 0.3}s` }"
        >
          <span class="highlight-number">{{ item.number }}</span>
          <span class="highlight-label">{{ item.label }}</span>
        </div>
      </div>
    </div>

    <!-- 滚动提示 -->
    <div class="scroll-indicator">
      <span class="scroll-text">向下滚动</span>
      <div class="scroll-arrow">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  overflow: hidden;
  padding: 120px var(--container-padding) 80px;
}

/* 背景装饰 */
.hero-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.bg-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 50%, rgba(49, 130, 206, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(49, 130, 206, 0.2) 0%, transparent 40%);
}

.bg-particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  left: calc(var(--i) * 5%);
  top: calc(20% + calc(sin(var(--i)) * 20%));
  animation: float 6s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.3s);
}

@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
  50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
}

/* 主容器 */
.hero-container {
  position: relative;
  z-index: 1;
  max-width: var(--container-max);
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-3xl);
}

/* 内容区域 */
.hero-content {
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.hero-content.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* 标签 */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--radius-full);
  color: var(--color-accent-light);
  font-size: var(--text-sm);
  font-weight: 500;
  margin-bottom: var(--spacing-xl);
  backdrop-filter: blur(10px);
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-success);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

/* 姓名 */
.hero-name {
  font-size: var(--text-6xl);
  font-weight: 800;
  color: var(--color-white);
  letter-spacing: 4px;
  margin-bottom: var(--spacing-md);
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.hero-title-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
}

.hero-title {
  font-size: var(--text-2xl);
  color: var(--color-accent-light);
  font-weight: 600;
}

.hero-divider {
  color: rgba(255, 255, 255, 0.3);
}

.hero-subtitle {
  font-size: var(--text-xl);
  color: rgba(255, 255, 255, 0.8);
}

/* 简介 */
.hero-description {
  max-width: 600px;
  margin: 0 auto var(--spacing-2xl);
  font-size: var(--text-lg);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
}

/* 按钮组 */
.hero-actions {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
}

.hero-btn {
  padding: var(--spacing-md) var(--spacing-2xl);
  font-size: var(--text-base);
}

/* 数据亮点 */
.hero-highlights {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xl);
  width: 100%;
  max-width: 900px;
}

.highlight-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
  transition-delay: var(--delay);
}

.hero-highlights.is-visible .highlight-card {
  opacity: 1;
  transform: translateY(0);
}

.highlight-card:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-4px);
}

.highlight-number {
  display: block;
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--color-accent-light);
  margin-bottom: var(--spacing-xs);
}

.highlight-label {
  font-size: var(--text-sm);
  color: rgba(255, 255, 255, 0.7);
}

/* 滚动提示 */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  color: rgba(255, 255, 255, 0.5);
  animation: bounce 2s infinite;
}

.scroll-text {
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 2px;
}

.scroll-arrow {
  opacity: 0.5;
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(10px); }
}

/* Responsive */
@media (max-width: 768px) {
  .hero-name {
    font-size: var(--text-4xl);
    letter-spacing: 2px;
  }

  .hero-title {
    font-size: var(--text-xl);
  }

  .hero-description {
    font-size: var(--text-base);
  }

  .hero-highlights {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 280px;
  }

  .scroll-indicator {
    display: none;
  }
}
</style>
