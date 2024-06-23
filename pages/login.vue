<template>
  <SignIn @submit="onSubmit" :loading="isDone" />
  <Dialog
    v-model:isShow="dialog"
    :title="title"
    :message="message"
    :icon="icon"
  />
</template>

<script lang="ts" setup>
import { type UserLoginRequest } from "@/lib/schemas/user.schema";
import { ref } from "vue";
import { useUserStore } from "@/store/user.store";
const userStore = useUserStore();

let isDone = ref(false);
let dialog = ref(false);
let title = ref("Success");
let message = ref("User Added");
let icon = ref("mdi-message-alert");

const onSubmit = function (data: UserLoginRequest) {
  isDone.value = true;
  userStore
    .login({
      username: data.username,
      password: data.password,
    })
    .then((res: any) => {
      title.value = "Success";
      icon.value = "mdi-checkbox-marked-circle-outline";
      message.value = `Selamat Datang ${res.name}`;
      dialog.value = true;
      isDone.value = false;
    })
    .catch((e) => {
      message.value = e.message;
      title.value = "Failed";
      icon.value = "mdi-message-alert";
      dialog.value = true;
      isDone.value = false;
    });
};
</script>
