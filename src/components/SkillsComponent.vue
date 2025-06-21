<template>
  <article class="skills-component">
    <h1>Skills</h1>
    <section class="logos-grid">
      <div class="skills-grid-column">
        <section class="skill-item">
          <img src="@/assets/img/logos/HTML5_logo.svg" alt="HTML 5 Logotype" height="50px" /><br />
          <h3>HTML5</h3>
        </section>
        <section class="skill-item">
          <img src="@/assets/img/logos/CSS3_logo.svg" alt="CSS 3 Logotype" height="50px" /><br />
          <h3>CSS 3</h3>
        </section>
        <section class="skill-item">
          <img
            src="@/assets/img/logos/JavaScript_logo.svg"
            alt="JavaScript Logotype"
            height="50px"
          /><br />
          <h3>JavaScript</h3>
        </section>
        <section class="skill-item">
          <img src="@/assets/img/logos/Vue-js_Logo.svg" alt="Vue.JS Logotype" height="50px" /><br />
          <h3>Vue.JS</h3>
        </section>
        <section class="skill-item">
          <img
            src="@/assets/img/logos/cypress-logo.svg"
            alt="Cypress Logotype"
            height="40px"
          /><br />
          <h3>Cypress</h3>
        </section>
        <section class="skill-item">
          <img src="@/assets/img/logos/Git-logo.svg" alt="Git Logotype" height="50px" /><br />
          <h3>Git</h3>
        </section>
        <section class="skill-item">
          <img src="@/assets/img/logos/MongoDB_Fores-Green.svg" alt="MongoDB Logotype" width="130px" /><br />
          <h3>MongoDB</h3>
        </section>
        <section class="skill-item">
          <img src="@/assets/img/logos/Figma-logo.svg" alt="Figma Logotype" height="50px" /><br />
          <h3>Figma</h3>
        </section>
      
        <section class="skill-item">
          <img src="@/assets/img/logos/aws-logo.png" alt="AWS Logotype" height="50px" /><br />
          <h3>AWS</h3>
        </section>
        <section class="skill-item skill-item-node">
          <img
            src="@/assets/img/logos/Node.js_logo.svg"
            alt="Node.JS Logotype"
            height="50px"
          /><br />
          <h3>Node.JS</h3>
        </section>
        <section class="skill-item skill-item-npm">
          <img src="@/assets/img/logos/Npm-logo.svg" alt="NPM Logotype" height="40px" /><br />
          <h3>NPM</h3>
        </section>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'ExperienceComponent',
}
</script>

<style scoped>
h1,
h2,
h3,
h4 {
  margin: 0.5rem;
  text-align: center;
}

p {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>
