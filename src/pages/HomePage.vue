<script setup lang="ts">
import {IonContent, IonButton, IonPage, IonHeader, IonTitle, IonToolbar} from '@ionic/vue';
import {inject} from 'vue';
import {ExampleStoreKey} from '@/stores/keys';

const globalStore = inject(ExampleStoreKey)!;

</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Vite - Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Home</h1>
      <ion-button router-link="/tabs/detail">
        Detail
      </ion-button>
      <h2>Global Store Value</h2>
      <p>{{ globalStore.state.example }}</p>
    </ion-content>
  </ion-page>
</template>

<style lang="scss" scoped>
</style>