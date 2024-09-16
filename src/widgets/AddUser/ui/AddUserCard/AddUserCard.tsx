import { ChangeEvent, useState } from "react";
import styles from "./AddUserCard.module.css";
import { CloseButton } from "../../../../entities/CloseButton";

interface AddUserCardProps {
  setAddUserToggle: (value: boolean) => void;
}

export const AddUserCard = ({ setAddUserToggle }: AddUserCardProps) => {
  const [image, setImage] = useState("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
    event.target.value = "";
  };

  return (
    <section className={styles.formWrapper}>
      <form action="" className={styles.form}>
        <CloseButton
          setAddUserToggle={setAddUserToggle}
          className={styles.clouseButton}
        />
        <div className={styles.imgWrapper}>
          {image ? (
            <>
              <img className={styles.imgUser} src={image} alt="фото контакта" />

              <input
                type="file"
                accept=".jpg, .png"
                onChange={handleFileChange}
                className={styles.addPhoto}
              />
            </>
          ) : (
            <input
              type="file"
              accept=".jpg, .png"
              onChange={handleFileChange}
              className={`${image ? styles.addPhoto : ""}`}
            />
          )}
        </div>
        <div className={styles.userData}>
          <h2>Добавить контакт</h2>
          <label>
            <p>Имя:</p>
            <input type="text" />
          </label>
          <label>
            <p>Фамилия:</p>
            <input type="text" />
          </label>
          <label>
            <p>Отчество</p>
            <input type="text" />
          </label>
          <label>
            <p>Дата рождения:</p>
            <input type="text" />
          </label>
          <button type="submit" className={styles.submitButton}>
            Добавить
          </button>
        </div>
      </form>
    </section>
  );
};
