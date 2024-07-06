<template>
    <div class="background">
      <div class="all">
        <div>
          <h3>Input Username</h3>
          <div class="input-group" id="name">              
              <input v-model="listName" type="text" class="form-control" placeholder="Username">
          </div>
          <h3>Input Password</h3>
          <div class="input-group">
              <input v-model="listPass" type="text" class="form-control" placeholder="password">
          </div>
          <p v-if="loginlist[0]">
            {{  loginlist[0].name}} {{ loginlist[0].password}}
          </p>
          
          <button @click.prevent="addItem" type="button" style="background-color: #169999;">Submit</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.background{
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
  background-color: #7656df;
  display: flex;
  justify-content: center;
  align-items: center;
}
.all h3{
  margin-bottom: 10px;
  margin-top: 10px;
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
.input-group input{
padding-left: 10px;
width: 300px;
height: 50px;

}
p{
margin-bottom: 10px;
margin-top: 10px;
font-size: 20px;
color: white;
}
</style>


<script>
    import axios from 'axios';
    export default{
        data(){
            return{
                listName:null,
                listPass:null,
                loginlist:[]
            }
        },
        methods:{
            addItem(){
                let user={
                    name:this.listName,
                    password:this.listPass,
                }
                this.loginlist.push(user)
                this.listName=null
                this.listPassword=null
            }
        }
    }
</script>


