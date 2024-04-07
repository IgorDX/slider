import axios from 'axios';

// Создайте экземпляр Axios с необходимыми параметрами
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts1',
  timeout: 5000,
});

axios.defaults.withCredentials = true;
axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`
}

export const getPosts = async ()=>{
  try {
    const res = await api.get(`/posts`, {
      params: {offset: 0, limit: 10}
    })
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}
// Функция для обновления токена
const refreshToken = async () => {
  try {
    // Здесь вы можете отправить запрос на сервер для обновления токена
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      refreshToken: '1',
    });
    console.log(response.data)
    // Обновите токен в localStorage или где-либо еще, где вы храните токен
    localStorage.setItem('accessToken', response.data.accessToken);
    
    // Верните новый токен для использования в последующих запросах
    return response.data.accessToken;
  } catch (error) {
    console.error('Ошибка при обновлении токена:', error);
    throw error; // Можно обработать ошибку здесь или в месте, где вызван refreshToken()
  }
};

// Используйте интерцептор Axios для автоматического обновления токена при получении статуса 401 Unauthorized
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    console.log(originalRequest)
    if (error.response.status === 404 && !originalRequest._retry) {
      originalRequest._retry = true;

        // Получите новый токен
        const accessToken = await refreshToken();
        
        // Обновите токен в заголовках запроса
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

        // Повторите оригинальный запрос с новым токеном

        return api(originalRequest);
    }
    
    return Promise.reject(error);
  }
);

export default refreshToken;
