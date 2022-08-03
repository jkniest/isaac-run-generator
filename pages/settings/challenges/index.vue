<script setup lang="ts">
    import {computed} from "@vue/reactivity";
    import BreadCrumb from "~/components/ui/BreadCrumb.vue";
    import {useChallengeStore} from "~/stores/ChallengeStore";
    import {useUnlockedStore} from "~/stores/UnlockedStore";
    import SuccessButton from "~/components/ui/SuccessButton.vue";
    import DangerButton from "~/components/ui/DangerButton.vue";
    import {useHead} from "#head";

    const challengeStore = useChallengeStore();
    const unlockedStore = useUnlockedStore();

    const items = computed(() => ([
        {title: 'Home', path: '/'},
        {title: 'Settings', path: '/settings'},
        {title: 'Challenges', path: '/settings/challenges'},
    ]));

    useHead({
        title: 'Isaac Runs - Settings - Challenges'
    });
</script>

<template>
    <div>
        <BreadCrumb :items="items"/>

        <h2 class="text-center text-2xl md:text-3xl mt-8">Challenges</h2>

        <div class="space-y-3 flex flex-col mt-4">
            <NuxtLink :to="'/settings/challenges/' + challenge.id" v-for="challenge in challengeStore.all">
                <SuccessButton v-if="unlockedStore.finishedChallenges.includes(challenge.id)">
                    {{challenge.id}} - {{ challenge.name }}
                </SuccessButton>
                <DangerButton v-else>
                    {{challenge.id}} - {{ challenge.name }}
                </DangerButton>
            </NuxtLink>
        </div>
    </div>
</template>