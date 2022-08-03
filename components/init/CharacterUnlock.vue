<script setup lang="ts">
    import UnlockChoice from "~/components/init/UnlockChoice";
    import Character from "~/stores/data/Character";
    import {useUnlockedStore} from "~/stores/UnlockedStore";
    import {computed, ref} from "@vue/reactivity";
    import {useCharacterStore} from "~/stores/CharacterStore";
    import CheckBox from "~/components/ui/CheckBox.vue";
    import SuccessButton from "~/components/ui/SuccessButton.vue";

    const props = defineProps({
        character: Character,
        skipUnlock: Boolean
    });

    const emit = defineEmits(['done']);

    const unlockedStore = useUnlockedStore();
    const choseUnlockState = ref(props.skipUnlock);

    const characterStore = useCharacterStore();
    const unlockedMarks = ref({});

    for (let mark of unlockedStore.finishedMarks[props.character.id] ?? []) {
        unlockedMarks.value[mark] = true;
    }

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

        unlockedStore.overrideFinishedMarks(props.character.id, completed);
        emit('done');
    };

    const color = computed(() => {
        return props.character.tainted ? 'text-red-700' : 'text-black';
    });
</script>

<template>
    <div>
        <UnlockChoice v-if="!choseUnlockState" :label="character.name" :color="color" @yes="yes" @no="no"/>

        <div v-else class="mt-8">
            <h3 class="text-center text-xl">What have you finished with <span :class="color">{{ character.name }}</span>?
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-3 mt-6 md:w-[500px] mx-auto gap-3">
                <CheckBox v-for="mark in characterStore.allCompletionMarks" :key="mark.id" :id="mark.id"
                          v-model="unlockedMarks[mark.id]">
                    {{ mark.name }}
                </CheckBox>
            </div>

            <SuccessButton @click="confirmMarks" class="mt-8">Confirm</SuccessButton>
        </div>
    </div>
</template>
