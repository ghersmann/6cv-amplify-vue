import { get } from '@aws-amplify/api';
import { defineStore } from 'pinia';

export const useExperienceStore = defineStore('experience', {
  state: () => ({
    experiences: [],
  }),

  actions: {
    async fetchExperiences() {
      try {
        const restOperation = await get({
          apiName: 'api4cv',
          path: '/experiences',
        });

        const response = await restOperation.response;
        const json = await response.body.json();
        
        this.experiences = json;
      } catch (e) {
        console.error('GET call failed:', e);
      }
    },
  },
});
