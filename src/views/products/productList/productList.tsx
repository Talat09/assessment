import React, { useEffect } from "react";
import { Product } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";

interface ProductListProps {
  products: Product[];
  onOpenModal: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  onOpenModal,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Effect to handle modal opening if `productId` is in the URL
  useEffect(() => {
    const productId = searchParams.get('productId');
    if (productId) {
      const selectedProduct = products.find(
        (product) => product.id === productId
      );
      if (selectedProduct) {
        onOpenModal(selectedProduct);
      }
    }
  }, [products, onOpenModal, searchParams]);

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
