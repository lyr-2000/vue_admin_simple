<template>
  <div class="home">
    <a-layout id="components-layout-demo-side" style="min-height: 100vh">
      <a-layout-sider v-model="collapsed" collapsible>
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
          <a-menu-item key="1">
            <a-icon type="user" />
             <router-link to="/noFound" tag="div">login</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="video-camera" />
            <router-link to="/about" tag="div">about</router-link>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="upload" />
            <div>nav 3</div>
          </a-menu-item>
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
import HelloWorld from "@/components/HelloWorld.vue";
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
