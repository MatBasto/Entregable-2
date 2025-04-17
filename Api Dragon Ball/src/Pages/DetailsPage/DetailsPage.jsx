import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import CustomCard from '../../Components/CustomCard/CustomCard';

const DetailsPage = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://dragonball-api.com/api/characters/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener los datos del personaje');
        }
        return response.json();
      })
      .then(json => {
        console.log("Datos recibidos:", json); // Para depuración
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4, color: 'error.main' }}>
        <Typography variant="h5">Error: {error}</Typography>
      </Box>
    );
  }

  if (!data || Object.keys(data).length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h5">No se encontraron datos para este personaje</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <CustomCard user={data} isDetail={true} />
    </Box>
  );
};

export default DetailsPage;