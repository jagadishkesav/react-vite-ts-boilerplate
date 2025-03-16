import axios from 'axios';
import { APP_API_URL } from '@/env';

export const baseURL = `${APP_API_URL}/api/v1`;
export const client = axios.create({ baseURL });
