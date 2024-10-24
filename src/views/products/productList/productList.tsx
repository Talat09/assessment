import React, { useEffect } from "react";
import { Product } from "@/types";
import { useRouter } from "next/navigation";

interface ProductListProps {
  products: Product[];
  onOpenModal: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  onOpenModal,
}) => {
  const router = useRouter();
  const searchParams = new URLSearchParams(window.location.search);
  const productId = searchParams.get('productId');

  // Effect to handle modal opening if `productId` is in the URL
  useEffect(() => {
    if (productId) {
      const selectedProduct = products.find(
        (product) => product.id === productId
      );
      if (selectedProduct) {
        onOpenModal(selectedProduct);
      }
    }
  }, [productId, products, onOpenModal]);

  // Function to open the modal and update the URL
  const handleOpenModal = (product: Product) => {
    router.push(`/products?productId=${product.id}`);
    onOpenModal(product);
  };

 

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="flex border p-2 justify-between">
          <div className="flex">
            <div>{product.id}</div>. {product.name}
          </div>
          <button onClick={() => handleOpenModal(product)}>Details</button>
        </div>
      ))}
    </div>
  );
};