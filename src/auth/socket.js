import config from '../config';
import openSocket from 'socket.io-client';
import user from './user';

export default {
  _socket: null,

  connect() {
    this._socket = openSocket(config.endpoints.url);
    this._socket.on('connect', () => {
      this._socket.emit('authorization', {
        access_token: user.token,
        socket: localStorage.getItem('socket_id')
      });
      localStorage.setItem('socket_id', this._socket.id);
    });
  }
};
