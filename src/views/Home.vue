<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/portrætSpejlvendt.jpg" id="pardiImg" />
    <h1 id="liste">🎅 Ønskeseddel ⛄ Mathias Pardi Nielsen</h1>
    <post-list></post-list>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '../components/PostList.vue';

export default {
  name: "Home",
  components: {
    PostList
  }
};
</script>

<style>
  #liste {
    margin-bottom: 80px;
  }

  #pardiImg {
    max-width: 10%;
    border-radius: 100%;
  }

  @media (min-width: 374px) {
    #pardiImg {
      max-width: 50%;
    }
  }

  @media (min-width: 600px) {
    #pardiImg {
      max-width: 10%;
    }
  }
</style>
