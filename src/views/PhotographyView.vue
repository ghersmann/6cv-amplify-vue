<template>
  <body>
    <header>
      <h1>Gustav Hersmann Photographer</h1>
    </header>
    <main class="main-c">
      <img
        src="../assets/img/ghff/2013-hochzillertal-kaltenbach-1128.jpg"
        alt="Snowboarder at Zillertal Välley Rälley in 2013"
        width="650px"
      /><br />
      <p class="a-h2">More images to come...</p>
    </main>
    <footer class="main-c">
      <a class="a-h2" href="mailto:gustav@gustavhersmman.com">gustav@gustavhersmann.com</a><br />
      <router-link class="a-h2 extra-top" :to="{ name: 'home' }">Back</router-link>
    </footer>
  </body>
</template>

<style scoped>
*,
::after,
::before {
  box-sizing: border-box;
}

@font-face {
  font-family: 'blackout';
  src: url(@/assets/fonts/blackout_two_am-webfont.woff) format(woff);
  src: url(@/assets/fonts/blackout_two_am-webfont.woff2) format(woff2);
  src: url(@/assets/fonts/blackout_two_am-webfont.ttf) format(truetype);
}

.main-c {
  width: 667px;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  text-align: center;
  font-family: 'blackout';
}

.a-h2 {
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  margin: 0 auto;
  font-family: 'blackout';
}

.extra-top {
  margin-top: 3rem;
}
</style>
