<template>
  <main>
    <PhotoTitlePitch />
    <ExperienceComponent />
    <ProjectPortfolio />
    <SkillsComponent />
  </main>
  <footer>
    <ContactComponent />
  </footer>
</template>

<script>
// import DarkStickyHeader from '@/components/DarkStickyHeader.vue'
import PhotoTitlePitch from '@/components/PhotoTitlePitch.vue'
import ProjectPortfolio from '@/components/ProjectPortfolio.vue'
import ContactComponent from '@/components/ContactComponent.vue'
import ExperienceComponent from '@/components/ExperienceComponent.vue'
import SkillsComponent from '@/components/SkillsComponent.vue'

export default {
  components: {
    // DarkStickyHeader,
    PhotoTitlePitch,
    ProjectPortfolio,
    ContactComponent,
    ExperienceComponent,
    SkillsComponent
  }
}
</script>
