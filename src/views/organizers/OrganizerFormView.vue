<script setup lang="ts">
import OrganizerService from '@/services/OrganizerService';
import { useMessageStore } from '@/stores/message';
import type { Organizer } from '@/types';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const organizer = ref<Organizer>({
    id: 0,
    address: '',
    organizationName: ''
})

const router = useRouter();
const store = useMessageStore();

function saveOrganizer(){
    OrganizerService.saveOrganizer(organizer.value)
    .then((response) => {
        router.push({ name: 'organizer-detail-view', params: {id: response.data.id}})
        store.updateMessage('You have successfully added a new organizer: '+response.data.organizationName);
        setTimeout(() => {
            store.resetMessage();
        }, 3000);
    })
    .catch(()=>{
        router.push({ name: 'network-error-view' });
    })
}

</script>

<template>
  <div>
    <h1>Create an Organizer</h1>
    <form @submit.prevent="saveOrganizer">

      <h3>Name & Address of your Organization</h3>
      <label>Name</label>
      <input v-model="organizer.organizationName" type="text" placeholder="Name" class="field" />
      <label>Address</label>
      <input v-model="organizer.address" type="text" placeholder="Address" class="field" />

      <button class="button" type="submit">Submit</button>
    </form>
    <pre>{{ organizer }}</pre>
  </div>
</template>