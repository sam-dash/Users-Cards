import { useState } from "react";
import styles from "./AddUser.module.css";
import { AddUserCard } from "../AddUserCard/AddUserCard";

export const AddUser = () => {
  const [addUserToggle, setAddUserToggle] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className={styles.addUserButton}
        onClick={() => setAddUserToggle(true)}
      >
        <img
          src="/public/image/icons/pluse.png"
          alt="add new user"
          className={styles.addUserImg}
        />
      </button>
      {addUserToggle && <AddUserCard setAddUserToggle={setAddUserToggle}/>}
    </>
  );
};
