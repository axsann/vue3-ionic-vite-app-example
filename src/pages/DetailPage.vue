<script setup lang="ts">
import {IonInput, IonLabel, IonItem, IonContent, IonButtons, IonBackButton, IonPage, IonHeader, IonTitle, IonToolbar} from '@ionic/vue';
import {inject} from 'vue';
import {ExampleStoreKey} from '@/stores/keys';

const globalStore = inject(ExampleStoreKey)!;

</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/home" />
        </ion-buttons>
        <ion-title>Ionic Vite - Detail</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <h1>Detail</h1>
      <h2>Global Store Value</h2>
      <ion-item>
        <ion-label position="stacked">
          Input
        </ion-label>
        <ion-input
          v-model="globalStore.state.example"
        />
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<style lang="scss" scoped>
</style>