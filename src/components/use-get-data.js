import { useQuery } from 'react-query';
import axios from 'axios';

export const useGetData = () => {
  const query = 'getData';

  const { isLoading, isError, data, error, refetch, isSuccess } = useQuery(
    query,
    async () => {
      const { data } = await axios(
        'https://run.mocky.io/v3/c88db14a-3128-4fbd-af74-1371c5bb0343'
      );
      return data;
    }
  );

  return {
    data,
    isError,
    isLoading,
    error,
    refetch,
    isSuccess,
  };
};

export default useGetData;
