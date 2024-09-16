import type { UserCard } from "../app/Api.ts/api";

export const useSearch = (arr: UserCard[], value: string) => {
  const containsValue = arr.filter((obj) =>
    Object.values(obj).some((valueKey: string) => {
      return valueKey.toString().toLowerCase().includes(value);
    })
  );

  return containsValue;
};
// Поиск по значениям объектов массива вхождений того, что ввожу в поиск
