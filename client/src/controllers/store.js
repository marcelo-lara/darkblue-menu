'use strict'

///////////////////////////////////////////////////////////////////////////////////
export const addItem = async item => {
  const response = await fetch('/api/items', {
    method: 'POST',
    body: JSON.stringify(item),
    headers: { 'Content-Type': 'application/json' }
  })

  if (response.status == 200) {
    // <<<- ok
    return await response.json()
  }

  console.log('addItem> something went wrong..', response)
}

export const getItems = async () => {
  const response = await fetch('/api/items')

  if (response.status == 200) {
    // <<<- ok
    const items = await response.json()
    _setTagsList(items)
    return items
  }
  console.log('getItems> something went wrong..', response)
  return []
}

export const getItem = async item => {
  const response = await fetch('/api/items/' + item._id)

  if (response.status == 200) {
    // <<<- ok
    return await response.json()
  }

  console.log('addItem> something went wrong..', response)
}

export const delItem = async item => {
  const response = await fetch('/api/items/' + item._id, {
    method: 'DELETE',
    body: JSON.stringify(item),
    headers: { 'Content-Type': 'application/json' }
  })

  if (response.status == 200) {
    // <<<- ok
    return await response.json()
  }

  console.log('addItem> something went wrong..', response)
}

export const updateItem = async item => {
  const response = await fetch('/api/items/' + item._id, {
    method: 'PUT',
    body: JSON.stringify(item),
    headers: { 'Content-Type': 'application/json' }
  })

  if (response.status == 200) {
    // <<<- ok
    return await response.json()
  }

  console.log('addItem> something went wrong..', response)
}

///////////////////////////////////////////////////////////////////////////////////
let _tagsList = [];

const _setTagsList = items => {
  //limpio la lista
  _tagsList = [];

  //agrego todos los tags
  for (const item of items) {
    _tagsList.push(...item.tags);
  }

  //elimino duplicados y ordeno
  _tagsList = [...new Set(_tagsList)].sort();
}

export const getTagsList = async () => {
  return _tagsList;
}

export const getItemsByTags = async tags => {
  let matchItems = await getItems();

  for (const t of tags) {
    matchItems = matchItems.filter(x => x.tags.includes(t));
  }

  return matchItems;
}

//export default {addItem, delItem, getItem, getItems, getItemsByTags, getTagsList }