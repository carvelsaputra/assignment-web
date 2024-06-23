<template>
  <v-container>
    <h1>Daftar Pengguna</h1>
    <v-form @submit.prevent="onSubmit" v-model="formValid">
      <v-text-field
        :model-value="user.name.value"
        @input="formChanged('name', $event)"
        label="Name"
        :error-messages="errors.name"
      ></v-text-field>
      <v-text-field
        :model-value="user.username.value"
        @input="formChanged('username', $event)"
        label="Username"
        :error-messages="errors.username"
      ></v-text-field>
      <v-text-field
        :model-value="user.password.value"
        @input="formChanged('password', $event)"
        label="Password"
        :error-messages="errors.password"
        :type="clickedEye ? 'text' : 'password'"
        :append-icon="clickedEye ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="clickedEye = !clickedEye"
      ></v-text-field>

      <v-btn
        :loading="computedLoading"
        color="primary"
        type="submit"
        :disabled="!formValid"
        >Submit</v-btn
      >
    </v-form>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, toRaw, watch, computed } from "vue";
import { useForm } from "vee-validate";
import { UserBodyRequestValidation } from "@/lib/schemas/user.schema";
let props = defineProps<{
  loading?: boolean;
}>();
const emit = defineEmits<{
  submit: [data: typeof user.value];
}>();
const clickedEye = ref(false);
const user = defineModel({
  default: {
    name: "",
    username: "",
    password: "",
  },
});

const { errors, setValues, handleSubmit } = useForm<typeof user.value>({
  validationSchema: UserBodyRequestValidation,
});
const formValid = ref(false);

watch(
  () => {
    const allValuesAreEmpty = Object.values(user.value).every(
      (value) => value === "" || value === undefined
    );
    return allValuesAreEmpty;
  },
  (newValue) => {
    formValid.value = !newValue;
  }
);

const onSubmit = handleSubmit((values: typeof user.value) => {
  emit("submit", toRaw(values));
});

const localLoading = ref(false);

watch(
  () => props.loading,
  (newLoading) => {
    localLoading.value = newLoading;
  }
);

const computedLoading = computed(() => props.loading || localLoading.value);

function formChanged(key: keyof typeof user.value, event: any) {
  user.value[key] = event.target.value;
  setValues({
    [key]: user.value[key],
  });
}
</script>
