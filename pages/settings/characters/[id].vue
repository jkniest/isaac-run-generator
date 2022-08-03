<script setup lang="ts">
    import {computed} from "@vue/reactivity";
    import BreadCrumb from "~/components/ui/BreadCrumb.vue";
    import {useRoute, useRouter} from "#app";
    import {useCharacterStore} from "~/stores/CharacterStore";
    import {useUnlockedStore} from "~/stores/UnlockedStore";
    import UnlockChoice from "~/components/init/UnlockChoice.vue";
    import CharacterUnlock from "~/components/init/CharacterUnlock.vue";
    import {useHead} from "#head";

    const route = useRoute();
    const router = useRouter();

    const id = route.params.id as string;

    const characterStore = useCharacterStore();
    const unlockedStore = useUnlockedStore();

    const character = characterStore.getCharacterById(id);

    const characterLabel = computed(() => {
        return (character.tainted ? 'Tainted ' : '') + character.name;
    });

    const isUnlocked = computed(() => {
        return unlockedStore.unlockedCharacters.includes(character.id);
    });

    const items = computed(() => ([
        {title: 'Home', path: '/'},
        {title: 'Settings', path: '/settings'},
        {title: 'Characters', path: '/settings/characters'},
        {title: characterLabel.value, path: '/settings/characters/' + character.id},
    ]));

    function done() {
        router.push('/settings/characters');
    }

    useHead({
        title: 'Isaac Runs - Settings - Characters - ' + characterLabel.value
    });
</script>

<template>
    <div>
        <BreadCrumb :items="items"/>

        <h2 class="text-center text-2xl md:text-3xl mt-8">Characters</h2>

        <CharacterUnlock :character="character" :skip-unlock="isUnlocked" @done="done" />
    </div>
</template>