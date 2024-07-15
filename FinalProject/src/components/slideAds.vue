<template>
    <div class="ads">
        <div class="ads-box">
            <h5>Most Popular Product</h5>
            <p>The product that been recently trentding would not be dissopointed.</p>
            <div class="bun">shop now</div>
        </div>
  </div>
</template>

<style scoped>
    /* ---------------------------ads */
    .ads {
    width: 86%;
    margin: auto;
    position: relative;
    height: 400px;
    margin-bottom: 100px;
    background-image: url(../assets/pic/dark.jpg);
    background-size: cover;
    }
    .ads-box {
        position: absolute;
        width: 500px;
        top: 150px;
        left: 200px;
    }
    .ads h5 {
    color: white;
    font-weight: 700;
    }
    .ads p {
    color: white;
    }
    .bun{
    text-align: center;
    border-radius: 10px;
    padding-top: 3px;
    width: 80px;
    height: 35px;
    background-color: goldenrod;
    color: white;
    }
</style>