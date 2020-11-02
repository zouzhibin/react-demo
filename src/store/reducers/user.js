import types from './types'

import { 
    getToken, 
    setToken, 
    removeToken,
    getUserInfo,
    getPermissionList,
    setUserInfo,
    setPermissionList,
    removeUserInfo,
    removePermissionList } from '@/utils/auth'
import md5 from 'js-md5'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    userInfo:getUserInfo()||{},
    permissionList: getPermissionList()||[]
  }
}




export default function user(state=getDefaultState(),action){
    switch(action.type){

    }
    return state
}