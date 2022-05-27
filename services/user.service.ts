import express from 'express';
import authHeader from './auth-header';
const API_URL = 'http://localhost:49153/';
class UserService {
  getPublicContent() {
    return express.get(API_URL + 'all');
  }
  getUserBoard() {
    return express.get(API_URL + 'user', { headers: authHeader() });
  }
  getModeratorBoard() {
    return express.get(API_URL + 'mod', { headers: authHeader() });
  }
  getAdminBoard() {
    return express.get(API_URL + 'admin', { headers: authHeader() });
  }
}
export default new UserService();