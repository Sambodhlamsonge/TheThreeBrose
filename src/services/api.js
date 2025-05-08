import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080', // Backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchItems = async () => {
  try {
    const response = await apiClient.get('/api/items');
    return response.data.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      image: `http://localhost:8080/${item.image}`,
      description: item.description || '',
    }));
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
};


export default apiClient;
