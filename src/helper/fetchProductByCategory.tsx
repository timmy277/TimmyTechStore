import ApiCenter from "@/api/ApiCenter";
import axios from "axios";


const fetchProductByCategory = async(category: string)=>{
    const response = await axios({
        method: ApiCenter.getProductByCategory.method,
        url: ApiCenter.getProductByCategory.url,
        headers: {
            'content-type': 'application/json',
        },
        data: {category: category},
    });

    const dataResponse = await response.data;

    return dataResponse
}

export default fetchProductByCategory