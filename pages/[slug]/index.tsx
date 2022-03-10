export async function getServerSideProps({ query }) {
  const { slug } = query;
  return {
    props: { slug },
  };
}

export default function Movie({ slug }) {
  return <div>Hello {slug}</div>;
}
