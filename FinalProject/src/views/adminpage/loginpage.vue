
<template>
    <div class="background">
        <div class="all">
            <div class="back"><h6><i class="fa-solid fa-arrow-left"></i>Back</h6></div>
            <h6>Input Username</h6>
            <div class="input-group mb-3">              
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" v-model="username" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <h6>Input Password</h6>
            <div class="input-group mb-3">
                <input type="password" class="form-control" v-model="password" placeholder="password" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2">***</span>
            </div>
            <h6>Fullname</h6>
            <div class="row g-3">
                <div class="col">
                  <input type="text" class="form-control" placeholder="First name" aria-label="First name">
                </div>
                <div class="col">
                  <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                </div>
            </div>
            <button type="button"  class="btn btn-primary" style="background-color: #169999;" @click.prevent="loginHandler">Submit</button>
            <p style="color: red;text-align: center;padding-left: 50px;margin-top: 10px;">{{ errorMessage }}</p>
        </div>
    </div>
</template>


<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.background{
    background-image: url(../assets/pic/login1.jpg);
    width: 100%;
    height: 100vh;
    background-size: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.all{
    width: 600px;
    height: 380px;
    border-radius: 40px;
    padding: 20px 20px 20px 20px;
    backdrop-filter: blur(20px);
    background-color: #1699991d;
}
.all h6{
    color: white;
}
.back{
    width: 100px;
    height: 30px;
}
.back a{
    text-decoration: none;
}
.btn{
    float: right;
    margin-top: 20px;
}

</style>

  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        username: "",
        password: "",
        errorMessage: "",
      };
    },
    methods: {
      loginHandler() {
        var req = {
          username: this.username,
          password: this.password,
        };
        axios
          .post("http://localhost:5283/api/login", req)
          .then((res) => {
            if (res.status == 200) {
              var data = res.data;
              localStorage.setItem("isLogin", "OK");
              localStorage.setItem("username", data.username);
              this.$router.push("/admin/dachboard");
            } else {
              this.errorMessage = "Wrong username and password";
            }
          })
          .catch((error) => {
            this.errorMessage = "Wrong username and password";
          });
      },
    },
  };
  </script>