<script setup>
import adminMenu from './admin-com/adminMenu.vue'
import adminHead from './admin-com/adminHead.vue'
import adminHeadlow from './admin-com/adminHeadlow.vue';
import axios from 'axios';
</script>


<template>
    <div class="user-all">
        <div class="all-user-left"><adminMenu/></div> 
        <div class="all-user-left" id="userleft">
            <adminHead id="admin-h"/>
            <adminHeadlow id="admin-h"/>
            <div class="show-use" style="background-color:  blue;"><h3 style="color: white;font-weight: 800;">List User</h3></div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">#id</th>
                    <th scope="col">First_name</th>
                    <th scope="col">Last_name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(el, indx) in userList" :key="indx">
                        <th scope="row">{{ el.id }}</th>
                        <td>{{ el.first_name }}</td>
                        <td>{{ el.last_name }}</td>
                        <td>{{ el.email }}</td>
                        <td>{{ el.username }}</td>
                    </tr>
                </tbody>
            </table>
        </div> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            userList: [],
            message: ''
        }
    },
    mounted() {
        axios
            .get('http://localhost:5283/api/users')
            .then((res) => {
                var data = res.data;
                for(var item in data){
                    this.userList.push(data[item])
                }
            })
            .catch((err) => {
                this.message = "Failed to list users: " + err;
            });
    },
}

</script>


<style>
.user-all{
    display: flex;
}
.show-use{
    margin-top: 10px;
    text-align: center;
}
.all-user-left{
    height: 100vh;
}
#userleft{
    overflow-y: scroll;
}
#admin-h{
    width: 1280px;
}
</style>