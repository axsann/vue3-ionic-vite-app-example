<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {IonCheckbox, IonRadioGroup, IonList, IonListHeader, IonLabel, IonItem, IonRadio, IonContent, IonButton, IonPage, IonHeader, IonTitle, IonToolbar} from '@ionic/vue';
import {getIonicConfig, IonicMode, setIonicConfig} from '@/localStorages/ionicConfigStorage';

const ionicMode = ref<IonicMode>('md');
const animated = ref<boolean>(false);

onMounted(async () => {
  const config = await getIonicConfig();
  ionicMode.value = config.mode;
  animated.value = config.animated;
});

const onSubmit = async () => {
  await setIonicConfig({
    mode: ionicMode.value,
    animated: animated.value,
  });
  if (typeof window !== 'undefined') {
    window.location.reload();
  }
};

</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ionic Vite - Setting</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <form @submit.prevent="onSubmit">
        <ion-list>
          <ion-radio-group
            v-model="ionicMode"
          >
            <ion-list-header>
              <ion-label>Ionic Mode</ion-label>
            </ion-list-header>

            <ion-item lines="none">
              <ion-label>iOS</ion-label>
              <ion-radio
                slot="start"
                value="ios"
              />
            </ion-item>

            <ion-item lines="none">
              <ion-label>Material Design</ion-label>
              <ion-radio
                slot="start"
                value="md"
              />
            </ion-item>
          </ion-radio-group>
        </ion-list>
        <ion-list>
          <ion-item lines="none">
            <ion-label>Animated Page Transition</ion-label>
            <ion-checkbox v-model="animated" />
          </ion-item>
        </ion-list>
        <ion-button type="submit">
          Save
        </ion-button>
      </form>
    </ion-content>
  </ion-page>
</template>

<style lang="scss" scoped>
</style>