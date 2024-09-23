const backendDomain = "http://localhost:8080";

const ApiCenter = {
    signUp: {
        url: `${backendDomain}/api/signup`,
        method: "post",
    },
    signIn: {
        url: `${backendDomain}/api/signin`,
        method: "post",
    },
    current_user: {
        url: `${backendDomain}/api/user-details`,
        method: "get",
    },
    logOut: {
        url: `${backendDomain}/api/logout`,
        method: "get",
    },
    allUsers: {
        url: `${backendDomain}/api/all-users`,
        method: "get",
    },
    allProducts: {
        url: `${backendDomain}/api/all-products`,
        method: "get",
    },
    updateUser: {
        url: `${backendDomain}/api/update-users`,
        method: "post",
    },
    uploadProduct: {
        url: `${backendDomain}/api/upload-product`,
        method: "post",
    },
    getAllProduct: {
        url: `${backendDomain}/api/get-product`,
        method: "get",
    },
    updateProduct: {
        url: `${backendDomain}/api/update-product`,
        method: "post",
    },
    categoryProduct: {
        url: `${backendDomain}/api/get-category-product`,
        method: "get",
    },
    categoryWiseProduct: {
        url: `${backendDomain}/api/category-product`,
        method: "post",
    },
    productDetail: {
        url: `${backendDomain}/api/product-detail`,
        method: "post",
    },
    addToCart: {
        url: `${backendDomain}/api/add-to-cart`,
        method: "post",
    },
    countProductInCart: {
        url: `${backendDomain}/api/count-productInCart`,
        method: "get",
    },
    getProductInCart : {
        url: `${backendDomain}/api/get-productInCart`,
        method: "get",
    },
    updateProductInCart : {
        url: `${backendDomain}/api/update-productInCart`,
        method: "post",
    },
    deleteProductInCart : {
        url: `${backendDomain}/api/delete-productInCart`,
        method: "post",
    },
    searchProduct: {
        url: `${backendDomain}/api/search-product`,
        method: "get",
    },
    filterProduct: {
        url: `${backendDomain}/api/filter-product`,
        method: "post",
    },
}

export default ApiCenter