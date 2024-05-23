/// Local storage communication functions
import {getItemFromListById} from "./listOperations";

export const calculateNewId = (storagePlace) => {
  const newId = getFromLocalStorage(storagePlace) ?? 0;
  putInLocalStorage(storagePlace, newId + 1);
  return getFromLocalStorage(storagePlace);
}

export const putInLocalStorage = (storagePlace, variable) => {
  localStorage.setItem(storagePlace, JSON.stringify(variable));
}

export const getFromLocalStorage = (storagePlace) => {
  return JSON.parse(localStorage.getItem(storagePlace));
}

export const getListItemByIdFromLocalStorage = (storagePlace, id) => {
  return getItemFromListById(getFromLocalStorage(storagePlace), id);
}