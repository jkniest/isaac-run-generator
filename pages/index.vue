<script setup lang="ts">
    import InitStart from "~/components/init/InitStart.vue";
    import {useUnlockedStore} from "~/stores/UnlockedStore";
    import RandomRun from "~/components/RandomRun.vue";

    const store = useUnlockedStore();
</script>

<template>
    <div>
        <InitStart v-if="!store.initialized"/>
        <div v-else>
            <RandomRun ref="randomRun" />
        </div>
    </div>
</template>