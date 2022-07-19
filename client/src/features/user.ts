import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../store"



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

export const register = createAsyncThunk('user/create', async ({email, password, name}:{email: string, password: string, name: string}, thunkAPI) => {

  const body = JSON.stringify({email, password, name})

  try {
    const res = await fetch('/api/user/create/', {
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

const getUser =  createAsyncThunk('/user/me', async (_, thunkAPI) => {
  try {
    const res = await fetch('/api/user/me/', {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    })

    const data = await res.json();

    if (res.status === 200) {
        return data;
    } else {
        return thunkAPI.rejectWithValue(data);
    }
  } catch(err: any){
    return thunkAPI.rejectWithValue(err.response.data);
  }
})

export const login = createAsyncThunk('user/login', async ({email, password}:{email: string, password: string}, thunkAPI) => {

  const body = JSON.stringify({email, password})

  try {
    const res = await fetch('/api/user/token/', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body
    })

    const data = await res.json();

    if (res.status === 200) {
      const { dispatch } = thunkAPI;

      dispatch(getUser());

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
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.fulfilled, state => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, state => {
        state.loading = false;
      })
      .addCase(getUser.pending, state => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, state => {
        state.loading = false;
      })
  }
})
export const selectUser = (state: RootState) => state.user;
export const { resetRegistered } = userSlice.actions
export default userSlice.reducer
