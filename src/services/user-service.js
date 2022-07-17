import Axios from 'axios'
const axios = Axios.create({ withCredentials: true })

export const userService = {
  login,
  signup,
  logout,
  removeUser,
  updateUser,
  getLoggedInUser,
  query,
}

const STORAGE_KEY = 'user'
const API = '//localhost:3030/api/auth'

async function login(credential) {
  try {
    const res = await axios.post(`${API}/login`, credential)
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(res.data))
    console.log('Loggedin successfully')
    return res.data
  } catch {
    console.error('Cannot login')
  }
}

async function signup(signupInfo) {
  try {
    const res = await axios.post(`${API}/signup`, signupInfo)
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(res.data))
    console.log('Signup successfully')
    return res.data
  } catch {
    console.error('Cannot signup')
  }
}
async function logout() {
  try {
    const res = await axios.post(`${API}/logout`)
    sessionStorage.removeItem(STORAGE_KEY)
    console.log('Loggedout successfully')
    return res.data
  } catch {
    console.error('Cannot logout')
  }
}

async function query(filterBy) {
  try {
    const res = await axios.get('//localhost:3030/api/user', {
      params: filterBy,
    })
    return res.data
  } catch {
    console.error('Cannot delete user')
  }
}
async function removeUser(userId) {
  try {
    await axios.delete(`//localhost:3030/api/user/${userId}`)
  } catch {
    console.error('Cannot delete user')
  }
}
async function updateUser(userId) {
  try {
    const res = await axios.put(`//localhost:3030/api/user/${userId}`)
    return res.data
  } catch {
    console.error('Cannot update user')
  }
}
function getLoggedInUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY))
}
