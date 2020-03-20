import { Gender } from './gender.interface';

export interface User {
  id?: number;
  name: string;
  email: string;
  description: string;
  gender: Gender;
}