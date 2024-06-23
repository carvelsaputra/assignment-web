import { string, object, type InferType } from "yup";

export const UserBodyRequestValidation = object().shape({
  name: string().min(2, "Name needs to be at least 2 characters."),
  username: string().min(4, "Username needs to be at least 4 characters"),
  password: string()
    .min(6, "Password needs to be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=)/,
      "Must Contain One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});
export const UserLoginValidation = object().shape({
  username: string().min(4, "Username needs to be at least 4 characters"),
  password: string()
    .min(6, "Password needs to be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=)/,
      "Must Contain One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

export type UserBodyRequest = InferType<typeof UserBodyRequestValidation>;
export type UserLoginRequest = InferType<typeof UserLoginValidation>;
