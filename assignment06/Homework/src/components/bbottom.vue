<template>
       <div class="body-bottom">
        <div class="small">
            <div class="inside" id="in-1">
                <div class="head"><h2>Welcome!</h2></div>
                <div class="letter" style="padding-top: 20px;">
                    <p>
                        Everything in this city is worth waiting in line for. <br><br>
                        Cupcake ipsum dolor sit. Amet chocolate cake gummies jelly beans candy bonbon brownie candy. Gingerbread powder muffin. Icing cotton candy. Croissant icing pie ice cream brownie I love cheesecake cookie. Pastry chocolate pastry jelly croissant. <br><br>
                        Cake sesame snaps sweet tart candy canes tiramisu I love oat cake chocolate bar. Jelly beans pastry brownie sugar plum pastry bear claw tiramisu tootsie roll. Tootsie roll wafer I love chocolate donuts.
                    </p>
                </div>
            </div>
            <div class="inside" id="in-2">
                <div class="head"><h2>Great Food</h2></div>
                <div class="food">
                    <img src="../assets/pic/food.svg" alt="">
                </div>
                <div class="letter" style="margin-top: 20px;">
                    <p style="margin-top: 0;">
                        Croissant macaroon pie brownie. Cookie marshmallow liquorice gingerbread caramels toffee I love chocolate.Wafer lollipop dessert. Bonbon jelly beans pudding dessert sugar plum. Marzipan toffee dragée chocolate bar candy toffee pudding I love. Gummi bears pie gingerbread lollipop.
                    </p>
                </div>
            </div>
            <div class="inside" id="in-3">
                <div class="head" id="head-3"><h2>How To Get Here</h2></div>
                <div class="letter">
                    <p>
                        Plane: Tiramisu caramels gummies chupa chups lollipop muffin. Jujubes chocolate caramels cheesecake brownie lollipop dragée cheesecake.                       
                    </p>
                    <p>Train: Pie apple pie pudding I love wafer toffee liquorice sesame snaps lemon drops.      Lollipop gummi bears dessert muffin I love fruitcake toffee pie.</p>
                    <p>
                        Car: Jelly cotton candy bonbon jelly-o jelly-o I love. I love sugar plum chocolate cake pie I love pastry liquorice.</p>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>
    .body-bottom{
        width: 100%;
        padding-top: 50px;
        padding-bottom: 30px;
    }
    .small{
        width: 100%;
        height: 520px;
    }
    .inside{
        width: calc(100%/3);
        height: 100%;
    }
    .head{
        width: 100%;
        height: 70px;
        padding-top: 40px;
        color: #1e1e73;
    }
    #in-1{
        padding-left: 45px;
        padding-right: 45px;
        float: left;
    }
    #in-2{
        float: left;
    }
    #in-3{
        float: left;
        padding-left: 45px;
        padding-right: 45px;
    }
    .food{
        margin-top: 20px;
        width: 100%;
        height: 260px;
        background-color: #3ACEC3;
    }
    .food img{
        width: 100%;
        height: 100%;
    }
</style>