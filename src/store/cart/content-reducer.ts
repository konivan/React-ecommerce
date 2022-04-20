import { actionTypes, CartItem, TypeActionCart } from './types';

const initialState: CartItem[] = [
  {
    name: "Apple M1 Pro 10",
    imagePath: "https://items.s1.citilink.ru/1624466_v01_b.jpg",
    price: 4200,
    _id: '435345',
    count: 1,
  },
  {
    name: "DELL Latitude 9420",
    imagePath: "https://items.s1.citilink.ru/1653707_v01_b.jpg",
    price: 4800,
    _id: 'cweffww',
    count: 1,
  },
  {
    name: "DELL XPS 17",
    imagePath: "https://items.s1.citilink.ru/1654197_v01_b.jpg",
    price: 5000,
    _id: 'eqe123w',
    count: 1,
  },
  {
    name: "Apple MacBook Air",
    imagePath: "https://items.s1.citilink.ru/1451521_v01_b.jpg",
    price: 2500,
    _id: 'cwe231ffww',
    count: 1,
  },
  {
    name: "MSI Raider GE66",
    imagePath: "https://items.s1.citilink.ru/1677128_v01_b.jpg",
    price: 3000,
    _id: 'asdad',
    count: 1,
  },
  {
    name: "Acer Predator Helios 300",
    imagePath: "https://items.s1.citilink.ru/1547104_v01_b.jpg",
    price: 2900,
    _id: 'cw21313ww',
    count: 1,
  },
  {
    name: "ASUS ROG GX502LXS",
    imagePath: "https://items.s1.citilink.ru/1411192_v01_b.jpg",
    price: 3000,
    _id: 'jkljkh',
    count: 1,
  },
  {
    name: "Apple MacBook Pro",
    imagePath: "https://items.s1.citilink.ru/1613706_v01_b.jpg",
    price: 3500,
    _id: '568823',
    count: 1,

  },
  {
    name: "DELL Latitude 5421",
    imagePath: "https://items.s1.citilink.ru/1582578_v01_b.jpg",
    price: 4000,
    _id: 'ghkkjgh',
    count: 1,
  },
  {
    name: "GIGABYTE Aero 15",
    imagePath: "https://items.s1.citilink.ru/1541886_v01_b.jpg",
    price: 4200,
    _id: 'lmkjl',
    count: 1,
  },
  {
    name: "Lenovo ThinkPad",
    imagePath: "https://items.s1.citilink.ru/1428333_v01_b.jpg",
    price: 4800,
    _id: '1231212',
    count: 1,
  },
  {
    name: "Lenovo Yoga Slim9",
    imagePath: "https://items.s1.citilink.ru/1619861_v01_b.jpg",
    price: 2300,
    _id: 'fhvhxd',
    count: 1,
  },
  {
    name: "Apple MacBook Pro 16",
    imagePath: "https://items.s1.citilink.ru/1722549_v01_b.jpg",
    price: 4500,
    _id: 'hjghjyhg',
    count: 1,
  },
  {
    name: "Apple MacBook Pro 13.3",
    imagePath: "https://items.s1.citilink.ru/1722522_v01_b.jpg",
    price: 3000,
    _id: 'kujytukiy',
    count: 1,
  },
  {
    name: "Acer Predator Helios 300",
    imagePath: "https://items.s1.citilink.ru/1547104_v01_b.jpg",
    price: 2900,
    _id: '546546',
    count: 1,
  },
  {
    name: "Apple M1 Pro 10",
    imagePath: "https://items.s1.citilink.ru/1624466_v01_b.jpg",
    price: 4200,
    _id: 'vcvcvcv',
    count: 1,
  },
  {
    name: "DELL Latitude 9420",
    imagePath: "https://items.s1.citilink.ru/1653707_v01_b.jpg",
    price: 4800,
    _id: 'cxcxcxc',
    count: 1,
  },
  {
    name: "DELL XPS 13 9310",
    imagePath: "https://items.s1.citilink.ru/1654084_v01_b.jpg",
    price: 3700,
    _id: 'zxzxzxz',
    count: 1,
  },
];

export const contentReducer = (state = initialState, action: TypeActionCart) => {
  switch (action.type) {
    case actionTypes.SORT_BY_PRICE: {
      return state.sort((a, b) => a.price - b.price);
    }
    default:
      return state;
  }
}