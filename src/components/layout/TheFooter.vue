<script setup>
const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'linkedin'
  },
  {
    name: '邮箱',
    url: 'mailto:jinqinghao000@163.com',
    icon: 'email'
  }
]
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <!-- 个人信息 -->
        <div class="footer-info">
          <h3 class="footer-name">金庆浩</h3>
          <p class="footer-title">全栈开发</p>
          <p class="footer-desc">
            专注于系统架构设计与项目管理，用技术赋能业务价值
          </p>
        </div>

        <!-- 联系方式 -->
        <div class="footer-contact">
          <h4 class="footer-heading">联系方式</h4>
          <ul class="footer-list">
            <li>
              <span class="contact-label">邮箱</span>
              <a href="mailto:jinqinghao000@163.com" class="contact-value">
                jinqinghao000@163.com
              </a>
            </li>
            <li>
              <span class="contact-label">手机</span>
              <a href="tel:15691970036" class="contact-value">
                156 9197 0036
              </a>
            </li>
            <li>
              <span class="contact-label">位置</span>
              <span class="contact-value">陕西西安</span>
            </li>
          </ul>
        </div>

        <!-- 快速链接 -->
        <div class="footer-links">
          <h4 class="footer-heading">快速链接</h4>
          <ul class="footer-list">
            <li><router-link to="/">首页</router-link></li>
            <li><router-link to="/skills">核心技能</router-link></li>
            <li><router-link to="/projects">项目作品</router-link></li>
            <li><router-link to="/experience">职业经历</router-link></li>
            <li><router-link to="/contact">联系我</router-link></li>
          </ul>
        </div>

        <!-- 社交媒体 -->
        <div class="footer-social">
          <h4 class="footer-heading">社交媒体</h4>
          <div class="social-links">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              :title="link.name"
              class="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg v-if="link.icon === 'github'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <svg v-else-if="link.icon === 'linkedin'" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- 底部版权 -->
      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ currentYear }} 金庆浩. Al rights reserved.
        </p>
        <p class="built-with">
          Built with Vue.js & Vite
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-primary);
  color: var(--color-gray-300);
  padding: var(--spacing-4xl) 0 var(--spacing-xl);
}

.footer-container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-padding);
}

.footer-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: var(--spacing-2xl);
  padding-bottom: var(--spacing-2xl);
  border-bottom: 1px solid var(--color-gray-600);
}

[data-theme="dark"] .footer-content {
  border-bottom-color: var(--color-gray-300);
}

/* 个人信息 */
.footer-info {
  max-width: 280px;
}

.footer-name {
  font-size: var(--text-2xl);
  color: var(--color-white);
  margin-bottom: var(--spacing-sm);
  font-weight: 700;
}

.footer-title {
  font-size: var(--text-base);
  color: var(--color-accent-light);
  margin-bottom: var(--spacing-md);
}

[data-theme="dark"] .footer-title {
  color: var(--color-accent-light);
}

.footer-desc {
  font-size: var(--text-sm);
  line-height: 1.7;
  margin-bottom: 0;
  color: var(--color-gray-300);
}

/* 通用标题 */
.footer-heading {
  font-size: var(--text-lg);
  color: var(--color-white);
  margin-bottom: var(--spacing-lg);
  font-weight: 600;
}

/* 列表 */
.footer-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.footer-list li {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.footer-list a {
  color: var(--color-gray-300);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-list a:hover {
  color: var(--color-accent-light);
}

.contact-label {
  font-size: var(--text-xs);
  color: var(--color-gray-500);
  text-transform: uppercase;
  letter-spacing: 1px;
}

[data-theme="dark"] .contact-label {
  color: var(--color-gray-400);
}

.contact-value {
  color: var(--color-gray-300);
}

/* 社交链接 */
.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--color-gray-700);
  border-radius: var(--radius-md);
  color: var(--color-gray-300);
  transition: all var(--transition-fast);
}

[data-theme="dark"] .social-link {
  background: var(--color-gray-700);
  color: var(--color-gray-300);
}

.social-link:hover {
  background: var(--color-accent);
  color: var(--color-white);
  transform: translateY(-3px);
}

/* 底部版权 */
.footer-bottom {
  padding-top: var(--spacing-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  font-size: var(--text-sm);
  margin: 0;
  color: var(--color-gray-300);
}

.built-with {
  font-size: var(--text-sm);
  color: var(--color-gray-500);
  margin: 0;
}

[data-theme="dark"] .built-with {
  color: var(--color-gray-400);
}

/* Responsive */
@media (max-width: 968px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-info {
    max-width: none;
  }

  .social-links {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
</style>
