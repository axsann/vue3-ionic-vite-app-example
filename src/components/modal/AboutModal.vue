<script setup lang="ts">
import {ref} from 'vue';
import {IonButton} from '@ionic/vue';

const props = defineProps({
  description: {type: String, required: true},
});

const emit = defineEmits(['close']);

const count = ref(0);

</script>

<template>
  <h1>About Modal</h1>
  <p>{{ description }}</p>
  <ion-button @click="emit('close')">
    Close
  </ion-button>
</template>

<style scoped lang="scss">
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
