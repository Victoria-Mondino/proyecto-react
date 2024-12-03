
import { useParams } from 'react-router'
import { useGetProductById } from '../hooks/useGetProductById'
import { ItemDetailContainer, Loader } from '../components';

export const Item = () => {
    const { id } = useParams();

    const { product, loading } = useGetProductById(id);
  return loading ? <Loader /> : <ItemDetailContainer product={product} />;
};
