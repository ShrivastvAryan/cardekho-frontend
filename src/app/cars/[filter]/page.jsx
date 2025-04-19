import CarListClient from './CarListClient';

export default async function Page({ params, searchParams }) {
  const { filter } = params;
  const { type } = searchParams;

  try {
    const res = await fetch(`http://localhost:3000/api/cars/${filter}?type=${type || ''}`, {
      cache: 'no-store', // ensures fresh data on every request (like getServerSideProps)
    });

    if (!res.ok) {
      throw new Error('Failed to fetch');
    }

    const data = await res.json();
    const cars = Array.isArray(data) ? data : [data];

    return <CarListClient cars={cars} />;
  } catch (err) {
    return <CarListClient cars={[]} error={err.message} />;
  }
}
