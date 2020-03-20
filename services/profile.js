import requestService from './request.js'

const request = requestService();

export function getData(params) {
  return request.get('/tenant/query', { params });
}