import requset from '@/utils/requset'

export const login = (params)=>{
    return requset({
        url:"/login",
        params,
    }).then(response=>{
        return response;
    }).catch(error=>error);
}
