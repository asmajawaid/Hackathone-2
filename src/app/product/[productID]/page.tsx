// pages/products/[productId].js

// import { useRouter } from 'next/router';
// import { fetchProductData } from '../../api';
// import { Product } from '../../../../data.ts/product';

// const ProductPage = ({ product }) => {
//   if (!product) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>{product.description}</p>
//       <p>Price: ${product.price}</p>
//       {/* Render other product details here */}
//     </div>
//   );
// };

// Fetch the data for the product when the page is requested
// export async function getServerSideProps({ params }) {
//   const { productId } = params;

//   try {
//     const product = await fetchProductData(productId);

//     return {
//       props: { product },
//     };
//   } catch (error) {
//     console.error(error);
//     return { props: { product: null } };
//   }
// }

// export default ProductPage;
