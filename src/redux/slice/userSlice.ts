import { ActionReducerMapBuilder, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DataStatus, userState } from "../../types/redux";
import { IUser } from "../../types/user";

const initialState: userState = {
    error: null,
    status: DataStatus.IDLE,
    user: null
}

export const fetchLogin = createAsyncThunk('user/login', 
    async (user: {username:string, password: string}, thunkApi) => {
        try {
            const res = await fetch('http://localgost:2222/api/users/login', {
              method: "post",
              headers: {
                'Content-Type': 'aplication/json'
              },
              body:JSON.stringify(user)
            })
            if (res.status != 200) {
                thunkApi.rejectWithValue("Can't login, please try again")
            }
            const data = await res.json()
            thunkApi.rejectWithValue(data)
        } catch (err) {
            thunkApi.rejectWithValue(err)
        }
    }
)

const fetchRegister = createAsyncThunk('user/register', 
    async (user: {username:string, password: string, isAdmin: boolean}, thunkApi) => {
        try {
            const res = await fetch('http://localgost:2222/api/users/register', {
              method: "post",
              headers: {
                'Content-Type': 'aplication/json'
              },
              body:JSON.stringify(user)
            })
            if (res.status != 200) {
                thunkApi.rejectWithValue("Can't create new user, please try again")
            }
            const data = await res.json()
            thunkApi.rejectWithValue(data)
        } catch (err) {
            thunkApi.rejectWithValue(err)
        }
    }
)

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder: ActionReducerMapBuilder<userState>) => {
        builder.addCase(fetchLogin.pending, (state, action) => {
            state.status = DataStatus.LOADING
            state.error = null
            state.user = null
        }).addCase(fetchLogin.fulfilled, (state, action) => {
            state.status = DataStatus.SUCCESS
            state.error = null
            state.user = action.payload as unknown as IUser
        }).addCase(fetchLogin.rejected, (state, action) => {
            state.status = DataStatus.FAILED
            state.error = action.error as string
            state.user = null
        })
    },
})

export default userSlice