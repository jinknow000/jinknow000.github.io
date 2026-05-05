<script setup>
import { ref, onMounted } from 'vue'

// 项目数据
const projects = ref([
  {
    id: 1,
    name: '运营全国大集中系统建设',
    period: '2025.07 - 2025.12',
    role: '技术骨干',
    company: '中国农业发展银行',
    description: '主导全国大集中系统集中作业模块的开发与优化工作，完成5类业务场景OCR识别模板开发，业务自动化处理效率达100%。',
    tags: ['Spring Cloud', 'OCR', '分布式架构', '信创改造'],
    highlights: {
      challenge: '全国大集中系统对接联调复杂，核心数据库需平滑迁移至国产数据库',
      action: '牵头技术架构设计，完成双活架构改造',
      result: '系统高可用性提升，保障系统平稳迁移'
    }
  },
  {
    id: 2,
    name: '统一生物认证系统建设',
    period: '2024.11 - 2025.06',
    role: '项目经理 / 技术经理 / 架构师',
    company: '浙商银行',
    description: '主导全行级统一生物认证系统从0到1的设计与建设，实现多业务系统生物特征"一次采集、全域复用"。',
    tags: ['人脸识别', 'Spring AI', 'MCP智能体', 'AWS S3'],
    highlights: {
      challenge: '日均处理120万+认证需求，需保障毫秒级高精度身份核验',
      action: '深度集成公安联网核查系统，优化人脸比对算法与缓存策略',
      result: '认证效率达100%，覆盖行内98%业务场景'
    }
  },
  {
    id: 3,
    name: '信用卡管理系统建设',
    period: '2023.04 - 2024.10',
    role: '技术经理 / 架构师',
    company: '浙商银行',
    description: '主导信用卡移动端获客相关功能的整体方案设计与核心模块开发，把控项目进度、交付质量与上线节奏。',
    tags: ['Vue.js', 'DevOps', '持续集成', '微服务'],
    highlights: {
      challenge: '需快速响应业务获客目标，缩短迭代周期',
      action: '搭建DevOps持续集成与部署流程，推动团队研发规范标准化',
      result: '研发交付效率提升23%，迭代周期从5周缩短至2周'
    }
  },
  {
    id: 4,
    name: '统一代发系统建设',
    period: '2023.08 - 2024.03',
    role: '技术经理 / 架构师',
    company: '浙商银行',
    description: '针对行内代发业务代码杂乱、服务耦合度高的核心痛点，主导核心业务系统从0到1的架构设计与功能落地。',
    tags: ['Dubbo', '微服务', 'ECIF', '风控系统'],
    highlights: {
      challenge: '代发业务涉及多渠道对接，资金安全要求极高',
      action: '设计超时重试机制，结合本地消息表实现代发金额零损失',
      result: '行内系统接入率达86%，业务运维效率提升35%'
    }
  },
  {
    id: 5,
    name: '总行查冻扣系统建设',
    period: '2022.04 - 2023.07',
    role: '项目经理 / 技术经理 / 架构师',
    company: '浙商银行',
    description: '身兼项目经理与技术经理双重职责，主导行内查冻扣类系统项目全流程建设，核心对接全国司法部门。',
    tags: ['Dubbo', 'ESB', '服务化改造', '司法查控'],
    highlights: {
      challenge: '需对接多个系统，整合多类业务系统，实现全量账户司法查控全覆盖',
      action: '牵头技术架构设计，对行内各相关系统进行服务化改造',
      result: '司法查控效率提升20%，降低人工操作成本20人月'
    }
  },
  {
    id: 6,
    name: '总行公积金系统建设',
    period: '2022.07 - 2023.07',
    role: '项目经理 / 技术经理',
    company: '浙商银行',
    description: '负责总行公积金系统建设，实现与银行核心系统互联互通，涵盖账户信息校验、公积金提取等核心业务功能。',
    tags: ['资金清算', '批量处理', '总分机构对接'],
    highlights: {
      challenge: '公积金业务逻辑复杂，涉及资金清算流程',
      action: '精通公积金业务逻辑，确保系统稳定对接',
      result: '支撑全行公积金业务规模化开展'
    }
  },
  {
    id: 7,
    name: '业务连续性管理系统建设',
    period: '2021.07 - 2022.04',
    role: '项目经理 / 架构师',
    company: '浙商银行',
    description: '作为项目经理，负责业务连续性管理系统的整体迭代建设与落地推进，实现系统从0到1的建设与上线应用。',
    tags: ['风险管控', '系统高可用', '0到1建设'],
    highlights: {
      challenge: '需对接58家分支行及总行各部门，统一全行级业务连续性管控',
      action: '统筹系统对接与推广，构建全行级业务连续性管控体系',
      result: '业务连续性响应时间从3小时缩短至10分钟'
    }
  },
  {
    id: 8,
    name: '统一内部管理系统建设',
    period: '2020.04 - 2021.07',
    role: '技术经理',
    company: '浙商银行',
    description: '主导统一内部管理系统的迭代优化，整合基础模块、应用注册、微前端、基座工程、统一网关等核心模块。',
    tags: ['微前端', '基座工程', '权限体系', '公共服务组件'],
    highlights: {
      challenge: '行内内管类业务需求零散，重复开发成本高',
      action: '整合核心模块，构建标准化内管业务支撑平台',
      result: '系统纳入行内四五规划，累计对接20余个应用，日活量达1000+'
    }
  },
  {
    id: 9,
    name: 'E家银福利平台系统建设',
    period: '2019.07 - 2020.03',
    role: '技术骨干',
    company: '浙商银行',
    description: '参与E家银福利平台迭代建设与功能研发，负责可用福利查询、福利分配等核心业务功能的设计与开发。',
    tags: ['Dubbo分布式服务', 'SVN版本管控', '福利平台'],
    highlights: {
      challenge: '需要通过Dubbo分布式服务支撑小程序与管理端业务',
      action: '独立完成业务接口开发、版本管控、联调测试及投产上线全流程',
      result: '累计参与项目迭代十余次，功能稳定交付与业务正常开展'
    }
  }
])

// 筛选状态
const activeFilter = ref('all')
const filters = [
  { id: 'all', label: '全部项目' },
  { id: 'architect', label: '架构设计' },
  { id: 'management', label: '项目管理' },
  { id: 'ai', label: 'AI应用' }
]

// 展开状态
const expandedProject = ref(null)

const toggleExpand = (id) => {
  expandedProject.value = expandedProject.value === id ? null : id
}

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

  const section = document.querySelector('#projects')
  if (section) observer.observe(section)
})
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="projects-container">
      <!-- 标题 -->
      <div class="section-header" :class="{ 'is-visible': isVisible }">
        <h2 class="section-title">项目作品集</h2>
        <p class="section-subtitle">
          从系统架构到技术攻坚，用量化成果说话
        </p>
      </div>

      <!-- 项目卡片 -->
      <div class="projects-grid">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="project-card"
          :class="{ 'is-visible': isVisible, 'is-expanded': expandedProject === project.id }"
          :style="{ '--delay': `${index * 0.1}s` }"
          @click="toggleExpand(project.id)"
        >
          <!-- 项目头部 -->
          <div class="project-header">
            <div class="project-meta">
              <span class="project-period">{{ project.period }}</span>
              <span class="project-company">{{ project.company }}</span>
            </div>
            <h3 class="project-name">{{ project.name }}</h3>
            <div class="project-role">{{ project.role }}</div>
          </div>

          <!-- 项目描述 -->
          <p class="project-description">{{ project.description }}</p>

          <!-- 技术标签 -->
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">
              {{ tag }}
            </span>
          </div>

          <!-- 展开详情 -->
          <transition name="expand">
            <div v-if="expandedProject === project.id" class="project-details">
              <div class="detail-divider"></div>

              <div class="detail-item">
                <div class="detail-icon challenge">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                </div>
                <div class="detail-content">
                  <span class="detail-label">挑战</span>
                  <p class="detail-text">{{ project.highlights.challenge }}</p>
                </div>
              </div>

              <div class="detail-item">
                <div class="detail-icon action">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                </div>
                <div class="detail-content">
                  <span class="detail-label">行动</span>
                  <p class="detail-text">{{ project.highlights.action }}</p>
                </div>
              </div>

              <div class="detail-item">
                <div class="detail-icon result">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div class="detail-content">
                  <span class="detail-label">结果</span>
                  <p class="detail-text">{{ project.highlights.result }}</p>
                </div>
              </div>
            </div>
          </transition>

          <!-- 展开提示 -->
          <div class="expand-hint">
            <span>{{ expandedProject === project.id ? '收起详情' : '点击查看详情' }}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              :class="{ 'is-rotated': expandedProject === project.id }"
            >
              <polyline points="6,9 12,15 18,9"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: var(--spacing-4xl) var(--container-padding);
  background: var(--bg-primary);
  min-height: 100vh;
}

.projects-container {
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

/* 项目网格 */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
}

/* 项目卡片 */
.project-card {
  background: var(--bg-card);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  cursor: pointer;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
  transition-delay: var(--delay);
}

[data-theme="dark"] .project-card {
  background: var(--bg-card);
  border-color: var(--color-gray-300);
}

.project-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-accent);
}

.project-card.is-expanded {
  grid-column: span 2;
}

/* 项目头部 */
.project-header {
  margin-bottom: var(--spacing-lg);
}

.project-meta {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  font-size: var(--text-sm);
}

.project-period {
  color: var(--color-accent);
  font-weight: 500;
}

.project-company {
  color: var(--color-gray-500);
}

[data-theme="dark"] .project-company {
  color: var(--color-gray-500);
}

.project-name {
  font-size: var(--text-xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
  font-weight: 700;
}

[data-theme="dark"] .project-name {
  color: var(--color-gray-900);
}

.project-role {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-md);
  background: rgba(49, 130, 206, 0.1);
  color: var(--color-accent);
  font-size: var(--text-sm);
  font-weight: 500;
  border-radius: var(--radius-full);
}

[data-theme="dark"] .project-role {
  background: rgba(77, 166, 255, 0.15);
  color: var(--color-accent);
}

/* 项目描述 */
.project-description {
  font-size: var(--text-base);
  color: var(--color-gray-600);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
}

[data-theme="dark"] .project-description {
  color: var(--color-gray-700);
}

/* 技术标签 */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.tag {
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--color-gray-100);
  color: var(--color-gray-700);
  font-size: var(--text-xs);
  font-weight: 500;
  border-radius: var(--radius-full);
  transition: all var(--transition-fast);
}

[data-theme="dark"] .tag {
  background: var(--color-gray-100);
  color: var(--color-gray-700);
}

/* 展开详情 */
.project-details {
  margin-top: var(--spacing-lg);
}

.detail-divider {
  height: 1px;
  background: var(--color-gray-200);
  margin-bottom: var(--spacing-lg);
}

[data-theme="dark"] .detail-divider {
  background: var(--color-gray-300);
}

.detail-item {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.detail-item:last-child {
  margin-bottom: 0;
}

.detail-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  flex-shrink: 0;
}

.detail-icon.challenge {
  background: #fef3c7;
  color: #d97706;
}

.detail-icon.action {
  background: #dbeafe;
  color: #2563eb;
}

.detail-icon.result {
  background: #d1fae5;
  color: #059669;
}

.detail-content {
  flex: 1;
}

.detail-label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-xs);
}

[data-theme="dark"] .detail-label {
  color: var(--color-gray-700);
}

.detail-text {
  font-size: var(--text-sm);
  color: var(--color-gray-600);
  line-height: 1.6;
  margin: 0;
}

[data-theme="dark"] .detail-text {
  color: var(--color-gray-700);
}

/* 展开提示 */
.expand-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-xs);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-gray-100);
  margin-top: var(--spacing-md);
  font-size: var(--text-sm);
  color: var(--color-gray-400);
}

[data-theme="dark"] .expand-hint {
  border-top-color: var(--color-gray-300);
  color: var(--color-gray-400);
}

.expand-hint svg {
  transition: transform var(--transition-fast);
}

.expand-hint svg.is-rotated {
  transform: rotate(180deg);
}

/* 展开动画 */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
  margin-top: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 500px;
}

/* Responsive */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card.is-expanded {
    grid-column: span 1;
  }

  .project-card {
    padding: var(--spacing-xl);
  }
}
</style>
