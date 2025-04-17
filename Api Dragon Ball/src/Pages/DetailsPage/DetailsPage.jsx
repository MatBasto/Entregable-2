import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CustomCard from '../../components/CustomCard/CustomCard';

const DetailsPage = () => {
  const [data, setData] = useState({});

  let { id } = useParams();

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/character/${id}`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <CustomCard user={data} isDetail={true} />
  );
};

export default DetailsPage;

