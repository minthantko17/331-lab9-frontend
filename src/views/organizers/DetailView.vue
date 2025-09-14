<script setup lang="ts">
import type { Organizer } from '@/types';
import { toRefs, defineProps } from 'vue'

const props = defineProps<{
    organizer: Organizer
    id: String
}>()
const {organizer} = toRefs(props)
</script>

<template>
    <p>{{ organizer.address}}</p>
</template>