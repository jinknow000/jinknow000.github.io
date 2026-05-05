<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isDarkMode = ref(false)

const navItems = [
  { name: '首页', path: '/', section: 'hero' },
  { name: '技能', path: '/skills', section: 'skills' },
  { name: '项目', path: '/projects', section: 'projects' },
  { name: '经历', path: '/experience', section: 'experience' },
  { name: '联系', path: '/contact', section: 'contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const navigateTo = (path) => {
  router.push(path)
  isMobileMenuOpen.value = false
}

// 主题切换
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // 恢复主题设置
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    isDarkMode.value = true
    document.documentElement.setAttribute('data-theme', 'dark')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="nav-header" :class="{ 'nav-scrolled': isScrolled }">
    <div class="nav-container">
      <!-- Logo -->
      <router-link to="/" class="nav-logo">
        <span class="logo-text">JQH</span>
        <span class="logo-sub">全栈开发</span>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop">
        <ul class="nav-list">
          <li v-for="item in navItems" :key="item.path" class="nav-item">
            <router-link
              :to="item.path"
              class="nav-link"
              :class="{ 'nav-link-active': $route.path === item.path }"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Theme Toggle -->
      <button class="theme-toggle" @click="toggleTheme" :title="isDarkMode ? '切换亮色模式' : '切换暗色模式'">
        <!-- Sun icon (shown in dark mode) -->
        <svg v-if="isDarkMode" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
        <!-- Moon icon (shown in light mode) -->
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </button>

      <!-- Mobile Menu Toggle -->
      <button
        class="nav-mobile-toggle"
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        :class="{ 'is-active': isMobileMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-down">
      <nav v-if="isMobileMenuOpen" class="nav-mobile">
        <ul class="nav-mobile-list">
          <li v-for="item in navItems" :key="item.path" class="nav-mobile-item">
            <button @click="navigateTo(item.path)" class="nav-mobile-link">
              {{ item.name }}
            </button>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  transition: all var(--transition-normal);
}

/* 首页透明背景时使用白色文字 */
.nav-header:not(.nav-scrolled) .logo-text,
.nav-header:not(.nav-scrolled) .logo-sub,
.nav-header:not(.nav-scrolled) .nav-link {
  color: #ffffff;
}

.nav-header:not(.nav-scrolled) .nav-mobile-toggle span {
  background: #ffffff;
}

.nav-header.nav-scrolled {
  background: var(--color-white);
  box-shadow: var(--shadow-md);
}

[data-theme="dark"] .nav-header.nav-scrolled {
  background: var(--bg-primary);
  border-bottom: 1px solid var(--color-gray-300);
}

.nav-container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: var(--spacing-md) var(--container-padding);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.nav-logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
}

.logo-text {
  font-size: var(--text-2xl);
  font-weight: 800;
  color: var(--color-primary);
  letter-spacing: 2px;
}

.nav-header:not(.nav-scrolled) .logo-text {
  color: #ffffff;
}

[data-theme="dark"] .logo-text {
  color: var(--color-accent-light);
}

.nav-header:not(.nav-scrolled) .logo-text {
  color: #ffffff;
}

.logo-sub {
  font-size: var(--text-sm);
  color: var(--color-accent);
  font-weight: 500;
}

.nav-header:not(.nav-scrolled) .logo-sub {
  color: rgba(255, 255, 255, 0.8);
}

[data-theme="dark"] .logo-sub {
  color: var(--color-accent-light);
}

/* Desktop Navigation */
.nav-desktop {
  display: flex;
}

.nav-list {
  display: flex;
  gap: var(--spacing-xl);
  list-style: none;
}

.nav-link {
  position: relative;
  padding: var(--spacing-sm) 0;
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--color-gray-700);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.nav-link:hover,
.nav-link.nav-link-active {
  color: var(--color-accent);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width var(--transition-fast);
}

.nav-link:hover::after,
.nav-link.nav-link-active::after {
  width: 100%;
}

/* Theme Toggle */
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--color-gray-600);
  transition: all var(--transition-fast);
}

.theme-toggle:hover {
  background: var(--color-gray-100);
  color: var(--color-accent);
  border-color: var(--color-accent);
}

[data-theme="dark"] .theme-toggle {
  border-color: var(--color-gray-600);
  color: var(--color-gray-300);
}

[data-theme="dark"] .theme-toggle:hover {
  background: var(--color-gray-700);
  color: var(--color-accent-light);
  border-color: var(--color-accent-light);
}

/* Mobile Toggle */
.nav-mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.nav-mobile-toggle span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-primary);
  border-radius: 1px;
  transition: all var(--transition-fast);
}

.nav-mobile-toggle.is-active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.nav-mobile-toggle.is-active span:nth-child(2) {
  opacity: 0;
}

.nav-mobile-toggle.is-active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Navigation */
.nav-mobile {
  background: var(--color-white);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-lg);
}

[data-theme="dark"] .nav-mobile {
  background: var(--bg-card);
  border-top: 1px solid var(--color-gray-300);
}

.nav-mobile-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.nav-mobile-link {
  display: block;
  width: 100%;
  padding: var(--spacing-md);
  font-size: var(--text-lg);
  font-weight: 500;
  color: var(--color-gray-700);
  background: none;
  border: none;
  border-radius: var(--radius-md);
  text-align: left;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.nav-mobile-link:hover {
  background: var(--color-gray-100);
  color: var(--color-accent);
}

[data-theme="dark"] .nav-mobile-link {
  color: var(--color-gray-700);
}

[data-theme="dark"] .nav-mobile-link:hover {
  background: var(--color-gray-700);
  color: var(--color-accent-light);
}

/* Slide Down Animation */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all var(--transition-normal);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }

  .nav-mobile-toggle {
    display: flex;
  }
}
</style>
