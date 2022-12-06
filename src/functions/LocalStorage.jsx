const getFromLocalStorage = (key, defaultValue) => {
  return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
};
const changeLocalStorage = (key, state) => {
  window.localStorage.setItem(key, JSON.stringify(state));
};

const getContactsForDelete = key => {
  return JSON.parse(window.localStorage.getItem(key));
};

export { getFromLocalStorage, changeLocalStorage, getContactsForDelete };
