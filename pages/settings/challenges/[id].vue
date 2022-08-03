<script setup lang="ts">
    import {computed} from "@vue/reactivity";
    import BreadCrumb from "~/components/ui/BreadCrumb.vue";
    import {useRoute, useRouter} from "#app";
    import {useCharacterStore} from "~/stores/CharacterStore";
    import {useUnlockedStore} from "~/stores/UnlockedStore";
    import UnlockChoice from "~/components/init/UnlockChoice.vue";
    import {useChallengeStore} from "~/stores/ChallengeStore";
    import ChallengeUnlock from "~/components/init/ChallengeUnlock.vue";
    import InfoButton from "~/components/ui/InfoButton.vue";
    import {useHead} from "#head";

    const route = useRoute();
    const router = useRouter();

    const id = parseInt(route.params.id as string);

    const challengeStore = useChallengeStore();
    const unlockedStore = useUnlockedStore();

    const challenge = challengeStore.getChallengeById(id);

    const challengeLabel = computed(() => {
        return challenge.id + ' - ' + challenge.name;
    });

    const isFinished = computed(() => {
        return unlockedStore.finishedChallenges.includes(challenge.id);
    });

    const items = computed(() => ([
        {title: 'Home', path: '/'},
        {title: 'Settings', path: '/settings'},
        {title: 'Challenges', path: '/settings/challenges'},
        {title: challengeLabel.value, path: '/settings/challenges/' + challenge.id},
    ]));

    function done() {
        router.push('/settings/challenges');
    }

    useHead({
        title: 'Isaac Runs - Settings - Challenges - ' + challenge.name
    });
</script>

<template>
    <div>
        <BreadCrumb :items="items"/>

        <h2 class="text-center text-2xl md:text-3xl mt-8" v-text="challengeLabel" />

        <ChallengeUnlock v-if="! isFinished"
                         :challenge="challenge"
                         @done="done"
        />
        <div v-else class="mt-8">
            <NuxtLink to="/settings/challenges">
                <InfoButton>Go back</InfoButton>
            </NuxtLink>
        </div>
    </div>
</template>