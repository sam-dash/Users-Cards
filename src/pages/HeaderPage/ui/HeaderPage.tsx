import { AddUser, FilterUsers, SearchUsers } from "../../../widgets";
import styles from "./HeaderPage.module.css";

interface HeaderPageProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
  setFilterValue: (value: string) => void;
}

export const HeaderPage = ({
  searchValue,
  setSearchValue,
  setFilterValue,
}: HeaderPageProps) => {
  return (
    <header className={styles.header}>
      <FilterUsers setFilterValue={setFilterValue} />
      <SearchUsers searchValue={searchValue} setSearchValue={setSearchValue} />
      <AddUser />
    </header>
  );
};
