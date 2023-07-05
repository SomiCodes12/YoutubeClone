import axios from "axios"

const url = axios.create(
    {
        baseURL : "http://localhost:2000"
    }
)

export const getAllUsers = async ()=>{
    try {
        return await url.get("/data").then((res)=>{
             return res.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const CreateUser = async (data : any)=>{
    try {
        return await url.post("/data" , data).then((res)=>{
            return res.data
        })
    } catch (error) {
        console.log(error);
        
    }
}