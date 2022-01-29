import {reactive} from 'vue';

export function exampleStore() {
  const state = reactive({
    example: 'foobar',
  });

  return {
    state,
  };
}
export type ExampleStore = ReturnType<typeof exampleStore>;
