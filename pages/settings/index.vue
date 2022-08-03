<script setup lang="ts">
    import BreadCrumb from "~/components/ui/BreadCrumb.vue";
    import {useHead} from "#head";
    import {computed} from "@vue/reactivity";
    import InfoButton from "~/components/ui/InfoButton.vue";
    import DangerButton from "~/components/ui/DangerButton.vue";
    import {useRouter} from "#app";

    useHead({
        title: 'Isaac Runs - Settings'
    });

    const items = computed(() => ([
        {title: 'Home', path: '/'},
        {title: 'Settings', path: '/settings'},
    ]));

    function reset() {
        const shouldReset = confirm('Really?');
        if (shouldReset) {
            localStorage.clear();

            useRouter().push('/');
        }
    }
</script>

<template>
    <div>
        <bread-crumb :items="items"/>

        <h2 class="text-center text-2xl md:text-3xl mt-8">Settings</h2>

        <div class="space-y-3 flex flex-col mt-4">
            <NuxtLink to="/settings/characters"><InfoButton>Characters</InfoButton></NuxtLink>
            <NuxtLink to="/settings/challenges"><InfoButton>Challenges</InfoButton></NuxtLink>
            <DangerButton @click="reset">Reset</DangerButton>
        </div>
    </div>
</template>
