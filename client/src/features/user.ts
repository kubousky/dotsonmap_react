import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../store"
import { API_URL } from "../config/index";


interface UserState {
  isAuthenticated: boolean,
  user: null,
  loading: boolean,
  registered: boolean
}

const initialState: UserState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    registered: false
}

export const register = createAsyncThunk('user/create/', async ({email, password, name}:{email: string, password: string, name: string}, thunkAPI) => {

  const body = JSON.stringify({email, password, name})

  try {
    const res = await fetch('http://localhost:5000/api/user/create/', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body
    })

    const data = await res.json();

    if (res.status === 201) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
      
  } catch(err: any) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetRegistered(state) {
        state.registered = false;
      },
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
      state.loading = true;
    })
      .addCase(register.fulfilled, state => {
        state.loading = false;
        state.registered = true;
      })
      .addCase(register.rejected, state => {
        state.loading = false;
      })
  }
})
export const selectUser = (state: RootState) => state.user;
export const { resetRegistered } = userSlice.actions
export default userSlice.reducer
