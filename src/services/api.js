import Cookies from 'js-cookie'

const API_URL = 'https://apis.ccbp.in' // Replace with actual API URL

export const fetchJobs = async filters => {
  const token = Cookies.get('jwt_token')
  const query = new URLSearchParams(filters).toString()
  const response = await fetch(`${API_URL}/jobs?${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) {
    throw new Error('Failed to fetch jobs')
  }
  return response.json()
}

export const fetchProfile = async () => {
  const token = Cookies.get('jwt_token')
  const response = await fetch(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) {
    throw new Error('Failed to fetch profile')
  }
  return response.json()
}

export const fetchJobDetails = async id => {
  const token = Cookies.get('jwt_token')
  const response = await fetch(`${API_URL}/jobs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) {
    throw new Error('Failed to fetch job details')
  }
  return response.json()
}
