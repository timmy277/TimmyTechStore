
import { useEffect, useState } from "react";
import axios from "axios";
import ApiCenter from "@/api/ApiCenter";

interface Product {
    category: string;
    productImage: string[];
}

export const useFetchCategoryProduct = () => {
    const [categoryProduct, setCategoryProduct] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchCategoryProduct = async () => {
        setLoading(true);
        const response = await axios({
            method: ApiCenter.categoryProduct.method,
            url: ApiCenter.categoryProduct.url,
        });
        const dataResponse = response.data;
        setLoading(false);
        setCategoryProduct(dataResponse.data);
    };

    useEffect(() => {
        fetchCategoryProduct();
    }, []);

    return { categoryProduct, loading };
};
