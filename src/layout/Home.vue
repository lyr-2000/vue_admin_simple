<template>
  <div class="home">
    <a-layout id="components   -layout-demo-side" style="min-height: 100vh">
      <a-layout-sider v-model="collapsed" collapsible>
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
          <!--          文章管理-->
          <a-sub-menu key="article-manager1">
            <template  v-slot:title>
               <span><a-icon type="pie-chart" />文章管理</span>
            </template>
            <a-menu-item key="a-1">
              文章列表
            </a-menu-item>
            <a-menu-item key="a-2">
              文章发布
            </a-menu-item>

          </a-sub-menu>
          <!--   分类管理         -->
          <a-sub-menu key="article-manager11">
            <template  v-slot:title>
              <span>分类管理</span>
            </template>
            <a-menu-item key="b-1">
              分类列表
            </a-menu-item>
            <a-menu-item key="b-2">
              分类添加
            </a-menu-item>

          </a-sub-menu>
          <!--  个人信息          -->
          <a-sub-menu key="article-manager111">
            <template  v-slot:title>
              <span>个人信息</span>
            </template>
            <a-menu-item key="c-1">
              修改信息
            </a-menu-item>
            <a-menu-item key="c-2">
              修改密码
            </a-menu-item>

          </a-sub-menu>
          <!--  个人信息          -->
          <a-sub-menu key="article-manager1111">
            <template  v-slot:title>
              <span>行为日志</span>
            </template>
            <a-menu-item key="d-1">
              用户评论
            </a-menu-item>
            <a-menu-item key="d-2">
              用户点赞
            </a-menu-item>
            <a-menu-item key="d-22">
              用户注册
            </a-menu-item>

          </a-sub-menu>

          <a-sub-menu key="article-manager1111112">
            <template  v-slot:title>
              <span>用户管理</span>
            </template>
            <a-menu-item key="e1">
              用户列表
            </a-menu-item>
            <a-menu-item key="e-2">
              友人账
            </a-menu-item>

          </a-sub-menu>

        </a-menu>
      </a-layout-sider>

      <a-layout >
        <a-layout-header :style="{ background: '#fff', padding: 0 }" />
        <a-layout-content  :style="{ margin: '24px 16px 0' }">
          <div style="height: 100vh" :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
            <router-view />
          </div>
        </a-layout-content>
        <a-layout-footer style="textAlign: center">
          <!--Ant Design ©2018 Created by Ant UED-->
        </a-layout-footer>
      </a-layout>


    </a-layout>

  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import {Icon, Layout, Menu} from "ant-design-vue"; // @ is an alias to /src

@Options({
  components: {
    /*HelloWorld*/
    Icon,
    Menu,
    Layout
  }
})
export default class Home extends Vue {}
</script>
