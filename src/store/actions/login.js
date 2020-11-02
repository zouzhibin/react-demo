import * as types from '../types'


export default {
    login(data){
        return {
            type:types.SET_USERINFO,
            payload:data
        }
    }
}