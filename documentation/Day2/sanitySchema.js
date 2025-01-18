import { defineType, defineField, defineArrayMember } from "sanity";

// Represents the furniture items available for sale (sofas, chairs, stools, etc.).  

export const products = defineType({
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    defineField(
    {
      name: 'product_id',
      title: 'Product ID',
      type: 'string',
      description: 'Unique identifier for the product',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the product',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category of the product (e.g., sofa, chair, stool)',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the product',
      validation: Rule => Rule.required().positive()
    }),
    defineField(
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Detailed description of the product',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      fields: [
        {
          name: 'height',
          title: 'Height',
          type: 'number',
          description: 'Height of the product (in cm or inches)',
        },
        {
          name: 'width',
          title: 'Width',
          type: 'number',
          description: 'Width of the product (in cm or inches)',
        },
        {
          name: 'depth',
          title: 'Depth',
          type: 'number',
          description: 'Depth of the product (in cm or inches)',
        },
      ]
    }),
    defineField(
    {
      name: 'material',
      title: 'Material',
      type: 'string',
      description: 'Material the product is made from (e.g., wood, leather, metal)',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'color_options',
      title: 'Color Options',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Available color options for the product',
      validation: Rule => Rule.required().min(1)
    }),
    defineField(
    {
      name: 'stock_quantity',
      title: 'Stock Quantity',
      type: 'number',
      description: 'Quantity available in stock',
      validation: Rule => Rule.required().min(0)
    }),
    defineField(
    {
      name: 'customizable',
      title: 'Customizable',
      type: 'boolean',
      description: 'Whether the product is customizable (true/false)',
      validation: Rule => Rule.required()
    }),
    defineField({
        name: "image",
        type: "image",
        title: "Image",
        options: {
          hotspot: true, // Allows image cropping
        },
        fields: [
          {
            name: "alt",
            type: "string",
            title: "Alternative Text",
            description: "Important for SEO and accessibility.",
            validation: (Rule) =>
              Rule.required().error(
                "Alternative text for the image is required."
              ),
          },
        ],
      }),
    // defineField(
    // {
    //   name: 'images',
    //   title: 'Images',
    //   type: 'array',
    //   of: [{ type: 'image' }],
    //   description: 'Images of the product',
    // })
  ]
})

// ---------------------------------------------------------------------------

// Represents the users purchasing furniture (businesses, professionals, restaurants)
import { defineType,  defineField } from 'sanity'

export const customer = defineType({
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    defineField(
    {
      name: 'customer_id',
      title: 'Customer ID',
      type: 'string',
      description: 'Unique identifier for the customer',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name of the customer',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Customers email address',
      validation: Rule => Rule.required().email()
    }),
    defineField(
    {
      name: 'phone_number',
      title: 'Phone Number',
      type: 'string',
      description: 'Customer’s phone number',
      validation: Rule => Rule.required().min(10).max(15)
    }),
    defineField(
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Street',
          type: 'string',
          description: 'Street address of the customer'
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
          description: 'City of the customer'
        },
        {
          name: 'state',
          title: 'State',
          type: 'string',
          description: 'State or region of the customer'
        },
        {
          name: 'zip_code',
          title: 'Zip Code',
          type: 'string',
          description: 'Zip code of the customer'
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
          description: 'Country of the customer'
        }
      ]
    }),
    defineField(
    {
      name: 'customer_type',
      title: 'Customer Type',
      type: 'string',
      description: 'Type of customer (e.g., regular, premium, guest)',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'preferences',
      title: 'Preferences',
      type: 'object',
      fields: [
        {
          name: 'newsletter_subscription',
          title: 'Newsletter Subscription',
          type: 'boolean',
          description: 'Whether the customer has subscribed to the newsletter'
        },
        {
          name: 'preferred_contact_method',
          title: 'Preferred Contact Method',
          type: 'string',
          description: 'Preferred method of communication (e.g., email, phone)',
          options: {
            list: [
              { title: 'Email', value: 'email' },
              { title: 'Phone', value: 'phone' },
              { title: 'SMS', value: 'sms' }
            ]
          }
        },
        {
          name: 'product_preferences',
          title: 'Product Preferences',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Product preferences or categories the customer is interested in'
        }
      ]
    })
  ]
})

// --------------------------------------------------------------------------------------

// Represents purchases made by customers.
import { defineType,  defineField } from 'sanity'

export const order = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField(
    {
      name: 'order_id',
      title: 'Order ID',
      type: 'string',
      description: 'Unique identifier for the order',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'customer_id',
      title: 'Customer ID',
      type: 'string',
      description: 'Unique identifier for the customer who placed the order',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'order_date',
      title: 'Order Date',
      type: 'datetime',
      description: 'The date and time the order was placed',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'total_price',
      title: 'Total Price',
      type: 'number',
      description: 'The total price of the order',
      validation: Rule => Rule.required().positive()
    }),
    defineField(
    {
      name: 'status',
      title: 'Order Status',
      type: 'string',
      description: 'The current status of the order (e.g., pending, shipped, delivered)',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'items',
      title: 'Order Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'product_id',
              title: 'Product ID',
              type: 'string',
              description: 'Unique identifier for the product ordered',
              validation: Rule => Rule.required()
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
              description: 'The quantity of the product ordered',
              validation: Rule => Rule.required().min(1)
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
              description: 'Price of the product at the time of the order',
              validation: Rule => Rule.required().positive()
            }
          ]
        }
      ],
      description: 'A list of items included in the order'
    }),
    defineField(
    {
      name: 'delivery_date',
      title: 'Delivery Date',
      type: 'datetime',
      description: 'Expected or actual delivery date for the order'
    }),
    defineField(
    {
      name: 'payment_method',
      title: 'Payment Method',
      type: 'string',
      description: 'The method used to pay for the order (e.g., credit card, PayPal)',
      validation: Rule => Rule.required()
    })
  ]
})


// --------------------------------------------------------------------
// Represents regions where delivery services are available.

import { defineType,  defineField } from 'sanity'

export const deliveryZoneSchema = defineType({
  name: 'deliveryZone',
  title: 'Delivery Zone',
  type: 'document',
  fields: [
    defineField(
    {
      name: 'zone_id',
      title: 'Zone ID',
      type: 'string',
      description: 'Unique identifier for the delivery zone',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'region_name',
      title: 'Region Name',
      type: 'string',
      description: 'The name of the region (e.g., "North", "Downtown", "Suburbs")',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'delivery_time_estimate',
      title: 'Delivery Time Estimate',
      type: 'string',
      description: 'Estimated delivery time for this zone (e.g., "2-4 days", "1 week")',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'deliverycharge',
      title: 'Delivery Charge',
      type: 'number',
      description: 'Delivery charge for this zone',
      validation: Rule => Rule.required().positive()
    }),
  ]
})

// -----------------------------------------------------------------------------------

// Represents the items a customer is planning to purchase
import { defineType, defineField } from 'sanity'

export const cartSchema = defineType({
  name: 'cart',
  title: 'Cart',
  type: 'document',
  fields: [
    defineField(
    {
      name: 'cart_id',
      title: 'Cart ID',
      type: 'string',
      description: 'Unique identifier for the cart',
      validation: Rule => Rule.required()
    }),
      defineField(
    {
      name: 'customer_id',
      title: 'Customer ID',
      type: 'string',
      description: 'Unique identifier for the customer who owns the cart',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'items',
      title: 'Cart Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'product_id',
              title: 'Product ID',
              type: 'string',
              description: 'Unique identifier for the product in the cart',
              validation: Rule => Rule.required()
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
              description: 'The quantity of the product in the cart',
              validation: Rule => Rule.required().min(1)
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
              description: 'The price of the product in the cart',
              validation: Rule => Rule.required().positive()
            }
          ]
        }
      ],
      description: 'A list of items in the cart',
      validation: Rule => Rule.required().min(1)
    })
  ]
})


// -----------------------------------------------------------------------------------------

// Captures customer feedback on products. 

import { defineType, defineField } from 'sanity'

export const reviewSchema = defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField(
    {
      name: 'review_id',
      title: 'Review ID',
      type: 'string',
      description: 'Unique identifier for the review',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'product_id',
      title: 'Product ID',
      type: 'string',
      description: 'Unique identifier for the product being reviewed',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'customer_id',
      title: 'Customer ID',
      type: 'string',
      description: 'Unique identifier for the customer who wrote the review',
      validation: Rule => Rule.required()
    }),
    defineField(
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating given to the product (e.g., 1 to 5 stars)',
      validation: Rule => Rule.required().min(1).max(5)
    }),
    defineField(
    {
      name: 'comment',
      title: 'Comment',
      type: 'text',
      description: 'Written feedback or review of the product',
    }),
    defineField(
    {
      name: 'review_date',
      title: 'Review Date',
      type: 'datetime',
      description: 'The date when the review was submitted',
      validation: Rule => Rule.required()
    })
  ]
})

// -------------------------------------------------------------------------------------

import { defineType } from 'sanity'

export const adminSchema = defineType({
  name: 'admin',
  title: 'Admin',
  type: 'document',
  fields: [
    {
      name: 'admin_id',
      title: 'Admin ID',
      type: 'string',
      description: 'Unique identifier for the admin',
      validation: Rule => Rule.required()
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name of the admin',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Admin’s email address',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Role of the admin (e.g., Super Admin, Content Manager)',
      validation: Rule => Rule.required(),
      options: {
        list: [
          { title: 'Super Admin', value: 'super_admin' },
          { title: 'Content Manager', value: 'content_manager' },
          { title: 'Order Manager', value: 'order_manager' },
          { title: 'Customer Support', value: 'customer_support' }
        ]
      }
    }
  ]
})
