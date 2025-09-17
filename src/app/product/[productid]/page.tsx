export default function ProductDetails({ params }: { params: { productid: string } }) {
  const productid = params.productid;
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Details about product {productid}
      </h1>
    </div>
  );
}
