<template >
<a-layout>
    <a-layout-sider class="sider">
    
            <a-button
            class="button"
            v-for="button in buttons"
            :key="button.text"
            >{{button.text}}</a-button>
    </a-layout-sider>
    </a-layout>
</template>
<script lang="ts" setup>
import {Button,Layout,Header,Sider} from 'ant-design-vue';
// import 'ant-design-vue/lib/button/style';
const buttons=[
{text:"文字"},
{text:"按钮"},
{text:"图片"},

]as const;

</script>

<style lang="scss">
//    .header{
//     background: #fff;
//     padding:20px;
//    }
   .button{
    margin-right:10px;
   }
</style>