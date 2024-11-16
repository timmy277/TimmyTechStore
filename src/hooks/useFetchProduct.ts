// hooks/useFetchProducts.ts
import { useEffect, useState } from 'react';
import fetchCategoryWiseProduct from '@/helper/fetchCategoryWiseProduct';

interface Product {
    _id: string;
    productName: string;
    category: string;
    productImage: string[];
    sellingPrice: number;
    price: number;
}

export const useFetchProducts = (category: string) => {
    const [data, setData] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        const categoryProduct = await fetchCategoryWiseProduct(category);
        setLoading(false);
        setData(categoryProduct?.data);
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    return { data, loading };
};
