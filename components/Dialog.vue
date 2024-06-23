<template>
  <v-dialog v-model="localIsShow" width="auto">
    <v-card max-width="400" :prepend-icon="icon" :title="title">
      <v-card-text v-if="messageIsString">
        {{ message }}
      </v-card-text>
      <v-list v-else dense>
        <v-list-item v-for="error in Object.keys(message)" :key="error">
          <v-list-item-title class="text-wrap"
            >{{ error }} : {{ message[error][0] }}</v-list-item-title
          >
        </v-list-item>
      </v-list>
      <template v-slot:actions>
        <v-btn class="ms-auto" @click="closeDialog">OK</v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from "vue";
let props = defineProps({
  isShow: Boolean,
  title: {
    type: String,
  },
  message: {
    type: [String, Object],
  },
  icon: {
    type: String,
  },
});

const emit = defineEmits(["update:isShow"]);
const localIsShow = ref(props.isShow);

watch(
  () => props.isShow,
  (newVal) => {
    localIsShow.value = newVal;
  }
);
const closeDialog = () => {
  localIsShow.value = false;
  emit("update:isShow", false);
};

const messageIsString = ref(typeof props.message === "string");
watch(
  () => props.message,
  (newVal) => {
    messageIsString.value = typeof newVal === "string";
  }
);
</script>
