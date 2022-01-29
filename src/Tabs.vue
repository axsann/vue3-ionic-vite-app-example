<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet />
        <ion-tab-bar slot="bottom">
          <ion-tab-button
            tab="home"
            href="/tabs/home"
          >
            <ion-label>Home</ion-label>
            <ion-icon :icon="home" />
          </ion-tab-button>
          <ion-tab-button
            tab="about"
            href="/tabs/about"
          >
            <ion-label>About</ion-label>
            <ion-icon :icon="helpCircleOutline" />
          </ion-tab-button>
          <ion-tab-button
            tab="setting"
            href="/tabs/setting"
          >
            <ion-label>Setting</ion-label>
            <ion-icon :icon="settings" />
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {IonPage, IonContent, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs} from '@ionic/vue';
import {home, helpCircleOutline, settings} from 'ionicons/icons';

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
