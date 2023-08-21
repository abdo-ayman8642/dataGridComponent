import React from "react";
import styles from "./form.module.css";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataGridActions } from "../store/rowDataSlice";
export default function Form() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const ageRef = useRef();
  const dateRef = useRef();

  const dispatch = useDispatch();
  const closeForm = (e) => {
    e.preventDefault();
    dispatch(dataGridActions.reset());
  };
  const addNewUser = (e) => {
    e.preventDefault();

    dispatch(
      dataGridActions.addNewRow({
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        age: ageRef.current.value,
        date: dateRef.current.value,
      })
    );
    closeForm(e);
  };
  const formIsOpen = useSelector((state) => state.formIsOpen);
  const formStyle = formIsOpen
    ? { width: "20%", visibility: "visible" }
    : { width: "0", visibility: "hidden" };
  return (
    <form
      onSubmit={addNewUser}
      id="mySidenav"
      className={styles.sidenav}
      style={{ width: formStyle["width"], visibility: formStyle["visibility"] }}
    >
      {formIsOpen && (
        <>
          <a
            href="javascript:void(0)"
            className={styles.closebtn}
            onClick={closeForm}
          >
            &times;
          </a>
          <p className={styles.title}> Add New User</p>
          <TextField
            margin="dense"
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            required
            inputRef={firstNameRef}
          />
          <TextField
            margin="dense"
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            required
            inputRef={lastNameRef}
          />
          <TextField
            required
            margin="dense"
            id="outlined-basic"
            label="Age"
            type="number"
            variant="outlined"
            inputRef={ageRef}
          />
          <TextField
            margin="dense"
            id="outlined-basic"
            hiddenLabel
            type="date"
            variant="filled"
            inputRef={dateRef}
            required
          />
          <div className={styles.buttonContainer}>
            <Button
              variant="outlined"
              style={{ backgroundColor: "#1aa3ff", color: "white" }}
              type="submit"
            >
              Submit
            </Button>
            <Button variant="outlined" onClick={closeForm}>
              Cancel
            </Button>
          </div>
        </>
      )}
    </form>
  );
}
