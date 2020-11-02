// import Cookies from 'js-cookie'

const TokenKey = 'fine_token'
const UserInfoKey = 'fine_user_info'
const permissionListKey = 'fine_permission_list'
// get
// export function getToken() {return Cookies.get(TokenKey)}
export function getToken() { return localStorage.getItem(TokenKey) }
// export function getUserInfo() {return Cookies.getJSON(UserInfoKey)}
export function getUserInfo() { return localStorage.getItem(UserInfoKey) ? JSON.parse(localStorage.getItem(UserInfoKey)) : null }
// export function getPermissionList() { return Cookies.getJSON(permissionListKey) }
export function getPermissionList() { return localStorage.getItem(permissionListKey) ? JSON.parse(localStorage.getItem(permissionListKey)) : null }
// set
// export function setToken(token) { return Cookies.set(TokenKey, token) }
export function setToken(token) { return localStorage.setItem(TokenKey, token) }
// export function setUserInfo(data) { return Cookies.set(UserInfoKey, data) }
export function setUserInfo(data) { return localStorage.setItem(UserInfoKey, JSON.stringify(data)) }
// export function setPermissionList(data) { return Cookies.set(permissionListKey, data) }
export function setPermissionList(data) { return localStorage.setItem(permissionListKey, JSON.stringify(data)) }
// remove
// export function removeToken() { return Cookies.remove(TokenKey) }
export function removeToken() { return localStorage.removeItem(TokenKey) }
// export function removeUserInfo() { return Cookies.remove(UserInfoKey) }
export function removeUserInfo() { return localStorage.removeItem(UserInfoKey) }
// export function removePermissionList() { return Cookies.remove(permissionListKey) }
export function removePermissionList() { return localStorage.removeItem(permissionListKey) }
