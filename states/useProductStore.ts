import {create} from 'zustand';
import { Products } from '../const/types/products';

interface ProductState {
    products: Products[];
    addProduct: (product: Products) => void;
    updateProduct: (updatedProduct: Products) => void;
    removeProduct: (id: string) => void;
    setProducts: (products: Products[]) => void;
}

const useProductStore = create<ProductState>((set) => ({
    products: [],
    addProduct: (product) =>
        set((state) => ({
            products: [...state.products, product],
        })),
    updateProduct: (updatedProduct) =>
        set((state) => ({
            products: state.products.map((product) =>
                product.id === updatedProduct.id ? { ...product, ...updatedProduct } : product
            ),
        })),
    removeProduct: (id) =>
        set((state) => ({
            products: state.products.filter((product) => product.id !== id),
        })),
    setProducts: (products) =>
        set(() => ({
            products,
        })),
}));

export default useProductStore;
