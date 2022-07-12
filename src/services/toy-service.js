// import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'
import axios from 'axios'

export const toyService = {
  query,
  getById,
  getEmptyToy,
  saveToy,
  removeToy,
}

const TOY_KEY = 'keyDB'

// const API = '//localhost:3030/api/toy/'

_createToys()

function _getUrl(id = '') {
  const BASE_URL =
    process.env.NODE_ENV !== 'development'
      ? '/api/toy'
      : '//localhost:3030/api/toy'
  return `${BASE_URL}/${id}`
}

function query(filterBy) {
  return axios.get(_getUrl(), { params: filterBy }).then((res) => res.data)
  // return storageService.query(TOY_KEY)
}

function getById(toyId) {
  return axios.get(_getUrl(toyId)).then((res) => res.data)
  // return axios.get(_getUrl + toyId).then((res) => res.data)
  // return storageService.get(TOY_KEY, toyId)
}

function getEmptyToy() {
  return {
    name: '',
    price: utilService.getRandomIntInclusive(0, 300),
    labels: ['Battery powered', 'Outdoor'],
    createdAt: Date.now(),
    inStock: true,
    reviews: ['review 1 best 1', 'review 2 almost 1', 'review 3 far from 1'],
  }
}

function saveToy(toy) {
  if (toy._id) {
    return axios.put(_getUrl(toy._id), toy).then((res) => res.data)
  } else {
    return axios.post(_getUrl(), toy).then((res) => res.data)
  }
  // const savedToy = toy._id
  //   ? storageService.put(TOY_KEY, toy)
  //   : storageService.post(TOY_KEY, toy)
  // return savedToy
}

function removeToy(toy) {
  return axios.delete(_getUrl(toy._id)).then((res) => res.data)
  // return storageService.remove(TOY_KEY, toy)
}

function _createToys() {
  let toys = JSON.parse(localStorage.getItem(TOY_KEY))
  if (!toys || !toys.length) {
    toys = [
      {
        _id: 't101',
        name: 'Barbi',
        price: 99,
        labels: ['Battery powered', 'Outdoor'],
        createdAt: '1657616162457',
        inStock: true,
        reviews: [
          'review 1 best 1',
          'review 2 almost 1',
          'review 3 far from 1',
        ],
      },
      {
        _id: 't102',
        name: 'Ball',
        price: 299,
        labels: ['Battery powered', 'Outdoor', 'On wheels'],
        createdAt: '1657616162457',
        inStock: false,
        reviews: [
          'review 1 best 1',
          'review 2 almost 1',
          'review 3 far from 1',
        ],
      },
      {
        _id: 't103',
        name: 'Globe',
        price: 159,
        labels: ['Baby', 'Doll'],
        createdAt: '1657616162457',
        inStock: true,
        reviews: [
          'review 1 best 1',
          'review 2 almost 1',
          'review 3 far from 1',
        ],
      },
    ]
    localStorage.setItem(TOY_KEY, JSON.stringify(toys))
  }
  return toys
}
