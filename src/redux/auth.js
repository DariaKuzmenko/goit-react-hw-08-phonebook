import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// export const registerUser = createAsyncThunk(
//   'auth/registerUser',
//   async (user, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/users/signup', user);
//       setAuthHeader(data.token);

//       return data;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );

// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async (user, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/users/login', user);
//       setAuthHeader(data.token);

//       return data;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );

// export const logoutUser = createAsyncThunk(
//   'auth/logoutUser',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.post('/users/logout');
//       clearAuthHeader();

//       return data;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );

// export const refreshUser = createAsyncThunk(
//   'auth/refreshUser',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue('Unable to fetch user');
//     }

//     setAuthHeader(persistedToken);
//     try {
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const result = await axios.post('/users/signup', user);
      setAuthHeader(result.data.token);
      return result.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const result = await axios.post('/users/login', user);
      setAuthHeader(result.data.token);

      return result.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.post('/users/logout');
      clearAuthHeader();

      return result.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    setAuthHeader(persistedToken);
    try {
      const result = await axios.get('/users/current');
      return result.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
