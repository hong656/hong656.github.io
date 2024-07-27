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
      <adminHead/>
      <adminHeadlow/>
      <div class="show-use" style="background-color:  #169999;"><h3 style="color: greenyellow;font-weight: 800;">Update Product</h3></div>
      <form @submit.prevent="addUserHandler">
        <table class="table table-bordered">
          <thead>
            <tr>
                <th scope="col">#id</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Description</th>
                <th scope="col">Category_id</th>
                <th scope="col">Image_name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><input type="text" v-model="Id" id="txt_id"></th>
              <td><input type="text" v-model="Title" id="txt_firstname" /></td>
              <td><input type="text" v-model="Price" id="txt_lastname"/></td>
              <td><input type="text" v-model="Description" id="txt_email"/></td>
              <td><input type="text" v-model="Category_id" id="txt_username"/></td>
              <td><input type="text" v-model="Image_name" id="txt_password"/></td>
            </tr>
          </tbody>
        </table>
        <div class="bot"><input type="submit" value="Update Product" /></div>
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
        if (this.Id == '') {
        document.getElementById('txt_id').style.border = '2px solid red';
        isValid = false;
        } else {
        document.getElementById('txt_id').style.border = '';
        }

        if (this.firstName == '') {
        document.getElementById('txt_firstname').style.border = '2px solid red';
        isValid = false;
        } else {
        document.getElementById('txt_firstname').style.border = '';
        }

        if (this.lastName == '') {
        document.getElementById('txt_lastname').style.border = '2px solid red';
        isValid = false;
        } else {
        document.getElementById('txt_lastname').style.border = '';
        }

        if (this.email == '') {
        document.getElementById('txt_email').style.border = '2px solid red';
        isValid = false;
        } else {
        document.getElementById('txt_email').style.border = '';
        }

        if (this.username == '') {
        document.getElementById('txt_username').style.border = '2px solid red';
        isValid = false;
        } else {
        document.getElementById('txt_username').style.border = '';
        }

        if (this.password == '') {
        document.getElementById('txt_password').style.border = '2px solid red';
        isValid = false;
        } else {
        document.getElementById('txt_password').style.border = '';
        }

        if (!isValid) {
        return;
        }
      
      var req = {
        id: this.Id,
        title: this.Title,
        price: this.Price,
        description: this.Description,
        category_id: this.Category_id,
        image_name: this.Image_name,
        errorMessage: ''
      }
      axios
        .put('http://localhost:5283/Products/update', req)
        .then((res) => {
          if (res.status == 200) {
            this.errorMessage = 'Success create user.'

            //clear
            this.firstName = ''
            this.lastName = ''
            this.email = ''
            this.username = ''
            this.password = ''
            this.$router.push('/admin/user/listproduct')
          } else {
            this.errorMessage = 'Error create user'
          }
        })
        .catch((err) => {
          this.errorMessage = 'Error create user'
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
#txt_id{
    width: 50px;
}
</style>
