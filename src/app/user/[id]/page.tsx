export default function IdPage({ params }: { params: { id: string } }) {
  return <p>{params.id}</p>;
}
