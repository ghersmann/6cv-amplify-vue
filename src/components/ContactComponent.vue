<template>
  <article class="contact-component">
    <h1>Contact</h1>
    <section class="contact-grid-column">
      <ul class="contact-item">
        <li><a href="mailto:gustav@gustavhersmann.com">gustav@gustavhersmann.com</a></li>
        <li><a href="tel:+4915221477147">+49 (0) 1522 1477147</a></li>
      </ul>
      <ul class="contact-item">
        <li><a href="https://github.com/ghersmann">github.com/ghersmann</a></li>
        <li><a href="https://www.linkedin.com/in/gustavhersmann">linkedin.com/in/gustavhersmann</a></li>
      </ul>
    </section>
  </article>

  <article class="contact-component">
    <h1>Downloads</h1>
    <section class="contact-grid-column">
      <ul class="contact-item">
        <li><a href="https://3cv-bucket.s3.eu-north-1.amazonaws.com/pdfs/gustav-hersmann-resume-v31-english.pdf" target="_blank"><img class="cv-img" src="/cv-gustav-hersmann-english-thumbnail.png" width="100px"></a></li>
        <li><a href="https://3cv-bucket.s3.eu-north-1.amazonaws.com/pdfs/gustav-hersmann-resume-v31-english.pdf" target="_blank">Resumé in English.pdf</a></li>
      </ul>
      <ul class="contact-item">
        <li><a href="https://3cv-bucket.s3.eu-north-1.amazonaws.com/pdfs/gustav-hersmann-lebenslauf-v31-deutsch.pdf" target="_blank"><img class="cv-img" src="/cv-gustav-hersmann-english-thumbnail.png" width="100px"></a></li>
        <li><a href="https://3cv-bucket.s3.eu-north-1.amazonaws.com/pdfs/gustav-hersmann-lebenslauf-v31-deutsch.pdf" target="_blank">Lebenslauf auf Deutsch.pdf</a></li>
      </ul>
      <ul class="contact-item">
        <li><a href="https://3cv-bucket.s3.eu-north-1.amazonaws.com/pdfs/gustav-hersmann-cv-v3-1-svenska.pdf" target="_blank"><img class="cv-img" src="/cv-gustav-hersmann-english-thumbnail.png" width="100px"></a></li>
        <li><a href="https://3cv-bucket.s3.eu-north-1.amazonaws.com/pdfs/gustav-hersmann-cv-v3-1-svenska.pdf" target="_blank">CV på Svenska.pdf</a></li>
      </ul>
    </section>
  </article>
</template>

<script>

export default {
  name: 'ContactComponent',
}
</script>

<style scoped>
.cv-img {
border: 1px solid black;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

a {
  line-height: 3rem;
  text-decoration: none;
}

.contact-item {
  width: 26rem;
  margin: 0 auto;
  padding: 0;
  text-align: center;
}

</style>
