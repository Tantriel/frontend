import { createRouter, createWebHistory } from 'vue-router';
import mainPro from './components/mainPro.vue'; 
import formPro from './components/formPro.vue'; 
import CoursesComp from './components/CoursesComp.vue';
import teachers from './components/teachersPro.vue'; 
import CourseDetails from './components/CourseDetails.vue';

const routes = [
  { path: '/', component: mainPro, },
  { path: '/form', component: formPro, },
  { path: '/courses', component: CoursesComp },
  { path: '/teachers', component: teachers },
  { path: '/course/:id', component: CourseDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
