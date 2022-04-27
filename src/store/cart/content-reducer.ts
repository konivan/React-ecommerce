import { actionTypes, CartItem, TypeActionCart } from './types';

const initialState: CartItem[] = [
  {
    name: "Apple M1 Pro 10",
    imagePath: "https://items.s1.citilink.ru/1624466_v01_b.jpg",
    description: {
      disk: "SSD 4096 ГБ",
      screen: '14.2"; 3024х1964',
      CPU: "Apple M1 Pro 10 core",
      RAM: "16ГБ",
      OS: "Mac OS",
    },
    price: 4200,
    _id: "435345",
    count: 1,
  },
  {
    name: "DELL Latitude 9420",
    imagePath: "https://items.s1.citilink.ru/1653707_v01_b.jpg",
    description: {
      disk: "SSD 1024 ГБ",
      screen: '14"; 2560х1600',
      CPU: "Intel Core i7 1185G7",
      RAM: "32ГБ LPDDR4x",
      OS: "Windows 10 Professional",
    },
    price: 4800,
    _id: "cweffww",
    count: 1,
  },
  {
    name: "DELL XPS 17",
    imagePath: "https://items.s1.citilink.ru/1654197_v01_b.jpg",
    description: {
      disk: "SSD 1024 ГБ",
      screen: '17"; 3840х2400',
      CPU: "Intel Core i7 11800H",
      RAM: "16ГБ DDR4",
      OS: "Windows 11 Professional",
    },
    price: 5000,
    _id: "eqe123w",
    count: 1,
  },
  {
    name: "Apple MacBook Air",
    imagePath: "https://items.s1.citilink.ru/1451521_v01_b.jpg",
    description: {
      disk: "SSD 512 ГБ",
      screen: '13.3"; 2560х1600',
      CPU: "Apple M1 8 core",
      RAM: "16ГБ",
      OS: "Mac OS",
    },
    price: 2500,
    _id: "cwe231ffww",
    count: 1,
  },
  {
    name: "MSI Raider GE66",
    imagePath: "https://items.s1.citilink.ru/1677128_v01_b.jpg",
    description: {
      disk: "SSD 1024 ГБ",
      screen: '15.6"; 1920х1080',
      CPU: "Intel Core i7 12700H",
      RAM: "16ГБ DDR5",
      OS: "Windows 11 Home",
    },
    price: 3000,
    _id: "asdad",
    count: 1,
  },
  {
    name: "Acer Predator Helios 300",
    imagePath: "https://items.s1.citilink.ru/1547104_v01_b.jpg",
    description: {
      disk: "SSD 1024 ГБ",
      screen: '15.6"; 1920х1080',
      CPU: "Intel Core i7 11800H",
      RAM: "32ГБ DDR4",
      OS: "Eshell",
    },
    price: 2900,
    _id: "cw21313ww",
    count: 1,
  },
  {
    name: "ASUS ROG GX502LXS",
    imagePath: "https://items.s1.citilink.ru/1411192_v01_b.jpg",
    description: {
      disk: "SSD 512 ГБ",
      screen: '15.6"; 1920х1080',
      CPU: "Intel Core i7 10875H",
      RAM: "16ГБ DDR4",
      OS: "Windows 10 Home",
    },
    price: 3000,
    _id: "jkljkh",
    count: 1,
  },
  {
    name: "Apple MacBook Pro",
    imagePath: "https://items.s1.citilink.ru/1613706_v01_b.jpg",
    description: {
      disk: "SSD 1024 ГБ",
      screen: '13.3"; 2560х1600',
      CPU: "Apple M1 8 core",
      RAM: "8ГБ",
      OS: "Mac OS",
    },
    price: 3500,
    _id: "568823",
    count: 1,
  },
  {
    name: "DELL Latitude 5421",
    imagePath: "https://items.s1.citilink.ru/1582578_v01_b.jpg",
    description: {
      disk: "SSD 512 ГБ",
      screen: '14"; 1920х1080',
      CPU: "Intel Core i7 11850H",
      RAM: "16ГБ DDR4",
      OS: "Windows 10 Professional",
    },
    price: 4000,
    _id: "ghkkjgh",
    count: 1,
  },
  {
    name: "GIGABYTE Aero 15",
    imagePath: "https://items.s1.citilink.ru/1541886_v01_b.jpg",
    description: {
      disk: "SSD 512 ГБ",
      screen: '15.6"; 1920х1080',
      CPU: "Intel Core i7 10870H",
      RAM: "16ГБ DDR4",
      OS: "Windows 10 Home",
    },
    price: 3200,
    _id: "lmkjl",
    count: 1,
  },
  {
    name: "Lenovo ThinkPad",
    imagePath: "https://items.s1.citilink.ru/1428333_v01_b.jpg",
    description: {
      disk: "SSD 1024 ГБ",
      screen: '15.6"; 3840х2160',
      CPU: "Intel Core i7 10750H",
      RAM: "32ГБ DDR4",
      OS: "Windows 10 Professional",
    },
    price: 3300,
    _id: "1231212",
    count: 1,
  },
  {
    name: "Lenovo Yoga Slim9",
    imagePath: "https://items.s1.citilink.ru/1619861_v01_b.jpg",
    description: {
      disk: "SSD 512 ГБ",
      screen: '14"; 3840х2160',
      CPU: "Intel Core i5 1135G7",
      RAM: "16ГБ LPDDR4",
      OS: "Windows 11 Home",
    },
    price: 2300,
    _id: "fhvhxd",
    count: 1,
  },
  {
    name: "Apple MacBook Pro 16",
    imagePath: "https://items.s1.citilink.ru/1722549_v01_b.jpg",
    description: {
      disk: "SSD 512 ГБ",
      screen: '16"; 3072х1920',
      CPU: "Intel Core i7 9750H",
      RAM: "16ГБ DDR4",
      OS: "Mac OS",
    },
    price: 4500,
    _id: "hjghjyhg",
    count: 1,
  },
  {
    name: "Apple MacBook Pro 13.3",
    imagePath: "https://items.s1.citilink.ru/1722522_v01_b.jpg",
    description: {
      disk: "SSD 512 ГБ",
      screen: '13.3"; 2560х1600',
      CPU: "Intel Core i5 1038NG7",
      RAM: "16ГБ LPDDR4",
      OS: "Mac OS",
    },
    price: 2900,
    _id: "kujytukiy",
    count: 1,
  },
  {
    name: "DELL Vostro 5515",
    imagePath: "https://items.s1.citilink.ru/1544729_v01_b.jpg",
    description: {
      disk: "SSD 512 ГБ",
      screen: '15.6"; 1920х1080',
      CPU: "AMD Ryzen 5 5500U",
      RAM: "8ГБ DDR4",
      OS: "Windows 10 Home",
    },
    price: 1000,
    _id: "546546",
    count: 1,
  },
  {
    name: "Lenovo Yoga 7",
    imagePath: "https://items.s1.citilink.ru/1611881_v01_b.jpg",
    description: {
      disk: "SSD 512 ГБ",
      screen: '14"; 1920х1080',
      CPU: "Intel Core i5 1135G7",
      RAM: "16ГБ DDR4",
      OS: "Windows 11 Home",
    },
    price: 1300,
    _id: "vcvcvcv",
    count: 1,
  },
  {
    name: "Lenovo IdeaPad 3",
    imagePath: "https://items.s1.citilink.ru/1458356_v01_b.jpg",
    description: {
      disk: "SSD 512 ГБ",
      screen: '14"; 1920х1080',
      CPU: "Intel Core i5 1135G7",
      RAM: "8ГБ DDR4",
      OS: "Windows 10 Home",
    },
    price: 1300,
    _id: "cxcxcxc",
    count: 1,
  },
  {
    name: "DELL XPS 13 9310",
    imagePath: "https://items.s1.citilink.ru/1654084_v01_b.jpg",
    description: {
      disk: "SSD 1024 ГБ",
      screen: '13.4"; 3840х2400',
      CPU: "Intel Core i7 1165G7",
      RAM: "16ГБ LPDDR4",
      OS: "Windows 11 Professional",
    },
    price: 3700,
    _id: "zxzxzxz",
    count: 1,
  },
];

export const contentReducer = (state = initialState, action: TypeActionCart) => {
  switch (action.type) {
    case actionTypes.SORT_BY_PRICE: {
      return state.sort((a, b) => b.price - a.price);
    }
    case actionTypes.SORT_BY_PRICE_LOWER: {
      return state.sort((a, b) => a.price - b.price);
    }
    case actionTypes.SEARCH_CONTENT: {
      if (action.payload !== '') {
        let a = action.payload.toLowerCase;
        let b = [...state]
        return state.filter(state => state.name.toLowerCase().includes(action.payload.toLowerCase()));
      } else return state;
    }
    default:
      return state;
  }
}