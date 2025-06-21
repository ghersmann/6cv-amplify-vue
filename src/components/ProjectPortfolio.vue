<template>
  <article class="project-portfolio left-line">
    <h1>Portfolio</h1>
    <section class="portfolio-grid-column">
      <div v-for="(project, index) in portfolioProjects" :key="index" class="portfolio-item">
        <div class="portfolio-imgs">
          <img
            v-for="(image, imgIndex) in project.images"
            :key="imgIndex"
            :src="image.src"
            :alt="image.alt"
            class="portfolio-img"
          />
        </div>
        <h2>{{ project.title }}</h2>
        <p v-for="(desc, descIndex) in project.description" :key="descIndex">
          {{ desc }}
        </p>
        <router-link :to="{ name: 'ProjectDetail', params: { id: project.id } }" class="routerlink">
          {{ project.routerLinkText }}
        </router-link>
      </div>
    </section>
  </article>
</template>

<script>
import { usePortfolioStore } from '@/stores/portfolioStore.js'

export default {
  name: 'ProjectPortfolio',
  setup() {
    const portfolioStore = usePortfolioStore()

       return {
      portfolioProjects: portfolioStore.getProjects
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 2rem;
}

p {
  margin-top: 0;
  text-align: center;
}

h2 {
  text-align: center;
}

.routerlink {
  width: fit-content;
  display: block;
  margin: 0 auto;
}

.portfolio-item {
  width: 27rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4rem;
}
</style>
