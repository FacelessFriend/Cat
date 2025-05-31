import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchCat } from '../../services/apiCat';
import ButtonAnimal from '../../components/buttonAnimal/buttonAnimal';

const CatPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((state) => state.animals.cat);

  const loadNewCat = () => {
    dispatch(fetchCat());
  };

  useEffect(() => {
    loadNewCat();
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || data.length === 0) return <div>No cat found</div>;

  return (
    <div>
      <h1>Котики</h1>
      <img 
        src={data[0].url} 
        alt="Random cat" 
        style={{ maxWidth: '640px', maxHeight: '480px' }}
      />
      <ButtonAnimal onNext={loadNewCat} />
    </div>
  );
};

export default CatPage;