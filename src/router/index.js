/**
 * 路由配置文件
 * 金庆浩个人网站 - 单页应用路由
 */
import { createRouter, createWebHistory } from 'vue-router'

// 导入各板块视图组件
import HomeView from '../views/HomeView.vue'
import SkillsView from '../views/SkillsView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: '首页 - 金庆浩', section: 'hero' }
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView,
    meta: { title: '核心技能 - 金庆浩', section: 'skills' }
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    meta: { title: '项目作品集 - 金庆浩', section: 'projects' }
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView,
    meta: { title: '职业经历 - 金庆浩', section: 'experience' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { title: '联系我 - 金庆浩', section: 'contact' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（浏览器前进/后退）
    if (savedPosition) {
      return savedPosition
    }
    // 如果有hash，跳转到对应区块
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    // 否则滚动到顶部
    return { top: 0, behavior: 'smooth' }
  }
})

// 路由守卫 - 更新页面标题
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '金庆浩 - 全栈开发'
  next()
})

export default router
