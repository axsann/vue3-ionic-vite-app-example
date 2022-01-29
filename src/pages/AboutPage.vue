<script setup lang="ts">
import {ref} from 'vue';
import {IonContent, IonButton, IonPage, IonHeader, IonTitle, IonToolbar, IonModal} from '@ionic/vue';
import HelloWorld from '@/components/HelloWorld.vue';
import AboutModal from '@/components/modal/AboutModal.vue';

const modalIsOpen = ref(false);

const showModal = () => {
  modalIsOpen.value = true;
};
const closeModal = () => {
  modalIsOpen.value = false;
};

</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Vite - About</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>About</h1>
      <img
        alt="Vue logo"
        src="../assets/logo.png"
      >
      <hello-world msg="Hello Vue 3 + TypeScript + Vite" />

      <ion-modal :is-open="modalIsOpen">
        <about-modal
          description="About foobar."
          @close="closeModal"
        />
      </ion-modal>
      <ion-button @click="showModal">
        Open Modal
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<style lang="scss" scoped>
</style>