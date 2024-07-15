<template>
  <div id="app">
      <div class="line-math">
          <div class="math">
          <div class="block" @click="decrement"><p><i class="fa-solid fa-minus"></i></p></div>
          <div class="block" id="number"><p>{{ formattedNumber }}</p></div>
          <div class="block"  @click="increment"><p><i class="fa-solid fa-plus"></i></p></div>
          </div>
          <div class="add-cart">
          <p>Add To Cart</p>
          </div>
      </div>
    </div>
</template>



<style scoped>
.line-math {
  margin-top: 20px;
  display: flex;
}
.math {
  display: flex;
}
.math .block {
  cursor: pointer;
  width: 40px;
  height: 40px;
  text-align: center;
  border: 1px solid black;
}
.math .block p {
  font-size: 25px;
}
.line-math .add-cart {
  cursor: pointer;
  margin-left: 20px;
  width: 120px;
  height: 40px;
  background-color: goldenrod;
}
.add-cart p {
  text-align: center;
  padding-top: 5px;
  color: white;
  font-size: 18px;
}
</style>

<script>
// ---------------------------------increase
  export default {
    data() {
      return { 
        number: 1 
      };
    },
    computed: {
      formattedNumber() {
        return this.number < 10 ? '0' + this.number : this.number;
      }
    },
    methods: {
      increment() {
        this.number++;
      },
      decrement() {
        if (this.number > 1) {
          this.number--;
        }
      }
    }
  };
</script>