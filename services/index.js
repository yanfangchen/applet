import requestService from './request.js'

const request = requestService();

export function getUserData(params) {
  return request.get('/tenantUser/v1/query', { params });
}