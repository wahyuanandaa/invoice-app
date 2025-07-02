import axios from "axios"

export const useFetchData = async (url) => {
  return await getData(url)
}

export const useFetchDatabyId = (url, params) => {
  return getData(`${url}/${params.id}`)
}

const getData = async (url, params = {}) => {
  return await axios({
    url: url,
    method: "GET",
    params: params
  }).then((res) => res.data)
}
