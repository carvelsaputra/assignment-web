import { defineStore } from "pinia";
import {
  type UserBodyRequest,
  UserBodyRequestValidation,
} from "~/lib/schemas/user.schema";
export const useUserStore = defineStore("user", {
  actions: {
    /**
     * store user to backend
     *
     */
    async send(data: UserBodyRequest) {
      const validData = await UserBodyRequestValidation.validate(data).catch(
        (e) => {
          throw e;
        }
      );
      return validData;
    },
  },
});
