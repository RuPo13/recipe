<template>
    <div class="banner">
        <p class="h1 display-4">Find Your Coffee Cup</p>
        <p class="lead">We have them all in one place!</p>
    </div>
</template>


<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style>
  .banner {
    background-image: url('http://www.midday.coffee/assets/banner.jpg');
    background-size: cover;
    height: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
  }

  .banner > p {
    color: white;
    padding: 10px;
  }

    @media (max-width: 576px) {
    .banner {
      align-items: flex-start;
      height: 400px;
    }
  }
</style>