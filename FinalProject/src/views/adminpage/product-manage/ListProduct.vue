<script setup>
import adminMenu from '../admin-com/adminMenu.vue'
import adminHead from '../admin-com/adminHead.vue'
import adminHeadlow from '../admin-com/adminHeadlow.vue'
import axios from 'axios'
</script>
<template>
    <div class="user-all">
        <div class="all-user-left"><adminMenu/></div> 
        <div class="all-user-left" id="userleft">
            <adminHead id="admin-h"/>
            <adminHeadlow id="admin-h"/>
            <div class="show-use" style="background-color:  #169999;"><h3 style="color: greenyellow;font-weight: 800;">List Product</h3></div>
            <div class="for-list">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">Category_id</th>
                            <th scope="col">Image_name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(el, indx) in userList" :key="indx" :id=" 'product_' + el.id ">
                            <th scope="row">{{ el.id }}</th>
                            <td>{{ el.title }}</td>
                            <td>{{ el.price }}</td>
                            <td>{{ el.description }}</td>
                            <td>{{ el.category_id }}</td>
                            <td>{{ el.image_name }}</td>
                            <td id="flex"> <p style="color: red" @click="deleteHandler(el.id)">Delete</p> / <router-link to="/admin/user/updateproduct"><p style="color: blue;">Edit</p></router-link>  </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
    methods: {
        deleteHandler(id) {
            var isConfirm = confirm("Do you want to delete")
            if(isConfirm == false){
                return
            }
            axios
            .delete("http://localhost:5283/Products/delete/" + id)
            .then((res) =>{
                if(res.status == 200){
                    document.getElementById('product_' +id).remove()
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    mounted() {
        axios
            .get('http://localhost:5283/Products')
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
.for-list .table{
    width: 1280px;
}
#flex{
    display: flex;
}
.for-list p{
    cursor: pointer;
}
</style>
