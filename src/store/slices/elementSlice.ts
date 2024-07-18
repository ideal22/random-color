import { createSlice } from '@reduxjs/toolkit';
import { generateRandomColor } from '../../utils/generateRandomColor';

export interface Element {
  id: string;
  color: string;
}

export interface ElementsState {
  elements: Element[];
}

const initialState: ElementsState = {
  elements: [],
};

const elementsSlice = createSlice({
  name: 'elements',
  initialState,
  reducers: {
    addElement(state) {
      const color = generateRandomColor();
      state.elements.unshift({
        id: color,
        color,
      });
    },
    removeElement(state) {
      state.elements.pop();
    },
  },
});

export const { addElement, removeElement } = elementsSlice.actions;
export default elementsSlice.reducer;
