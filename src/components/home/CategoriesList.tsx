import { useEffect, useState } from 'react';

type Category = {
  id: number;
  coverFile: string;
  title: string;
  icon: string;
  image: string;
  color: string;
  subcategories: Array<{
    id: number;
    title: string;
    icon: string;
    image: string;
    subcategories: Array<{
      id: number;
      title: string;
      image: string;
    }>;
  }>;
};

type Props = {};

const CategoriesList = (props: Props) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://mocki.io/v1/06333eb5-3de3-4b3c-b18f-7d9cc52cda79');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="my-4">
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 my-2">
        {categories.map((c) => (
          <div key={c.id} className="h-48">
            <img
              src={`categories/${c.coverFile}`}
              className="mx-auto h-full w-full object-contain"
              alt={c.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesList;
