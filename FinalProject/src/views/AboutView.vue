<script setup>
import HeaderTop from '../components/HeaderTop.vue'
import khan from '../components/khan.vue'
import FooterBot from '../components/FooterBot.vue'
</script>

<template>
  <HeaderTop/>
  <div class="con">
        <div class="con-left">
            <h5>About us</h5>
            <div class="colorful">
                <h1>Helping customer achieve a healthy and luxury lifestyle with our product.</h1>
            </div>
            <p>MUUTOS Furniture wasn't just a furniture store, it was an experience. Stepping into their showroom was like entering a world of opulent living. Sleek sofas upholstered in rich velvet beckoned for relaxation, while hand-crafted dining tables in gleaming mahogany promised sophisticated dinner parties. The air itself hummed with a quiet prestige, accentuated by the glint of crystal chandeliers overhead. Astoria didn't just sell furniture, they sold a lifestyle - one of luxury, comfort, and timeless design.</p>
            <div class="contact">
                <div class="p"><p>Number: 081494976</p></div>
                <div class="circle"><i class="fa-solid fa-phone"></i></div>
            </div>
            <div class="contact">
                <div class="p"><p>Email: Hengkov653@gmail.com</p></div>
                <div class="circle"><i class="fa-solid fa-envelope"></i></div>
            </div>
            <RouterLink to="/login"><div class="contact" onclick="redirect()">
                <div class="p"><p>Sign in</p></div>
                <div class="circle"><i class="fa-solid fa-right-to-bracket"></i></div>
            </div></RouterLink>
        </div>
        <div class="con-right">
            <div class="con-pic animate__animated animate__fadeInRight">
                <img src="../assets/pic/aboutpfp.png" alt="">
            </div>
        </div>
  </div>
   <khan/>
   <div class="founder">
        <div class="split">
            <p style="color: #BC9127;">--------------- More Detail</p>
            <h2 style="font-size: 45px;margin-bottom: 20px;" data-aos="fade-right">Discover Our Most Selling Products </h2>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo inventore temporibus dolores sunt possimus recusandae, tempore at aut aperiam molestias consequuntur ducimus autem commodi hic facilis perspiciatis quam veritatis reiciendis.</h6>
        </div>
        <div class="split">
            <img src="../assets/pic/about-co-1.jpg" alt="">
        </div>
   </div>
   <div class="big-letter">
        <div class="sell-left">
            <p style="color: #BC9127;">--------------- Founder</p>
            <h2 style="font-size: 45px;margin-bottom: 20px;" data-aos="fade-right">Discover Our
                Founder And CEO</h2>
        </div>
        <div class="sell-right">
            <div class="view-best-sell" data-aos="fade-left">
                <p style="font-size: 15px;">Learn more</p>
            </div>
        </div>
    </div>
    <div class="founder">
        <div class="split" id="co">
            <div class="split-l"><img src="../assets/pic/ceo.jpg" alt=""></div>
            <div class="split-r">
                <h3>Founder: SongHeng</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illum expedita ut totam ea quisquam dolore illo quibusdam laboriosam. Itaque deleniti dicta, accusamus rerum recusandae</p>
            </div>
        </div>
        <div class="split" id="co">
            <div class="split-l"><img src="../assets/pic/co-founder-2.jpg" alt=""></div>
            <div class="split-r">
                <h3>Co-founder: Norak</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illum expedita ut totam ea quisquam dolore illo quibusdam laboriosam. Itaque deleniti dicta, accusamus rerum recusandae</p>
            </div>
        </div>
    </div>
   <div class="founder" id="gap">
        <div class="split" id="co">
            <div class="split-l"><img src="../assets/pic/co-founder-1.jpg" alt=""></div>
            <div class="split-r">
                <h3>Co-founder: Taiyi</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illum expedita ut totam ea quisquam dolore illo quibusdam laboriosam. Itaque deleniti dicta, accusamus rerum recusandae</p>
            </div>
        </div>
        <div class="split" id="together"><img src="../assets/pic/together.jpg" alt=""></div>
   </div>
   <FooterBot/>
</template>


<style scoped>
    h2{
        font-weight: 700;
    }
    h6{
        padding-right: 20px;
        padding-left: 10px;
        line-height: 30px;
    }
  .con{
    margin: auto;
    padding-top: 50px;
    width: 85%;
    height: 600px;
    display: flex;
  }
  .con-left{
      width: 50%;
      height: 100%;
  }
  .con-left h5{
      margin-left: -10px;
  }

  .colorful{
      width: 100%;
      height: 160px;
      background: linear-gradient(to right,#169999,lightgreen,orange);
      background-clip: text;
      color: transparent;
  }
  .colorful h1{
      font-weight: 900;
  }
  .contact{
      width: 300px;
      height: 50px;
      border-radius: 30px;
      margin-top: 15px;
      padding-right: 5px;
      padding-left: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      background-color: #169999;
  }
  .contact:hover .circle{
      background-color: green;
  }
  .contact:hover .p{
      color: #004500;
  }
  .contact .p{
      transition: 0.5s;
      padding-top: 12px;
      width: 230px;
      height: 100%;
      color: white;
  }
  .circle{
      width: 40px;
      height: 40px;
      border-radius: 100%;
      display: flex;
      padding-left: 7px;
      justify-content: space-between;
      align-items: center;
      font-size: 25px;
      color: white;
      transition: 0.5s;
      background-color: lightgreen;
  }

  .con-right{
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .con-pic{
      width: 70%;
      height: 100%;
  }
  .con-pic img{
      width: 100%;
      height: 100%;
  }
/* --------------------------------founder */
.founder{
    width: 80%;
    height: 400px;
    margin: auto;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
}
.split{
    width: 48%;
    height: 100%;
}
.split-l{
    width: 300px;
    height: 350px;
}
.split-l img{
    width: 100%;
    height: 100%;
}
.split-r{
    width: 300px;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 150px;
}
#co{
    display: flex;

}
#together img{
    width: 100%;
    height: 100%;
}
/* ----------------------best-seller */
.big-letter{
    margin: auto;
    margin-top: 150px;
    width: 80%;
    height: 180px;
    display: flex;
    justify-content: space-between;
}
.sell-left{
    width: 40%;
    height: 100%;
}
.sell-right{
    position: relative;
    display: flex;
    justify-content: center;
    width: 30%;
    height: 100%;
}
.sell-left h2{
    font-weight: 650;
}
.view-best-sell{
    position: absolute;
    cursor: pointer;
    bottom: 40px;
    width: 200px;
    height: 40px;
    text-align: center;
    padding-top: 8px;
    color: white;
    background-color: goldenrod;
}
#gap{
    margin-bottom: 100px;
}


</style>
