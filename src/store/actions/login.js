import * as types from '../types'
import {loginRequest} from '../../api/user'
 
export default {
    login(data){
        return function(dispatch,state){
            (async function(){
                try{
                    let data = await loginRequest(data)

                }catch(err){

                }
            })()
        }
        // return {
        //     type:types.SET_USERINFO,
        //     payload:data
        // }
    }
}