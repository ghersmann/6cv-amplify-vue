<template>
  <h1>Experience</h1>
  <article
    v-for="(experience, index) in experiences"
    :key="index"
    class="experience-item"
  >
    <section class="experience-title">
      <h2>{{ experience.title }}</h2>
      <h3>{{ experience.timeframe }}</h3>
    </section>
    <h4>{{ experience.location }}</h4>
    <section>
      <p
        v-for="(desc, descIndex) in experience.description"
        :key="descIndex"
      >
        {{ desc }}
      </p>
    </section>
    <section
      v-if="experience.links && experience.links.length"
      class="links-container"
    >
      <div
        v-for="(link, linkIndex) in experience.links"
        :key="linkIndex"
        class="link-item"
      >
        <a :href="link.link" target="_blank">
          {{ link.routerLinkText }}: {{ link.linkText }}
        </a>
      </div>
    </section>
  </article>
</template>

<script>
import { useExperienceStore } from '@/stores/experienceStore.js'

export default {
  name: 'ExperienceComponent',

  data() {
    return {
      experienceStore: useExperienceStore(),
    }
  },

  computed: {
    experiences() {
      return this.experienceStore.experiences
    },
  },

  created() {
    this.experienceStore.fetchExperiences()
  },
}
</script>

<style scoped>
h1, h2, h3, h4 {
  margin: 0.5rem 0;
}

h1 {
  margin-top: 4rem;
}

h4 {
  margin-bottom: 2rem;
}

.experience-title {
  display: flex;
  align-items: baseline;
  gap: 2rem;
}

.link-item {
  display: block;
  font-family: 'Work-Sans-Light';
  font-style: normal;
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.7rem;
  margin-bottom: 1rem;
}
</style>
