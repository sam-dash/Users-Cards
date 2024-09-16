import styles from "./MainPage.module.css";
import { UserCard, USERSCARDS } from "../../app/Api.ts/api";
import { useDebounce } from "../../features/useDebounce";
import { useSearch } from "../../features/useSearch";
import { useEffect, useState } from "react";

interface HeaderPageProps {
  searchValue: string;
  filterValue: string | null;
}

export const MainPage = ({ searchValue, filterValue }: HeaderPageProps) => {
  const [filterUsers, setFilterUsers] = useState<UserCard[] | null>(null);

  const debouncedKeywords = useDebounce(searchValue, 1000);
  const inputValue = useSearch(filterUsers ?? USERSCARDS, debouncedKeywords);

  const usersList = () => {
    const sortedData = [...USERSCARDS].sort((a, b) => {
      const valueA = a[filterValue as keyof UserCard];
      const valueB = b[filterValue as keyof UserCard];

      if (typeof valueA === "number" && typeof valueB === "number") {
        return valueA - valueB;
      }

      if (typeof valueA === "string" && typeof valueB === "string") {
        return valueA.localeCompare(valueB);
      }

      return 0;
    });

    setFilterUsers(sortedData);
  };

  useEffect(() => {
    usersList();
  }, [filterValue]);


  return (
    <main className={styles.main}>
      {inputValue.map((card) => (
        <article className={styles.userCard} key={card.id}>
          <img
            className={styles.img}
            src={card.image}
            alt={`${card.name} фото клиента`}
          />
          <p className={styles.fullName}>{card.fullName}</p>
          <p className={styles.age}>Возраст: {card.age}</p>
        </article>
      ))}
    </main>
  );
};
