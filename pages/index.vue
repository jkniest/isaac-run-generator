<script setup lang="ts">
    import InitStart from "~/components/init/InitStart.vue";
    import {useUnlockedStore} from "~/stores/UnlockedStore";
    import RandomRun from "~/components/RandomRun.vue";
    import {useHead} from "#head";
    import BaseButton from "~/components/ui/BaseButton.vue";
    import SecondaryButton from "~/components/ui/SecondaryButton.vue";

    const store = useUnlockedStore();

    useHead({
        title: 'Isaac Runs'
    });
</script>

<template>
    <div>
        <InitStart v-if="!store.initialized"/>
        <div v-else>
            <RandomRun ref="randomRun" />
            <NuxtLink to="/settings"><SecondaryButton class="mt-5">Settings</SecondaryButton></NuxtLink>
        </div>
    </div>
</template>