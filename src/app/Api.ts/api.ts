export const USERSCARDS = [
  {
    id: 1,
    name: "Анна",
    surname: "Громова",
    patronymic: "Ивановна",
    birthday: "01.22.1989",
    image: "https://www.svgrepo.com/show/81103/avatar.svg",

    get fullName() {
      return this.patronymic
        ? `${this.surname} ${this.name} ${this.patronymic}`
        : `${this.surname} ${this.name}`;
    },

    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },

    get age() {
      let todayYear = new Date().getFullYear();
      return todayYear - new Date(this.birthday).getFullYear(); // исправить, чтобы высчитывалась в зависимости от месяца и дня
    },
  },
  {
    id: 2,
    name: "Олег",
    surname: "Непершин",
    patronymic: "Эдуардович",
    birthday: "12.04.1994",
    image: "https://www.svgrepo.com/show/81103/avatar.svg",

    get fullName() {
      return this.patronymic
        ? `${this.surname} ${this.name} ${this.patronymic}`
        : `${this.surname} ${this.name}`;
    },

    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },

    get age() {
      let todayYear = new Date().getFullYear();
      return todayYear - new Date(this.birthday).getFullYear(); // исправить, чтобы высчитывалась в зависимости от месяца и дня
    },
  },
  {
    id: 3,
    name: "Екатерина",
    surname: "Дорн",
    patronymic: "Александровна",
    birthday: "27.05.1974",
    image: "https://www.svgrepo.com/show/81103/avatar.svg",

    get fullName() {
      return this.patronymic
        ? `${this.surname} ${this.name} ${this.patronymic}`
        : `${this.surname} ${this.name}`;
    },

    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },

    get age() {
      let todayYear = new Date().getFullYear();
      return todayYear - new Date(this.birthday).getFullYear(); // исправить, чтобы высчитывалась в зависимости от месяца и дня
    },
  },
  {
    id: 4,
    name: "Виталий",
    surname: "Веселов",
    patronymic: "Романович",
    birthday: "15.08.1972",
    image: "https://www.svgrepo.com/show/81103/avatar.svg",

    get fullName() {
      return this.patronymic
        ? `${this.surname} ${this.name} ${this.patronymic}`
        : `${this.surname} ${this.name}`;
    },

    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },

    get age() {
      let todayYear = new Date().getFullYear();
      return todayYear - new Date(this.birthday).getFullYear(); // исправить, чтобы высчитывалась в зависимости от месяца и дня
    },
  },
];

export interface UserCard {
  id: number,
  name: string;
  surname: string;
  patronymic: string;
  birthday: string;
  image: string;
  fullName: string;
  readonly age: number;
}
