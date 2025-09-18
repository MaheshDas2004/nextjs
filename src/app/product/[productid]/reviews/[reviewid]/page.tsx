export default function ProductReview({ params }: { params: { productid: string; reviewid: string } }) {
  const { productid, reviewid } = params;
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Review {reviewid} for product {productid}
      </h1>
    </div>
  );
}