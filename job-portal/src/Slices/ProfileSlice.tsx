import {createSlice} from "@reduxjs/toolkit";
import { updateProfile } from "../Services/ProfileService";
const ProfileSlice=createSlice({

    name:"profile",
    initialState:{},
    reducers:{
        changeProfile:(state,action)=>{
            state=updateProfile(action.payload);
            console.log(state)
            return action.payload;
        },
        setProfile:(state,action)=>{
            // removeItem("user");
            state=action.payload;
            return state;

        }
    }
});
export const {changeProfile,setProfile}=ProfileSlice.actions;
export default ProfileSlice.reducer;