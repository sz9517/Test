export const usernameRegex = /^[a-zA-Z0-9]+$/; // username只能是英文和數字
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; // 密碼必須包含大小寫英文字母和數字，且長度至少8位
