<template >
<a-layout>
    <a-layout-header class="header">
            <a-button
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
{text:" "}
]as const;

</script>

<style lang="scss">
   .header{
    background: #fff;
   }
</style>