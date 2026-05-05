<script setup>
import { ref, onMounted } from 'vue'

// 技能分类数据
const skillCategories = ref([
  {
    id: 'backend',
    title: '后端架构',
    icon: 'server',
    skills: [
      { name: 'Java / Spring Cloud', level: 95 },
      { name: '微服务架构', level: 92 },
      { name: '数据库设计', level: 88 },
      { name: 'Redis / 缓存', level: 85 }
    ]
  },
  {
    id: 'ai',
    title: 'AI与工程化',
    icon: 'cpu',
    skills: [
      { name: 'SpringAI / LangChain4j', level: 85 },
      { name: 'MCP智能体应用', level: 82 },
      { name: 'AI编程工具', level: 88 },
      { name: 'DevOps / CI/CD', level: 85 }
    ]
  },
  {
    id: 'management',
    title: '项目管理',
    icon: 'users',
    skills: [
      { name: 'PMP认证', level: 90 },
      { name: '团队建设', level: 85 },
      { name: '需求分析', level: 92 },
      { name: '技术方案设计', level: 90 }
    ]
  },
  {
    id: 'frontend',
    title: '前端技术',
    icon: 'layout',
    skills: [
      { name: 'Vue.js', level: 80 },
      { name: 'Element UI', level: 82 },
      { name: 'HTML5 / CSS3', level: 75 },
      { name: '小程序开发', level: 70 }
    ]
  }
])

// 工具栈
const tools = ref([
  { name: 'Git', category: '版本控制' },
  { name: 'SVN', category: '版本控制' },
  { name: 'Jenkins', category: 'CI/CD' },
  { name: 'Docker', category: '容器化' },
  { name: 'MySQL', category: '数据库' },
  { name: 'DB2', category: '数据库' },
  { name: 'GoldenDB', category: '数据库' },
  { name: 'Nginx', category: '服务器' },
  { name: 'Keepalived', category: '高可用' },
  { name: 'Dubbo', category: 'RPC框架' },
  { name: 'Apolo', category: '配置中心' },
  { name: 'Nacos', category: '服务发现' }
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

  const section = document.querySelector('#skills')
  if (section) observer.observe(section)
})
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="skills-container">
      <!-- 标题 -->
      <div class="section-header" :class="{ 'is-visible': isVisible }">
        <h2 class="section-title">核心技能</h2>
        <p class="section-subtitle">
          精通 Spring Cloud 微服务架构、Spring AI 大模型应用与 Vue.js 前端开发，形成完整全栈技术栈
        </p>
      </div>

      <!-- 技能卡片 -->
      <div class="skills-grid">
        <div
          v-for="(category, index) in skillCategories"
          :key="category.id"
          class="skill-card"
          :class="{ 'is-visible': isVisible }"
          :style="{ '--delay': `${index * 0.15}s` }"
        >
          <!-- 图标 -->
          <div class="skill-icon">
            <svg v-if="category.icon === 'server'" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
              <line x1="6" y1="6" x2="6.01" y2="6"/>
              <line x1="6" y1="18" x2="6.01" y2="18"/>
            </svg>
            <svg v-else-if="category.icon === 'cpu'" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
              <rect x="9" y="9" width="6" height="6"/>
              <line x1="9" y1="1" x2="9" y2="4"/>
              <line x1="15" y1="1" x2="15" y2="4"/>
              <line x1="9" y1="20" x2="9" y2="23"/>
              <line x1="15" y1="20" x2="15" y2="23"/>
              <line x1="20" y1="9" x2="23" y2="9"/>
              <line x1="20" y1="14" x2="23" y2="14"/>
              <line x1="1" y1="9" x2="4" y2="9"/>
              <line x1="1" y1="14" x2="4" y2="14"/>
            </svg>
            <svg v-else-if="category.icon === 'users'" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <svg v-else width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <line x1="3" y1="9" x2="21" y2="9"/>
              <line x1="9" y1="21" x2="9" y2="9"/>
            </svg>
          </div>

          <h3 class="skill-title">{{ category.title }}</h3>

          <!-- 技能列表 -->
          <div class="skill-list">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="skill-item"
            >
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percent">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-progress"
                  :style="{ width: isVisible ? `${skill.level}%` : '0%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 工具栈 -->
      <div class="tools-section" :class="{ 'is-visible': isVisible }">
        <h3 class="tools-title">技术工具栈</h3>
        <div class="tools-grid">
          <div
            v-for="tool in tools"
            :key="tool.name"
            class="tool-tag"
          >
            <span class="tool-name">{{ tool.name }}</span>
            <span class="tool-category">{{ tool.category }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  padding: var(--spacing-4xl) var(--container-padding);
  background: var(--bg-secondary);
  min-height: 100vh;
}

.skills-container {
  max-width: var(--container-max);
  margin: 0 auto;
}

/* 标题区域 */
.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3x);
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
}

[data-theme="dark"] .section-title {
  color: var(--color-accent-light);
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--color-gray-500);
  max-width: 500px;
  margin: 0 auto;
}

[data-theme="dark"] .section-subtitle {
  color: var(--color-gray-500);
}

/* 技能网格 */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-3xl);
}

/* 技能卡片 */
.skill-card {
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

[data-theme="dark"] .skill-card {
  background: var(--bg-card);
  border-color: var(--color-gray-300);
}

.skill-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.skill-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%);
  border-radius: var(--radius-lg);
  color: var(--color-white);
  margin-bottom: var(--spacing-lg);
}

.skill-title {
  font-size: var(--text-xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
  font-weight: 700;
}

[data-theme="dark"] .skill-title {
  color: var(--color-gray-900);
}

/* 技能列表 */
.skill-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skill-name {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-gray-700);
}

[data-theme="dark"] .skill-name {
  color: var(--color-gray-700);
}

.skill-percent {
  font-size: var(--text-xs);
  color: var(--color-accent);
  font-weight: 600;
}

[data-theme="dark"] .skill-percent {
  color: var(--color-accent-light);
}

.skill-bar {
  height: 6px;
  background: var(--color-gray-200);
  border-radius: var(--radius-full);
  overflow: hidden;
}

[data-theme="dark"] .skill-bar {
  background: var(--color-gray-400);
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent) 0%, var(--color-primary) 100%);
  border-radius: var(--radius-full);
  transition: width 1s ease-out;
  transition-delay: 0.3s;
}

/* 工具栈 */
.tools-section {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-md);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
  transition-delay: 0.6s;
  border: 1px solid transparent;
}

[data-theme="dark"] .tools-section {
  background: var(--bg-card);
  border-color: var(--color-gray-300);
}

.tools-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.tools-title {
  font-size: var(--text-xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
  text-align: center;
  font-weight: 700;
}

[data-theme="dark"] .tools-title {
  color: var(--color-gray-900);
}

.tools-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  justify-content: center;
}

.tool-tag {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--color-gray-100);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

[data-theme="dark"] .tool-tag {
  background: var(--color-gray-100);
  border-color: var(--color-gray-400);
}

.tool-tag:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

.tool-tag:hover .tool-name,
.tool-tag:hover .tool-category {
  color: var(--color-white);
}

.tool-name {
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-gray-800);
  transition: color var(--transition-fast);
}

[data-theme="dark"] .tool-name {
  color: var(--color-gray-800);
}

.tool-category {
  font-size: var(--text-xs);
  color: var(--color-gray-500);
  transition: color var(--transition-fast);
}

[data-theme="dark"] .tool-category {
  color: var(--color-gray-500);
}

/* Responsive */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }

  .skill-card {
    padding: var(--spacing-xl);
  }
}
</style>
