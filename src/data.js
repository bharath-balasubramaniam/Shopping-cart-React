const data = [
  {
    id: 1,
    product_name: "Primier",
    product_price: 930,
    product_description:
      "A light oil free emulsion that helps conceal visible pores while controlling oil.",
    product_rating: "★ ★ ★ ★ ☆",
    product_image:
      "https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_SK6R01_640x600_0.jpg",
  },
  {
    id: 2,
    product_name: "Concealer",
    product_price: 695,
    product_description:
      "Creates resistant, blendable and buildable formula concealer provides natural coverage",
    product_rating: "★ ★ ★ ☆ ☆",
    product_image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    product_name: "Foundation",
    product_price: 2900,
    product_description:
      "Oil control upto 8 hours and this formula lasts for a full 24 hours.",
    product_rating: "★ ★ ★ ★ ★",
    product_image:
      "https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_SCA601_640x600_0.jpg",
  },
  {
    id: 4,
    product_name: "High lighter",
    product_price: 3100,
    product_description:
      "Extra dimension skinfinish adds the perfect glow to skin.",
    product_rating: "★ ★ ★ ★ ☆",
    product_image:
      "https://2.bp.blogspot.com/-8PYvbpqubQo/XFIHcUGyR8I/AAAAAAABzV8/hOzZcOfXEhMX_yUPqf6iUTSFrQrg3N10gCLcBGAs/s1600/BTLA%2BLuminous%2BHighlighter%2BDrop%2BReview%2B1.jpg",
  },
  {
    id: 5,
    product_name: "Eye Shadow",
    product_price: 5375,
    product_description:
      "A revolution eyeshadow palette with 18 unique shadows.",
    product_rating: "★ ★ ★ ☆ ☆",
    product_image:
      "https://i.pinimg.com/originals/26/1d/2c/261d2c62479eb0338becc7d49ee4974d.png",
  },
  {
    id: 6,
    product_name: "Eye liner",
    product_price: 2500,
    product_description: "Add a painterly touch to eye liner applications.",
    product_rating: "★ ★ ☆ ☆ ☆",
    product_image:
      "https://www.maccosmetics.com/media/export/cms/products/640x600/mac_sku_SGFK03_640x600_0.jpg",
  },
  {
    id: 7,
    product_name: "Lip Stick",
    product_price: 2200,
    product_description:
      "You feel it. powder kiss now includes a liquid lipcolor to give you the blurred high-impact matte look.",
    product_rating: "★ ★ ★ ★ ★",
    product_image:
      "https://i.pinimg.com/originals/b5/ae/5d/b5ae5d327b0be27590e48a2c7b3db500.jpg",
  },
];

export default data;
