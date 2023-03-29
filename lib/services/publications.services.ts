import useSWR from 'swr';
import { PublicationsResponse } from '../interfaces/publications.interface';

function usePublications() {
  const { data, error, isLoading, mutate } =
    useSWR<PublicationsResponse>('/publications/');
  return {
    data: data?.results,
    error,
    isLoading,
    mutate,
  };
}

// function getPublications() {
//   return axios.get('https://paracuando-academlo-api.academlo.tech/api/v1/publications/');
// }

export { usePublications };
