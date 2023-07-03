export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.IsLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter.filter;
export const selectUser = state => state.auth.user.name;
export const selectIsAuthorized = state => state.auth.isAuthorized;
export const selectIsRefreshing = state => state.auth.isRefreshing;
