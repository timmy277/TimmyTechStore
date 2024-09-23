import ApiCenter from "@/api/ApiCenter"
import axios from "axios"
import { MouseEvent } from "react"
import { toast } from 'react-toastify'

const addToCart = async(e: MouseEvent<HTMLButtonElement>, id: string) =>{
    e?.stopPropagation()
    e?.preventDefault()

    const response = await axios({
        method: ApiCenter.addToCart.method,
        url: ApiCenter.addToCart.url,
        withCredentials: true,
        headers: {
            'content-type': 'application/json',
        },
        data: { productId : id },
    });

    const dataResponse = await response.data;

    if(dataResponse.success){
        toast.success(dataResponse.message)
    }

    if(dataResponse.error){
        toast.error(dataResponse.message)
    }

    return dataResponse

}


export default addToCart