import { createSlice } from "@reduxjs/toolkit";

if (!localStorage.getItem("dataRows")) {
  localStorage.setItem("dataRows", JSON.stringify([]));
}
const fetchedRows = JSON.parse(localStorage.getItem("dataRows"));

const initialData = {
  rows: fetchedRows,
  showMessage: false,
  formIsOpen: false,
};
function saveData(state) {
  localStorage.setItem("dataRows", JSON.stringify(state.rows));
}
const dataGridSlice = createSlice({
  name: "Todo",
  initialState: initialData,
  reducers: {
    reset(state) {
      state.formIsOpen = false;
    },

    addNewRow(state, action) {
      const { firstName, lastName, age, date } = action.payload;
      state.rows = [
        ...state.rows,
        { firstName, lastName, age, date, checked: false, id: Date.now() },
      ];
      saveData(state);
    },
    deleteRow(state, action) {
      state.rows = state.rows.filter((elem) => elem.id !== action.payload);
    },
    toggleFormView(state) {
      state.formIsOpen = !state.formIsOpen;
    },
  },
});

export const dataGridActions = dataGridSlice.actions;
export default dataGridSlice.reducer;
