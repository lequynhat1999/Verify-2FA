<template>
    <div>
        <label>Username</label>
        <input type="text" style="margin-left: 12px;" v-model="formData.username">
        <hr>
        <label for="">Password</label>
        <input type="password" style="margin-left: 12px;" v-model="formData.password">
        <hr>
        <button @click="handleSubmitForm">Login</button>
        <button style="margin-left: 12px;" @click="handleAutoFill">Auto Fill</button>
    </div>
    <router-link to="/">Back to home</router-link>
</template>

<script setup lang="ts">
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from 'vue-router';
const formData = reactive({
    username: "",
    password: "",
});

const router = useRouter();

async function handleSubmitForm()
{
    try {
        await axios.post('http://localhost:8080/login', formData).then(res => {
            if(res?.data.isEnable2FA)
            {
                router.push('/2FA');
            }
            else
            {
                router.push('/security');
            }
        })
    } catch (error) {
        console.error(error);
    }
}

function handleAutoFill()
{
    formData.username = 'lqnhat';
    formData.password = 'lqnhat1';
}
</script>