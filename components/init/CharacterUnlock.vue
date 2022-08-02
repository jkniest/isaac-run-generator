<script setup lang="ts">
    import UnlockChoice from "~/components/init/UnlockChoice";
    import Character from "~/stores/data/Character";
    import {useUnlockedStore} from "~/stores/UnlockedStore";
    import {computed, ref} from "@vue/reactivity";
    import {useCharacterStore} from "~/stores/CharacterStore";

    const props = defineProps({
        character: Character,
        skipUnlock: Boolean
    });

    const emit = defineEmits(['done']);

    const unlockedStore = useUnlockedStore();
    const choseUnlockState = ref(props.skipUnlock);

    const characterStore = useCharacterStore();
    const unlockedMarks = ref({});

    const yes = () => {
        unlockedStore.unlockCharacter(props.character.id);
        choseUnlockState.value = true;
    };

    const no = () => {
        emit('done');
    };

    const confirmMarks = () => {
        const completed = [];
        for (let key in unlockedMarks.value) {
            if (unlockedMarks.value[key] === true) {
                completed.push(key);
            }
        }

        unlockedStore.finishMarks(props.character.id, completed);
        emit('done');
    };

    const color = computed(() => {
        return props.character.tainted ? 'text-red-700' : 'text-black';
    });
</script>

<template>
    <UnlockChoice v-if="!choseUnlockState" :label="character.name" :color="color" @yes="yes" @no="no" />

    <div v-else class="mt-8">
        <h3 class="text-center text-xl">What have you finished with <span :class="color">{{character.name}}</span>?</h3>

        <div class="grid grid-cols-1 md:grid-cols-3 mt-6 md:w-[500px] mx-auto gap-3">
            <div v-for="mark in characterStore.allCompletionMarks" :key="mark.id" class="flex items-center space-x-3">
                <input type="checkbox" :id="mark.id" class="w-5 h-5" v-model="unlockedMarks[mark.id]">
                <label :for="mark.id" v-text="mark.name" />
            </div>
        </div>

        <button class="bg-green-300 hover:bg-green-400 py-6 w-full rounded-lg mt-8 block mx-auto"
                @click="confirmMarks"
        >
            Confirm
        </button>
    </div>

</template>
