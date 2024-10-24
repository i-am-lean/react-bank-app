class Session {
    static #list = []
  
    constructor(user) {
      this.token = Session.generateCode()
      this.user = {
        email: user.email,
        isConfirm: user.isConfirm,
        id: user.id,
      }
    }
  
    //Генерация токена
    static generateCode = () => {
      const length = 6
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  
      let result = ''
  
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(
          Math.random() * characters.length,
        )
        result += characters[randomIndex]
      }
  
      return result
    }
  
    //Создания функции сессии с токеном
    static create = (user) => {
      const session = new Session(user)
  
      this.#list.push(session)
  
      return session
    }
  
    static get = (token) => {
      const session = this.#list.find(
        (item) => item.token === token,
      )
      // console.log('Session', session)
      return session || null
    }
  }
  
  module.exports = {
    Session,
  }