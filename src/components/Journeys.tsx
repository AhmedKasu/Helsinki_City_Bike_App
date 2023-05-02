import { useQuery } from '@apollo/client';
import { GET_JOURNEYS } from '../graphql/queries';

const Journeys = () => {
  const { data } = useQuery(GET_JOURNEYS, { fetchPolicy: 'cache-and-network' });
  console.log('journeys', data);

  return <div>journeys </div>;
};

export default Journeys;
