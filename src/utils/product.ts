// type product = {
//     "product_id": "string",             // Unique identifier for the product
//     "name": "string",                   // Name of the product
//     "category": "string",               // Category (e.g., sofa, chair, stool)
//     "price": "number",                  // Price of the product
//     "description": "string",            // Detailed description of the product
//     "dimensions": {                     // Product dimensions (height, width, depth)
//       "height": "number",               // Height in cm or inches
//       "width": "number",                // Width in cm or inches
//       "depth": "number"                 // Depth in cm or inches
//     },
//     "material": "string",               // Primary material the product is made from
//     "color_options": [                  // Array of color options
//       "string"
//     ],
//     "stock_quantity": "number",         // Quantity available in stock
//     "customizable": "boolean",          // Whether the product is customizable (true/false)
//     "images": [                         // Array of image URLs for the product
//       "string"
//     ]
//   }
  

// types/product.ts

// export interface Product {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   // Add more fields based on your API response
// }