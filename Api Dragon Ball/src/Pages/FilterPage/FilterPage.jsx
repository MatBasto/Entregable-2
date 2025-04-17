import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CustomCard from '../../components/CustomCard/CustomCard';

const FilterPage = () => {
  const { especie } = useParams(); // Será "Male" o "Female"
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFiltered = async () => {
      let allChars = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const res = await fetch(`https://dragonball-api.com/api/characters?page=${page}`);
        const json = await res.json();

        if (json.items?.length) {
          allChars = allChars.concat(json.items);
          page++;
        } else {
          hasMore = false;
        }
      }

      const filtrados = allChars.filter((item) =>
        item.gender?.toLowerCase() === especie.toLowerCase()
      );

      setData(filtrados);
    };

    fetchFiltered();
  }, [especie]);

  return (
    <main>
      {data.map((item) => (
        <Link to={`/details/${item.id}`} key={item.id}>
          <CustomCard user={item} />
        </Link>
      ))}
    </main>
  );
};

export default FilterPage;
