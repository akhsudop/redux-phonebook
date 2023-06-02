import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const CONTACTS_STORAGE_KEY = 'phonebook-contacts';

const initialContacts =
  JSON.parse(localStorage.getItem(CONTACTS_STORAGE_KEY)) ?? [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify([...state]));
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem(CONTACTS_STORAGE_KEY, JSON.stringify([...state]));
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
