<template>
    <h1>Page 2FA Verify</h1>
    <br>
    <input v-model="otpVal" type="text">
    <br>
    <button @click="handleVerify2FA">Verify</button>
    <br>
    <router-link to="/login">Back to login</router-link>
    <br>
    <router-link to="/">Back to home</router-link>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
const otpVal = ref<string>();
async function handleVerify2FA(){
    let isValidOTP = await axios.post('http://localhost:8080/verify-2fa', { otp: otpVal.value});
    if (isValidOTP.data.success) {
        alert("Xác thực thành công");
    } else {
        alert("Xác thực thất bại, vui lòng thử lại");
    }
}
</script>