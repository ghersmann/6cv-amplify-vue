<template>
  <article class="project-portfolio" v-if="project">
    <h1>{{ project.title }}</h1>
    <section class="project-details">
      <div v-if="project.details" v-html="project.details" class="project-description"></div>
      <p v-else class="project-description">{{ project.description[0] }}</p>
      <div v-for="(image, imgIndex) in project.images" :key="imgIndex" class="project-item">
        <img :src="image.src" :alt="image.alt" class="project-img" @click="openModal(image)" />
        <div class="project-image-description">
          <h2>{{ image.alt }}</h2>
          <p>{{ image.description }}</p>
        </div>
      </div>
      <h2 class="projectlink routerlink" v-if="project.link">Try it out:</h2>
      <a v-if="project.link" :href="project.link" class="projectlink routerlink" target="_blank">
        {{ project.linkText }}
      </a>
      <router-link :to="'/'" class="routerlink">
        <p>Back</p>
      </router-link>
    </section>

    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close-btn" @click="closeModal">&times;</span>
        <img :src="selectedImage.src" :alt="selectedImage.alt" class="modal-img" />
      </div>
    </div>
  </article>
  <p v-else>Project not found.</p>
</template>

<script>
import { ref } from 'vue'
import { usePortfolioStore } from '@/stores/portfolioStore.js'
import { useRoute } from 'vue-router'

export default {
  name: 'ProjectPortfolio',
  setup() {
    const portfolioStore = usePortfolioStore()
    const route = useRoute()

    const projectId = route.params.id

    const project = portfolioStore.getProjects.find((p) => p.id === projectId)

    const isModalOpen = ref(false)
    const selectedImage = ref(null)

    const openModal = (image) => {
      selectedImage.value = image
      isModalOpen.value = true
    }

    const closeModal = () => {
      isModalOpen.value = false
      selectedImage.value = null
    }

   
    return {
      project,
      isModalOpen,
      selectedImage,
      openModal,
      closeModal
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.6rem;
}

.routerlink {
  width: fit-content;
  display: block;
  margin: 0 auto;
}

.projectlink {
  margin-bottom: 2rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background-color: white;
  padding: 2.5rem;
  max-width: 80%;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  color: #333;
  cursor: pointer;
}
</style>
