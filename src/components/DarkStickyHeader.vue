<template>
  <div class="hamburger-menu">
    <div class="burger-line"></div>
    <div class="burger-line"></div>
    <div class="burger-line"></div>
  </div>
  <p class="langauge-icon">EN</p>
  <a href="mailto:gustav@gustavhersmann.com"
    ><img class="letter-symbol" src="@/assets/img/LetterSymbol.svg" alt="Letter Symbol"
  /></a>
</template>

<script>
export default {
  name: 'DarkStickyHeader'
}
</script>

<style scoped>
p {
  all: unset;
}

.langauge-icon {
  margin-top: 0;
  color: white;
  font-size: 1.6rem;
  margin-left: auto;
  margin-right: 1rem;
}

.hamburger-menu {
  width: 3rem;
  height: 1.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 1rem;
}

.burger-line {
  width: 100%;
  height: 0.2rem;
  background-color: white;
  border-radius: 0.1rem;
}
.letter-symbol {
  margin: 0 1rem;
}
</style>
