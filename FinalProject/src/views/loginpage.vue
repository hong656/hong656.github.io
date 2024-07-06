<template>
    <div class="background">
        <div class="all">
            <div class="back"><h6><i class="fa-solid fa-arrow-left"></i>Back</h6></div>
            <h6>Input Username</h6>
            <div class="input-group mb-3">              
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <h6>Input Password</h6>
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="password" aria-label="Recipient's username" aria-describedby="basic-addon2">
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
            <button type="button" class="btn btn-primary" style="background-color: #169999;">Submit</button>
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