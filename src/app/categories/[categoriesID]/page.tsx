// pages/categories/[categoryId].js

// import { useRouter } from 'next/router';
// import { fetchCategoryData } from '../../lib/api';

// const CategoryPage = ({ category }) => {
//   if (!category) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <h1>{category.name}</h1>
//       <p>{category.description}</p>
//       {/* Render other category details or list of products */}
//     </div>
//   );
// };

// Fetch the data for the category when the page is requested
// export async function getServerSideProps({ params }) {
//   const { categoryId } = params;

//   try {
//     const category = await fetchCategoryData(categoryId);

//     return {
//       props: { category },
//     };
//   } catch (error) {
//     console.error(error);
//     return { props: { category: null } };
//   }
// }

// export default CategoryPage;
