<script setup>
import { ref, onMounted } from 'vue'

// 职业经历数据
const experiences = ref([
  {
    id: 1,
    company: '中国农业发展银行',
    fullName: '中国农业发展银行总行金融科技中心',
    period: '2025.07 - 2025.12',
    position: '技术骨干 / 全栈开发',
    type: 'current',
    description: '作为运营全国大集中系统集中作业项目组技术骨干，负责集中作业核心模块信创改造与双活架构建设，保障系统高可用与系统平稳迁移。全栈参与前端Vue.js页面与后端微服务开发。',
    achievements: [
      '主导5类业务场景OCR识别模板开发',
      '业务自动化处理效率达100%',
      '完成核心数据库到国产数据库的平滑迁移',
      '牵头实施双活架构改造'
    ]
  },
  {
    id: 2,
    company: '浙商银行',
    fullName: '浙商银行总行金融科技部',
    period: '2019.07 - 2025.07',
    position: '全栈开发 / 项目经理',
    type: 'main',
    description: '六年深耕金融科技，从技术骨干成长为全栈开发与技术管理者。精通Spring Cloud微服务架构、SpringAI大模型应用，同时具备Vue.js前端完整开发能力，主导统一生物认证、信用卡管理、统一代发等核心系统建设。',
    achievements: [
      '主导10+核心系统从0到1建设',
      '培养技术经理5名，其中2人已独立负责项目',
      '日处理120万+认证需求',
      '研发交付效率提升23%'
    ]
  }
])

// 教育经历
const education = ref({
  school: '西安电子科技大学',
  degree: '硕士',
  major: '电子与通信工程',
  period: '2016.09 - 2019.06',
  gpa: '专业排名前10%',
  details: [
    '本科：电子科学与技术 学士'
  ]
})

// 成长轨迹数据
const milestones = ref([
  { year: '2019', event: '加入浙商银行', role: '技术骨干' },
  { year: '2020', event: '统一内管系统', role: '技术经理' },
  { year: '2021', event: '业务连续性系统', role: '项目经理' },
  { year: '2022', event: '查冻扣系统', role: '项目+技术经理' },
  { year: '2023', event: '信用卡+代发', role: '全栈开发' },
  { year: '2024', event: '统一生物认证', role: 'AI+全栈' },
  { year: '2025', event: '农发行大集中', role: '技术骨干' }
])

const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
        }
      })
    },
    { threshold: 0.1 }
  )

  const section = document.querySelector('#experience')
  if (section) observer.observe(section)
})
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="experience-container">
      <!-- 标题 -->
      <div class="section-header" :class="{ 'is-visible': isVisible }">
        <h2 class="section-title">职业经历</h2>
        <p class="section-subtitle">
          六年金融科技深耕，从技术骨干到全栈开发的成长之路
        </p>
      </div>

      <!-- 成长时间轴 -->
      <div class="timeline-section" :class="{ 'is-visible': isVisible }">
        <h3 class="timeline-title">成长轨迹</h3>
        <div class="timeline">
          <div
            v-for="(milestone, index) in milestones"
            :key="index"
            class="timeline-item"
            :style="{ '--delay': `${index * 0.1}s` }"
          >
            <div class="timeline-dot"></div>
            <div class="timeline-year">{{ milestone.year }}</div>
            <div class="timeline-content">
              <span class="timeline-event">{{ milestone.event }}</span>
              <span class="timeline-role">{{ milestone.role }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 工作经历 -->
      <div class="work-experience">
        <div
          v-for="(exp, index) in experiences"
          :key="exp.id"
          class="experience-card"
          :class="{ 'is-visible': isVisible, 'is-current': exp.type === 'current' }"
          :style="{ '--delay': `${(index + 3) * 0.15}s` }"
        >
          <!-- 时间标签 -->
          <div class="exp-period">
            <span class="period-badge" :class="exp.type">
              {{ exp.type === 'current' ? '当前' : '主要经历' }}
            </span>
            {{ exp.period }}
          </div>

          <!-- 公司信息 -->
          <div class="exp-header">
            <h3 class="exp-company">{{ exp.company }}</h3>
            <span class="exp-position">{{ exp.position }}</span>
          </div>

          <p class="exp-description">{{ exp.description }}</p>

          <!-- 成就列表 -->
          <ul class="exp-achievements">
            <li v-for="(achievement, i) in exp.achievements" :key="i">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
              </svg>
              {{ achievement }}
            </li>
          </ul>
        </div>
      </div>

      <!-- 教育背景 -->
      <div class="education-section" :class="{ 'is-visible': isVisible }">
        <h3 class="section-sub-title">教育背景</h3>
        <div class="education-grid">
          <!-- 硕士 -->
          <div class="education-card education-master">
            <div class="edu-degree-badge">硕士</div>
            <div class="edu-content">
              <h4 class="edu-school">{{ education.school }}</h4>
              <p class="edu-major">{{ education.major }}</p>
              <div class="edu-meta">
                <span class="edu-period">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {{ education.period }}
                </span>
              </div>
            </div>
          </div>

          <!-- 本科 -->
          <div class="education-card education-bachelor">
            <div class="edu-degree-badge">学士</div>
            <div class="edu-content">
              <h4 class="edu-school">{{ education.school }}</h4>
              <p class="edu-major">电子科学与技术</p>
              <div class="edu-meta">
                <span class="edu-period">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  2012.09 - 2016.06
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 证书认证 -->
        <div class="certifications">
          <h4 class="cert-title">证书认证</h4>
          <div class="cert-list">
            <span class="cert-tag">英语六级</span>
            <span class="cert-tag">PMP项目管理专业人士</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: var(--spacing-4xl) var(--container-padding);
  background: var(--bg-secondary);
  min-height: 100vh;
}

.experience-container {
  max-width: var(--container-max);
  margin: 0 auto;
}

/* 标题区域 */
.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.section-header.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: var(--text-4xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
  font-weight: 700;
}

[data-theme="dark"] .section-title {
  color: var(--color-gray-900);
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--color-gray-500);
}

[data-theme="dark"] .section-subtitle {
  color: var(--color-gray-500);
}

/* 成长时间轴 */
.timeline-section {
  margin-bottom: var(--spacing-3xl);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.timeline-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline-title {
  font-size: var(--text-xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
  text-align: center;
  font-weight: 700;
}

[data-theme="dark"] .timeline-title {
  color: var(--color-gray-900);
}

.timeline {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  padding: var(--spacing-xl) 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-gray-200);
  transform: translateY(-50%);
}

[data-theme="dark"] .timeline::before {
  background: var(--color-gray-300);
}

.timeline-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  flex: 1;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  background: var(--color-accent);
  border: 3px solid var(--color-white);
  border-radius: 50%;
  margin-bottom: var(--spacing-md);
  box-shadow: var(--shadow-md);
}

[data-theme="dark"] .timeline-dot {
  border-color: var(--bg-primary);
}

.timeline-year {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

[data-theme="dark"] .timeline-year {
  color: var(--color-accent-light);
}

.timeline-content {
  text-align: center;
}

.timeline-event {
  display: block;
  font-size: var(--text-sm);
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-xs);
}

[data-theme="dark"] .timeline-event {
  color: var(--color-gray-700);
}

.timeline-role {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: rgba(49, 130, 206, 0.1);
  color: var(--color-accent);
  font-size: var(--text-xs);
  font-weight: 500;
  border-radius: var(--radius-full);
}

[data-theme="dark"] .timeline-role {
  background: rgba(77, 166, 255, 0.15);
  color: var(--color-accent);
}

/* 工作经历卡片 */
.work-experience {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
}

.experience-card {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-md);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
  transition-delay: var(--delay);
  border: 1px solid transparent;
}

[data-theme="dark"] .experience-card {
  background: var(--bg-card);
  border-color: var(--color-gray-300);
}

.experience-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.experience-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.experience-card.is-current {
  border-left: 4px solid var(--color-accent);
}

.exp-period {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: var(--text-sm);
  color: var(--color-gray-500);
  margin-bottom: var(--spacing-md);
}

.period-badge {
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 600;
}

.period-badge.current {
  background: var(--color-accent);
  color: var(--color-white);
}

.period-badge.main {
  background: var(--color-gray-200);
  color: var(--color-gray-700);
}

[data-theme="dark"] .period-badge.main {
  background: var(--color-gray-100);
  color: var(--color-gray-800);
}

.exp-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.exp-company {
  font-size: var(--text-2xl);
  color: var(--color-primary);
  font-weight: 700;
}

[data-theme="dark"] .exp-company {
  color: var(--color-gray-900);
}

.exp-position {
  padding: var(--spacing-sm) var(--spacing-lg);
  background: rgba(49, 130, 206, 0.1);
  color: var(--color-accent);
  font-size: var(--text-sm);
  font-weight: 600;
  border-radius: var(--radius-full);
}

[data-theme="dark"] .exp-position {
  background: rgba(77, 166, 255, 0.15);
  color: var(--color-accent);
}

.exp-description {
  font-size: var(--text-base);
  color: var(--color-gray-600);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
}

[data-theme="dark"] .exp-description {
  color: var(--color-gray-700);
}

.exp-achievements {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
}

.exp-achievements li {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--text-sm);
  color: var(--color-gray-700);
}

[data-theme="dark"] .exp-achievements li {
  color: var(--color-gray-700);
}

.exp-achievements li svg {
  color: var(--color-success);
  flex-shrink: 0;
}

/* 教育背景 */
.education-section {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.education-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.section-sub-title {
  font-size: var(--text-xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
  text-align: center;
  font-weight: 700;
}

[data-theme="dark"] .section-sub-title {
  color: var(--color-gray-900);
}

/* 教育背景网格 */
.education-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.education-card {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  position: relative;
  transition: all var(--transition-normal);
  border: 1px solid transparent;
}

[data-theme="dark"] .education-card {
  background: var(--bg-card);
  border-color: var(--color-gray-300);
}

.education-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.edu-degree-badge {
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  padding: var(--spacing-xs) var(--spacing-md);
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
  color: var(--color-white);
  font-size: var(--text-xs);
  font-weight: 600;
  border-radius: var(--radius-full);
}

.edu-content {
  padding-right: var(--spacing-2xl);
}

.edu-school {
  font-size: var(--text-lg);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
  font-weight: 700;
}

[data-theme="dark"] .edu-school {
  color: var(--color-gray-900);
}

.edu-major {
  font-size: var(--text-base);
  color: var(--color-gray-600);
  margin: 0 0 var(--spacing-md) 0;
}

[data-theme="dark"] .edu-major {
  color: var(--color-gray-700);
}

.edu-meta {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.edu-period {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--text-sm);
  color: var(--color-gray-500);
}

[data-theme="dark"] .edu-period {
  color: var(--color-gray-500);
}

/* 证书认证 */
.certifications {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid transparent;
}

[data-theme="dark"] .certifications {
  background: var(--bg-card);
  border-color: var(--color-gray-300);
}

.cert-title {
  font-size: var(--text-base);
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-md);
  font-weight: 600;
}

[data-theme="dark"] .cert-title {
  color: var(--color-gray-700);
}

.cert-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.cert-tag {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-lg);
  background: rgba(49, 130, 206, 0.1);
  color: var(--color-accent);
  font-size: var(--text-sm);
  font-weight: 500;
  border-radius: var(--radius-full);
}

[data-theme="dark"] .cert-tag {
  background: rgba(77, 166, 255, 0.15);
  color: var(--color-accent);
}

.cert-tag::before {
  content: '';
  width: 6px;
  height: 6px;
  background: var(--color-accent);
  border-radius: 50%;
}

[data-theme="dark"] .cert-tag::before {
  background: var(--color-accent);
}

/* Responsive */
@media (max-width: 768px) {
  .timeline {
    flex-wrap: wrap;
    gap: var(--spacing-lg);
  }

  .timeline::before {
    display: none;
  }

  .timeline-item {
    flex: 0 0 calc(33.333% - var(--spacing-md));
  }

  .exp-achievements {
    grid-template-columns: 1fr;
  }

  .exp-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .education-grid {
    grid-template-columns: 1fr;
  }
}
</style>
