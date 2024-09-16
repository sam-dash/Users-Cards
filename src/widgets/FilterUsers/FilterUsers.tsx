import { ChangeEvent, useState } from "react";
import styles from "./FilterUsers.module.css";

interface FilterUsersProps {
  setFilterValue: (value: string) => void;
}

export const FilterUsers = ({ setFilterValue }: FilterUsersProps) => {
  const [toggleFilter, setToggleFilter] = useState(false);

  const addFilterType = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target && event.target.type === "radio")
      setFilterValue(event.target.value);
  };

  return (
    <>
      <button
        type="button"
        className={styles.popupButton}
        onClick={() => setToggleFilter((prev) => !prev)}
      >
        <img
          src="/public/image/icons/filter.png"
          alt="users filter"
          className={styles.popupImg}
        />
      </button>
      {toggleFilter && (
        <section className={styles.popup} onChange={addFilterType}>
          <div>
            <input type="radio" name="data" id="name" value="name" />
            <label htmlFor="name">Имя</label>
          </div>
          <div>
            <input type="radio" name="data" id="surname" value="surname" />
            <label htmlFor="surname">Фамилия</label>
          </div>
          <div>
            <input
              type="radio"
              name="data"
              id="patronymic"
              value="patronymic"
            />
            <label htmlFor="patronymic">Отчество</label>
          </div>
          <div>
            <input type="radio" name="data" id="age" value="age" />
            <label htmlFor="age">Возраст</label>
          </div>
        </section>
      )}
    </>
  );
};
