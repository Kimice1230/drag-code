<template >
<a-layout>
    <a-layout-header class="header">
            <a-button
            class="button"
            v-for="button in buttons"
            :key="button.text"
            >{{button.text}}</a-button>
    </a-layout-header>
    </a-layout>
</template>
<script lang="ts" setup>
import {Button,Layout,Header} from 'ant-design-vue';
// import 'ant-design-vue/lib/button/style';
const buttons=[
{text:"撤销"},
{text:"重做"},
{text:"插入图片"},
{text:"预览"},
{text:"保存"},
{text:"清空画布"}
]as const;

</script>

<style lang="scss">
   .header{
    background: #fff;
    padding:200px;
   }
   .button{
    margin-right:10px;
   }
</style>