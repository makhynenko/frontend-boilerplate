import axios from 'axios';

axios.defaults.timeout = 10000;

// TODO: These lines below must be removed eventually, and considered as a technical debt. See PR-295 for details.
axios.defaults.baseURL = 'http://104.248.34.228:3030';
