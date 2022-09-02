import { useCountriesQuery } from '../../generated/graphql';
import { Countries } from '../Countries/Countries';

export const CountriesContainer = () => {
  const { data, error, loading } = useCountriesQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <Countries data={data} />;
};
