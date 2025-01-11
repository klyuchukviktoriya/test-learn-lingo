export const selectUser = state => state.auth.user; // Возвращает объект пользователя
export const selectToken = state => state.auth.token; // Возвращает токен
export const selectIsLoggedIn = state => state.auth.isAuthenticated;
export const selectIsRefreshing = state => state.auth.isRefreshing; // Статус обновления (опционально)

