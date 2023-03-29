import axios from 'axios';
import useSWR from 'swr';

 /* function getUser() {
const { data, error, isLoading } = useSWR(
    `https://paracuando-academlo-api.academlo.tech/api/v1/users`
  );

  return {
    data,
    isLoading,
    error,
  };
}
function getUserId() {
    const { data, error, isLoading } = useSWR(
      `https://paracuando-academlo-api.academlo.tech/api/v1/users/{userID}`
    );
    return {
        data,
        isLoading,
        error,
      };
  }*/
  function putUser() {
    return axios.put(
      `https://paracuando-academlo-api.academlo.tech/api/v1/users/{userID}`
    );
  }
  
function postUserImage() {
  return axios.post(
    `https://paracuando-academlo-api.academlo.tech/api/v1/users/{userID}/add-image`
  );
}

function deleteUser() {
    return axios.delete(
      `https://paracuando-academlo-api.academlo.tech/api/v1/users/{userID}/votes`
    );
  }

  /*function getUserVotes() {
    const { data, error, isLoading } = useSWR(
      `https://paracuando-academlo-api.academlo.tech/api/v1/users/{userID}/votes`
    );
    return {
        data,
        isLoading,
        error,
      };
  }
  function getUserPublications() {
    const { data, error, isLoading } = useSWR(
      `https://paracuando-academlo-api.academlo.tech/api/v1/users/{userID}/publications`
    );
    return {
        data,
        isLoading,  
        error,
      };
  }*/


export {putUser, postUserImage, deleteUser}
