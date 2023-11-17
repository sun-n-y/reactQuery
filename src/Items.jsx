import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils';

const Items = ({ items }) => {
  const { isLoading, data } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch.get('/'),
  });

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>loading...</p>;
  }

  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Items;
