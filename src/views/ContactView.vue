<script setup>
import { ref, reactive, onMounted } from 'vue'

// 联系信息
const contactInfo = {
  email: 'jinqinghao000@163.com',
  phone: '156 9197 0036',
  location: '陕西西安',
  availability: '目前处于求职阶段，欢迎联系我'
}

// 社交链接
const socialLinks = [
  {
    name: '邮箱',
    value: 'jinqinghao000@163.com',
    href: 'mailto:jinqinghao000@163.com',
    icon: 'mail'
  },
  {
    name: '手机',
    value: '156 9197 0036',
    href: 'tel:15691970036',
    icon: 'phone'
  }
]

// 表单数据
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// 表单状态
const formStatus = ref('idle') // idle, submitting, success, error
const formMessage = ref('')

// 提交表单
const submitForm = async () => {
  if (!form.name || !form.email || !form.message) {
    formStatus.value = 'error'
    formMessage.value = '请填写必填项'
    return
  }

  formStatus.value = 'submitting'

  // 模拟提交
  setTimeout(() => {
    formStatus.value = 'success'
    formMessage.value = '消息已发送！我会尽快回复你。'
    // 重置表单
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }, 1500)
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

  const section = document.querySelector('#contact')
  if (section) observer.observe(section)
})
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      <!-- 标题 -->
      <div class="section-header" :class="{ 'is-visible': isVisible }">
        <h2 class="section-title">联系我</h2>
        <p class="section-subtitle">
          如果你有Java架构设计、AI落地或项目管理问题，欢迎交流
        </p>
      </div>

      <div class="contact-content">
        <!-- 联系信息 -->
        <div class="contact-info" :class="{ 'is-visible': isVisible }">
          <div class="info-card">
            <h3 class="info-title">联系方式</h3>

            <div class="info-list">
              <a
                v-for="link in socialLinks"
                :key="link.name"
                :href="link.href"
                class="info-item"
              >
                <div class="info-icon">
                  <svg v-if="link.icon === 'mail'" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <span class="info-label">{{ link.name }}</span>
                  <span class="info-value">{{ link.value }}</span>
                </div>
              </a>

              <div class="info-item">
                <div class="info-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="info-content">
                  <span class="info-label">位置</span>
                  <span class="info-value">{{ contactInfo.location }}</span>
                </div>
              </div>
            </div>

            <!-- 状态标签 -->
            <div class="availability">
              <span class="availability-dot"></span>
              {{ contactInfo.availability }}
            </div>
          </div>

          <!-- 期待合作 -->
          <div class="collab-card">
            <h3 class="collab-title">期待合作方向</h3>
            <ul class="collab-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                Java架构设计与技术选型
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                AI大模型应用落地
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                金融科技项目咨询
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20,6 9,17 4,12"/>
                </svg>
                技术团队管理与建设
              </li>
            </ul>
          </div>
        </div>

        <!-- 联系表单 -->
        <div class="contact-form-wrapper" :class="{ 'is-visible': isVisible }">
          <form class="contact-form" @submit.prevent="submitForm">
            <h3 class="form-title">发送消息</h3>

            <div class="form-group">
              <label for="name">姓名 <span class="required">*</span></label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="你的姓名"
                :disabled="formStatus === 'submitting'"
              />
            </div>

            <div class="form-group">
              <label for="email">邮箱 <span class="required">*</span></label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="your@email.com"
                :disabled="formStatus === 'submitting'"
              />
            </div>

            <div class="form-group">
              <label for="subject">主题</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                placeholder="消息主题"
                :disabled="formStatus === 'submitting'"
              />
            </div>

            <div class="form-group">
              <label for="message">消息 <span class="required">*</span></label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="请输入你想说的话..."
                :disabled="formStatus === 'submitting'"
              ></textarea>
            </div>

            <!-- 状态消息 -->
            <div v-if="formMessage" class="form-message" :class="formStatus">
              {{ formMessage }}
            </div>

            <button
              type="submit"
              class="submit-btn"
              :disabled="formStatus === 'submitting'"
            >
              <span v-if="formStatus === 'submitting'" class="loading-spinner"></span>
              <span v-else>发送消息</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: var(--spacing-4xl) var(--container-padding);
  background: var(--color-primary);
  min-height: 100vh;
}

.contact-container {
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
  color: var(--color-white);
  margin-bottom: var(--spacing-md);
  font-weight: 700;
}

.section-subtitle {
  font-size: var(--text-lg);
  color: rgba(255, 255, 255, 0.7);
}

/* 内容区域 */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
}

/* 联系信息 */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.6s ease-out;
  transition-delay: 0.2s;
}

.contact-info.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.info-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
}

.info-title {
  font-size: var(--text-xl);
  color: var(--color-white);
  margin-bottom: var(--spacing-xl);
  font-weight: 700;
}

.info-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.info-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  text-decoration: none;
  transition: transform var(--transition-fast);
  color: inherit;
}

a.info-item:hover {
  transform: translateX(4px);
}

.info-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-accent-light);
  flex-shrink: 0;
}

.info-content {
  display: flex;
  flex-direction: column;
}

.info-label {
  font-size: var(--text-xs);
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.info-value {
  font-size: var(--text-base);
  color: var(--color-white);
  font-weight: 500;
}

.availability {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background: rgba(56, 161, 105, 0.1);
  border: 1px solid rgba(56, 161, 105, 0.3);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  color: var(--color-success);
}

.availability-dot {
  width: 8px;
  height: 8px;
  background: var(--color-success);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* 合作方向 */
.collab-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
}

.collab-title {
  font-size: var(--text-xl);
  color: var(--color-white);
  margin-bottom: var(--spacing-xl);
  font-weight: 700;
}

.collab-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.collab-list li {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--text-base);
  color: rgba(255, 255, 255, 0.8);
}

.collab-list li svg {
  color: var(--color-accent-light);
  flex-shrink: 0;
}

/* 联系表单 */
.contact-form-wrapper {
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.6s ease-out;
  transition-delay: 0.3s;
}

.contact-form-wrapper.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.contact-form {
  background: var(--color-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
}

[data-theme="dark"] .contact-form {
  background: var(--bg-card);
  border: 1px solid var(--color-gray-300);
}

.form-title {
  font-size: var(--text-xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
  font-weight: 700;
}

[data-theme="dark"] .form-title {
  color: var(--color-gray-900);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-group label {
  display: block;
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-gray-700);
  margin-bottom: var(--spacing-sm);
}

[data-theme="dark"] .form-group label {
  color: var(--color-gray-700);
}

.required {
  color: var(--color-error);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: var(--spacing-md);
  font-size: var(--text-base);
  font-family: inherit;
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-md);
  background: var(--color-white);
  color: var(--color-gray-800);
  transition: all var(--transition-fast);
}

[data-theme="dark"] .form-group input,
[data-theme="dark"] .form-group textarea {
  background: var(--color-gray-100);
  border-color: var(--color-gray-300);
  color: var(--color-gray-900);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
}

.form-group input:disabled,
.form-group textarea:disabled {
  background: var(--color-gray-100);
  cursor: not-allowed;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-message {
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  margin-bottom: var(--spacing-lg);
}

.form-message.success {
  background: rgba(56, 161, 105, 0.1);
  color: var(--color-success);
  border: 1px solid rgba(56, 161, 105, 0.3);
}

.form-message.error {
  background: rgba(229, 62, 62, 0.1);
  color: var(--color-error);
  border: 1px solid rgba(229, 62, 62, 0.3);
}

.submit-btn {
  width: 100%;
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-white);
  background: var(--color-accent);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.submit-btn:hover:not(:disabled) {
  background: var(--color-accent-dark);
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: var(--color-white);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Responsive */
@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}
</style>
