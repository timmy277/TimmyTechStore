import ApiCenter from "@/api/ApiCenter"
import { notification } from "antd"
import axios from "axios"
import { MouseEvent } from "react"


const addToCart = async (e: MouseEvent<HTMLButtonElement>, id: string) => {
    e?.stopPropagation()
    e?.preventDefault()

    const response = await axios({
        method: ApiCenter.addToCart.method,
        url: ApiCenter.addToCart.url,
        withCredentials: true,
        headers: {
            'content-type': 'application/json',
        },
        data: { productId: id },
    });

    const dataResponse = await response.data;

    if (dataResponse.success) {
        notification.success({
            message: 'Success',
            description: dataResponse.message,
        });
    }

    if (dataResponse.error) {
        notification.error({
            message: 'Error',
            description: dataResponse.message,
        });
    }

    return dataResponse

}


export default addToCart