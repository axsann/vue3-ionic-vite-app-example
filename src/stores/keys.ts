import {InjectionKey} from 'vue';
import {ExampleStore} from './exampleStore';

export const ExampleStoreKey: InjectionKey<ExampleStore> = Symbol('exampleStore');
