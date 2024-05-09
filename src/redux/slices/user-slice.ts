import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  uid: "",
  email: "",
  phone: "",
  displayName: "",
  birthday: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_, action: { payload: any; type: string }) => ({
      ...action.payload,
    }),
    removeUser: () => ({
      ...initialState,
    }),
    updateUser: (state, action: PayloadAction<Partial<any>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
