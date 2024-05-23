/// List functions
export const deleteListItemFromListById = (list, id) => {
  return list.filter(item => item.id !== id);
}

export const getItemFromListById = (list, id) => {
  return list ? list.find(item => item.id === id) : {};
}

export const sortListByExperience = (list) => {
  list.sort((a, b) => {
    return a.experience - b.experience;
  });
}

export const updateListWithNewItem = (list, newItem) => {
  return list.map(item => newItem.id === item.id ? Object.assign(item, newItem) : item);
}