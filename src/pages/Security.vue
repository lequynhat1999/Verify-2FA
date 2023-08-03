<template>
    <h1>Page Enable 2FA</h1>
    <img :src="srcQRCode">
    <br>
    <button @click="getQRCode">Get QR Code</button>
    <br>
    <router-link to="/2fa">Redirct to 2FA</router-link>
    <br>
    <router-link to="/login">Back to login</router-link>
    <br>
    <router-link to="/">Back to home</router-link>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

const srcQRCode = ref<string>();
async function getQRCode()
{
    const res = await axios.get('http://localhost:8080/connect-2fa');
    if(res)
    {
        srcQRCode.value = res.data.imageQR;
    }
}
</script>