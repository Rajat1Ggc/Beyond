import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ProfilesState {
  draft: {
    name: string;
    email: string;  
    role: string; 
    termsAccepted: boolean;
  };
  saved: Array<{
    name: string;
    email: string;  
    role: string; 
    termsAccepted: boolean;
  }>;
  isSaving: boolean;
}

const emptyDraft: ProfilesState['draft'] = {
  name: '',
  email: '',
  role: 'Developer',
  termsAccepted: false, 
}

const initialState: ProfilesState = {
  draft: emptyDraft,
  saved: [],
  isSaving: false,
}

export const ProfilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
      updateDraft: (state, action: PayloadAction<Partial<ProfilesState['draft']>>) => {
        state.draft = { ...state.draft, ...action.payload };
      },
      startNewProfile: (state) => {
        state.draft = emptyDraft;
        state.isSaving = false;

      },
      submitProfile: (state) => {
        state.isSaving = true; 
        state.saved.push(state.draft);
        state.draft = emptyDraft;
        state.isSaving = false; 
      },
  },
})

// Action creators are generated for each case reducer function
export const { updateDraft, startNewProfile, submitProfile } = ProfilesSlice.actions

export default ProfilesSlice.reducer