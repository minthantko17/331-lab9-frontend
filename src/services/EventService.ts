import type { Event } from '@/types'
import axios, { type AxiosResponse } from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage: Number, page: Number) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id: number) {
    return apiClient.get('/events/' + id)
  },
  saveEvent(event: Event){
    const {id, ...eventData} = event
    return apiClient.post('/events', eventData)
  },
  getEventsByKeyword(keyword: string, perPage: Number, page: Number): Promise<AxiosResponse<Event[]>>{
      return apiClient.get<Event[]>('/events?title=' + keyword + '&_limit=' + perPage + '&_page=' + page)
    }
}
