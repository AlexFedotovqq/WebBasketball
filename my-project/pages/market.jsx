const products = [
  {
    id: 1,
    name: "Market Smiley 50th Anniversary Splatter Basketball Ball by Mr. A",
    href: "/Item01",
    price: "$64",
    description: "",
    options: "Pink",
    imageSrc:
      "https://footdistrict.com/media/resize/840x1050/catalog/product/2/5/25_360000663-PNK-Unica/market-smiley-50th-anniversary-splatter-basketball-ball-by-mr-a-360000663-pnk-0.jpg",
    imageAlt: "funny basketball ball",
  },
  {
    id: 2,
    name: "Nike Dri-FIT DNA+",
    href: "/Item02",
    price: "$58",
    description: "",
    options: "Black,Blue,Orange",
    imageSrc:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/262abb20-c3fa-43e2-a9ec-b9d8bcb16072/dri-fit-dna-mens-basketball-shorts-5f2V5m.png",
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
];

export default function Example() {
  return (
    <div className="bg-gray-200">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                />
              </div>
              <div className="flex flex-1 flex-col space-y-2 p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <div className="flex flex-1 flex-col justify-end">
                  <p className="text-sm italic text-gray-500">
                    {product.options}
                  </p>
                  <p className="text-base font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
