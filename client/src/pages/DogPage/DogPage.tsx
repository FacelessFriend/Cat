import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchDog } from '../../services/apiDog';
import ButtonAnimal from '../../components/buttonAnimal/buttonAnimal';

const DogPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((state) => state.animals.dog);

  const loadNewDog = () => {
    dispatch(fetchDog());
  };

  useEffect(() => {
    loadNewDog();
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No dog found</div>;

  return (
    <div>
      <h1>Собачки</h1>
      <img 
        src={data.message} 
        alt="Random dog" 
        style={{ maxWidth: '800px', maxHeight: '600px' }}
      />
      <ButtonAnimal onNext={loadNewDog} />
    </div>
  );
};

export default DogPage;