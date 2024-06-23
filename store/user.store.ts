import { defineStore } from "pinia";
import {
  type UserBodyRequest,
  UserBodyRequestValidation,
  UserLoginValidation,
  type UserLoginRequest,
} from "~/lib/schemas/user.schema";
import axios from "axios";

export const useUserStore = defineStore("user", {
  actions: {
    async send(data: UserBodyRequest) {
      const validData = await UserBodyRequestValidation.validate(data).catch(
        (e) => {
          throw e;
        }
      );
      const result = await axios
        .post("http://localhost:8000/auth/register", validData)
        .catch((e) => {
          throw new Error(e.response.data.message);
        });
      return result.data;
    },

    async login(data: UserLoginRequest) {
      const validData = await UserLoginValidation.validate(data).catch((e) => {
        throw e;
      });
      const result = await axios
        .post("http://localhost:8000/auth/login", validData)
        .catch((e) => {
          throw new Error(e.response.data.message);
        });
      return result.data;
    },
  },
});
