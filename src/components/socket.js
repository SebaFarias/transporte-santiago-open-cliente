import io from 'socket.io-client'
import axios from 'axios';

const server_host = process.env.SERVER_HOST || 'localhost';
const server_port = '8080'

const socket = io(`//${server_host}:${server_port}`)

export default socket