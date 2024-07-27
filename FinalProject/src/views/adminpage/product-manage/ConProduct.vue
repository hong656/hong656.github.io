<script setup>
import adminMenu from '../admin-com/adminMenu.vue'
import adminHead from '../admin-com/adminHead.vue'
import adminHeadlow from '../admin-com/adminHeadlow.vue'
import axios from 'axios'
</script>

<template>
  <div class="user-all">
    <div class="all-user-left"><adminMenu /></div>
    <div class="all-user-left">
      <adminHead />
      <adminHeadlow />
      <div class="show-use" style="background-color:  #169999;"><h3 style="color: greenyellow;font-weight: 800;">Create Product</h3></div>
      <form @submit.prevent="addUserHandler">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">title</th>
              <th scope="col">price</th>
              <th scope="col">description</th>
              <th scope="col">category_id</th>
              <th scope="col">image_name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><input type="text" v-model="Title" id="txt_firstname" /></td>
              <td><input type="text" v-model="Price" id="txt_lastname"/></td>
              <td><input type="text" v-model="Description" id="txt_email"/></td>
              <td><input type="text" v-model="Category_id" id="txt_username"/></td>
              <td><input type="text" v-model="Image_name" id="txt_password"/></td>
            </tr>
          </tbody>
        </table>
        <div class="bot"><input type="submit" value="Create Product" /></div>
        {{ errorMessage }}
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Title: '',
      Price: '',
      Description: '',
      Category_id: '',
      Image_name: ''
    }
  },
  methods: {
    addUserHandler() {
    let isValid = true;
        if (this.Title == '') {
        document.getElementById('txt_firstname').style.border = '2px solid red';
        isValid = false;
        } else {
        document.getElementById('txt_firstname').style.border = '';
        }

        if (this.Price == '') {
        document.getElementById('txt_lastname').style.border = '2px solid red';
        isValid = false;
        } else {
        document.getElementById('txt_lastname').style.border = '';
        }

        if (this.Description == '') {
        document.getElementById('txt_email').style.border = '2px solid red';
        isValid = false;
        } else {
        document.getElementById('txt_email').style.border = '';
        }

        if (this.Category_id == '') {
        document.getElementById('txt_username').style.border = '2px solid red';
        isValid = false;
        } else {
        document.getElementById('txt_username').style.border = '';
        }

        if (this.Image_name == '') {
        document.getElementById('txt_password').style.border = '2px solid red';
        isValid = false;
        } else {
        document.getElementById('txt_password').style.border = '';
        }

        if (!isValid) {
        return;
        }
// -----------------------------------backend
      
      var req = {
        title: this.Title,
        price: this.Price,
        description: this.Description,
        category_id: this.Category_id,
        image_name: this.Image_name,
        errorMessage: ''
      }
      axios
        .post('http://localhost:5283/Products/create', req)
        .then((res) => {
          if (res.status == 200) {
            this.errorMessage = 'Success create Product.'

            //clear
            this.Title = ''
            this.Price = ''
            this.Description = ''
            this.Category_id = ''
            this.Image_name = ''
            this.$router.push('/admin/user/listproduct')
          } else {
            this.errorMessage = 'Error create Product'
          }
        })
        .catch((err) => {
          this.errorMessage = 'Error create Product'
        })
    }
  }
}
</script>

<style>
.user-all {
  display: flex;
}
.all-user-left .bot {
  text-align: center;
}
</style>
