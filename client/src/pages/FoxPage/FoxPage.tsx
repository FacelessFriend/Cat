import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchFox } from '../../services/apiFox';
import ButtonAnimal from '../../components/buttonAnimal/buttonAnimal';

const FoxPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, status, error } = useAppSelector((state) => state.animals.fox);

  const loadNewFox = () => {
    dispatch(fetchFox());
  };

  useEffect(() => {
    loadNewFox();
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No dog found</div>;

  return (
    <div>
      <h1>Лисички</h1>
      <img 
        src={data.image} 
        alt="Random fox" 
        style={{ maxWidth: '800px', maxHeight: '600px' }}
      />
      <ButtonAnimal onNext={loadNewFox} />
    </div>
  );
};

export default FoxPage;