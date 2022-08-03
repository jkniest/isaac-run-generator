<script setup lang="ts">
    import BreadCrumb from "../../../components/ui/BreadCrumb";
    import {computed} from "@vue/reactivity";
    import {useCharacterStore} from "~/stores/CharacterStore";
    import SuccessButton from "~/components/ui/SuccessButton.vue";
    import DangerButton from "~/components/ui/DangerButton.vue";
    import {useUnlockedStore} from "~/stores/UnlockedStore";
    import {useHead} from "#head";

    useHead({
        title: 'Isaac Runs - Settings - Characters'
    });

    const characterStore = useCharacterStore();
    const unlockedStore = useUnlockedStore();

    const items = computed(() => ([
        {title: 'Home', path: '/'},
        {title: 'Settings', path: '/settings'},
        {title: 'Characters', path: '/settings/characters'},
    ]));
</script>

<template>
    <div>
        <BreadCrumb :items="items"/>

        <h2 class="text-center text-2xl md:text-3xl mt-8">Characters</h2>

        <div class="space-y-3 flex flex-col mt-4">
            <NuxtLink :to="'/settings/characters/' + character.id" v-for="character in characterStore.all">
                <SuccessButton v-if="unlockedStore.unlockedCharacters.includes(character.id)">{{character.name}}</SuccessButton>
                <DangerButton v-else>
                    <span v-if="character.tainted">Tainted </span>
                    {{character.name}}
                </DangerButton>
            </NuxtLink>
        </div>
    </div>
</template>
