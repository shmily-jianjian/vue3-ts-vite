import request from '@/request'

// https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E6%B7%B1%E5%9C%B3&ci=30&channelId=4
export const getMovies = () => {
  return request.GET<any>('/api/list/hot.json', {
    ci: 30,
    channelId: 4
  })
}
