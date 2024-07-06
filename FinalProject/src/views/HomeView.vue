<template>
  <div>
      <div class="background">
      <div class="everything animate__animated animate__fadeInUp">
          <div class="center">
              <a href="" style="color: white;"><h1>MUUTOS</h1></a>
          </div>
          <div class="left">
              <div class="left-header">
                  <RouterLink to="/"><h1>MUUTOS</h1></RouterLink>
              </div>
              <div class="detail">
                  <div class="detail-1">
                      <h1 style="color:darkslategrey;">Healthy and Comfortable Room Enchanted Your Happiness</h1>
                  </div>
              </div>
              <div class="introduction">
                  <p>MUUTOS is a company that sold luxury furniture. We can help you customize any furniture fit for your taste and lifestyle. Any product that leave our store will get a 5 year warenty.</p>
              </div>
              <div class="bottom-left">
                  <div class="full">
                      <div class="half"><img src="../assets/pic/1half.jpg" alt=""></div>
                      <div class="half"><img src="../assets/pic/2half.jpg" alt=""></div>
                  </div>
              </div>
          </div>
          <div class="right">
              <div class="right-header">
                  <ul type="none" class="ul">
                      <li id="a" style="border-bottom: 2px solid yellow;"><RouterLink to="/">Home</RouterLink></li>
                      <li><RouterLink to="/store">Store</RouterLink></li>
                      <li  id="b"><RouterLink to="/decor">Decoration</RouterLink></li>
                      <li><RouterLink to="/service">Service</RouterLink></li>
                      <li><RouterLink to="/about">About us</RouterLink></li>
                  </ul>
              </div>
          </div>
      </div>
      </div>
  </div>
</template>

<style>
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
  h1{
      font-weight: 700;
  }
  a{
  text-decoration: none;
  color: black;
  }
  .background{
      width: 100%;
      height:100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: url(../assets/pic/login1.jpg);
  }
  .everything{
      width: 80%;
      background-image: url(../assets/pic/intro.jpg);
      height: 80vh;
      display: flex;
      overflow: hidden;
      border-radius: 40px;
      border: 10px solid black;
      position: relative;

  }
  .left{
      width: 45%;
      height: 100%;
      background-color: white;
  }
  .left-header{
      width: 100%;
      height: 60px;
      padding-left: 25px;
  }
  h1{
      font-size: 40px;
      font-family: "Teko", sans-serif;
  }
  .detail{
      width: 560px;
      height: 90px;
      position: relative;
      margin-top: 80px;
  }
  .detail-1{
      position: absolute;
      width: 600px;
      right: -215px;
  }
  .detail-1 h1{
      font-size: 40px;
      font-family: "Roboto Condensed", sans-serif;
      font-optical-sizing: auto;
      font-weight: 600;
      font-style: italic;
  }

  .introduction{
      margin-top: 30px;
      margin-left: 175px;
      width: 370px;
  }
  .bottom-left{
      width: 450px;
      height: 240px;
      margin-left: 170px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      background-color: #169999;
  }
  .full{
      position: absolute;
      width: 480px;
      left: -70px;
      height: 80%;
      display: flex;
      justify-content: space-between;
  }
  .half{
      width: 45%;
      height: 100%;
      border-radius: 30px;
      overflow: hidden;
  }
  .half img{
      width: 100%;
      height: 100%;
  }
  .right{
      width: 55%;
      height: 100%;
  }
  .right-header{
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 30px;
      padding-right: 30px;
  }
  .right-header .ul{
      width: 100%;
      display: flex;
      font-size: 17px;
      justify-content: space-between;
  }
  .ul a{
      color: white;
  }

  .center{
      position: absolute;
      display: none;
      justify-content: center;
      width: 100%;
      height: 60px;
      padding-top: 15px;
      padding-left: 25px;
      top: 300px;
  }


  @media screen and (min-width:385px) and (max-width:768px){
      .background{
          background-color: white;
      }
      .everything{
          width: 100%;
          height: 90vh;
      }
      .left{
          display: none;
      }
      .right{
          width: 100%;
      }
      .center{
          display: flex;
      }
      #a{
          display: none;
      }
      #b{
          display: none;
      }
  }
  @media screen and (min-width:768px) and (max-width:1024px){
      .background{
          background-color: white;
      }
      .everything{
          width: 100%;
          height: 90vh;
      }
      .left{
          display: none;
      }
      .right{
          width: 100%;
      }
      .center{
          display: flex;
      }
  }
</style>



