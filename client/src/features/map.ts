import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../store";
import { toast } from 'react-toastify';


interface Tag {
    id: string;
    name: string;
  }
  
interface TagState {
    value: Tag[];
  }
  
const initialState: TagState = {
    value: []
  }


