// Dynamic metadata for each product
export async function generateMetadata(props) {
  const { id } = await props.params; // FIX

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return {
    title: `${product.title} - Products Store`,
    description: product.description,
  };
}

export default async function ProductDetails(props) {
  const { id } = await props.params; // FIX

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ₹{product.price}</p>
      <img src={product.thumbnail} width={200} />
    </div>
  );
}
