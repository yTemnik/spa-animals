export const requiredField = (value) => {
    if (value) return undefined;

    return "Имя пользователя или пароль введены не верно"
}