<script setup>
import adminMenu from './admin-com/adminMenu.vue'
import adminHead from './admin-com/adminHead.vue'
import adminHeadlow from './admin-com/adminHeadlow.vue'
</script>



<template>
    <div class="user-all">
    <div class="all-user-left"><adminMenu /></div>
    <div class="all-user-left">
      <adminHead />
      <adminHeadlow />
      <div class="show-use" style="background-color:  #169999;"><h3 style="color: greenyellow;font-weight: 800;">upload-file</h3></div>
      <div class="upload-file">
        <h2>File Upload</h2>
        <input type="file" @change="onchangeSelectFile">
        <button @click="uploadfileHandler">Upload</button>
        <p v-if="message">{{ message }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';

    export default {
        data(){
            return{
                selectedFile: null,
                message: ''
            }
        },
        methods: {
            onchangeSelectFile(event){
                this.selectedFile = event.target.files[0]
            },
            uploadfileHandler(){
                if(this.uploadfileHandler == null){
                    this.message= "Please selete File";
                    return 
                }
                var header = {
                    headers:{
                        'Content-Type': 'multipart/form-data'
                    }
                }
                var formData = new FormData
                formData.append("file", this.selectedFile)
                axios
                    .post(
                        "http://localhost:5283/Products/upload",
                        formData,
                        header
                    ).then((res)=>{
                        this.message = "Succeessfully Uploaded" + res.data.filePath
                    }).catch((error) =>{
                        this.message = 'can not upload file' + error
                    })
            }
        }
    }
</script>