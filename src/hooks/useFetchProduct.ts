
import { useEffect, useState } from 'react';
import fetchProductByCategory from '@/helper/fetchProductByCategory';

interface Product {
    _id: string;
    productName: string;
    category: string;
    productImage: string[];
    sellingPrice: number;
    price: number;
}

export const useFetchProductsByCategory = (category: string) => {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        const categoryProduct = await fetchProductByCategory(category);
        console.log(categoryProduct)
        setLoading(false);
        setData(categoryProduct?.data);
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return { data, loading };
};
