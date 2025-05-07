import CarListClient from './CarListClient';

export default async function Page({ params, searchParams }) {
  const { filter } = params;
  const { type } = searchParams;

  try {
    const res = await fetch(`https://carsearch-beryl.vercel.app/api/cars/${filter}?type=${type || ''}`, {
      cache: 'no-store', 
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
