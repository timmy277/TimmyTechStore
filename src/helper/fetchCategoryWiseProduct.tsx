import ApiCenter from "@/api/ApiCenter";
import axios from "axios";



const fetchCategoryWiseProduct = async(category: string)=>{
    const response = await axios({
        method: ApiCenter.categoryWiseProduct.method,
        url: ApiCenter.categoryWiseProduct.url,
        headers: {
            'content-type': 'application/json',
        },
        data: {category: category},
    });

    const dataResponse = await response.data;

    return dataResponse
}

export default fetchCategoryWiseProduct