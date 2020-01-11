import axios from "axios"
import env from "./env"

export class Haylun {
  constructor(baseUrl, key) {
    this.baseURL = baseUrl
    this.key = key
    this.http = axios.create({
      baseURL: baseUrl
    })
  }

  async login(username, password) {
    let res = await this.http.post("/auth/token", {
      username,
      password,
      grant_type: "password",
      client_id: this.key
    })
    return new Session(this.baseURL, res.data)
  }

  session(access_token) {
    return new Session(this.baseURL, { access_token })
  }
}

export class Session {
  constructor(baseUrl, auth) {
    this.auth = auth
    this.http = axios.create({
      baseURL: baseUrl,
      headers: {
        Authorization: `Bearer ${auth.access_token}`
      }
    })
  }

  async getUser() {
    let res = await this.http.get("/user")
    return res.data
  }

  async getProducts(params) {
    let res = await this.http.get("/products", { params })
    return res.data
  }

  async createProduct(data) {
    let res = await this.http.post("/products", data)
    return res.data
  }
}

export default new Haylun(env.api.baseURL, env.api.key)
