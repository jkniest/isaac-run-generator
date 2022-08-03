<script setup lang="ts">
    defineProps(['items']);
</script>

<template>
    <ul class="list-none flex items-center space-x-1 text-xs flex-wrap">
        <li v-for="(item, idx) in items" :key="item.path">
            <NuxtLink :to="item.path">
                {{item.title}} <span class="ml-1" v-if="idx < items.length - 1">></span>
            </NuxtLink>
        </li>
    </ul>
</template>