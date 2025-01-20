// pages/products/index.js

import { fetchAllProducts } from '../../api';
import Link from 'next/link';

const ProductsList = ({ products }) => {
  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>{product.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const products = await fetchAllProducts();

    return {
      props: { products },
    };
  } catch (error) {
    console.error(error);
    return { props: { products: [] } };
  }
}

export default ProductsList;
