import Vue from 'vue'
import Router from 'vue-router'

// 加载路由规则对应的组件
import HeroesList from '@/views/heroes/list';
import WeaponsList from '@/views/weapons/list';
import EquipsList from '@/views/equips/list';

// 英雄添加路由
import HeroesAdd from '@/views/heroes/add';

Vue.use(Router)

export default new Router({
  routes: [
    // { name: 'home', path: '/', redirect: '/heroes' },
    { name: 'home', path: '/', redirect: { name: 'heroes'} },
    { name: 'heroes', path: '/heroes', component: HeroesList },
    { name: 'weapons', path: '/weapons', component: WeaponsList },
    { name: 'equips', path: '/equips', component: EquipsList },
    { name: 'heroesadd', path: '/heroes/add', component: HeroesAdd }
  ]
})
