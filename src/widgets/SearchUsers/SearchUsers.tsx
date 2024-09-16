import styles from "./SearchUsers.module.css";

interface SearchUsersProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const SearchUsers = ({
  searchValue,
  setSearchValue,
}: SearchUsersProps) => {
  return (
    <>
      <input
        type="search"
        className={styles.search}
        placeholder="Введите имя"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </>
  );
};
