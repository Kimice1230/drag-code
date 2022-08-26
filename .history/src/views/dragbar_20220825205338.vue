<template >
<a-layout>
    <div class="sider">
    
            <!-- <a-button
            class="button"
            v-for="button in buttons"
            :key="button.text"
            >{{button.text}}</a-button> -->
    </div>
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

<style lang="scss" scoped>
    .sider{
        left:0;
        width:200px;
        height:8000;
        background:black;

    }
   .button{
    margin-right:10px;
   }
</style>