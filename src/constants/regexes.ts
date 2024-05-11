export const passwordRegex = {
  regex: /^(?=(.*[a-zA-Z]){1})(?=(.*[0-9]){1})([a-zA-Z0-9@#$%^!&+=*.\-_]){6,}$/,
    message: "1 letter, 1 number, 6 characters",
};

export const phoneRegex = {
  regex: /^\+375\d{9}$/,
  message: "+375xxxxxxxxxx (9 digits)",
}
