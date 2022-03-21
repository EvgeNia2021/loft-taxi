import auth from './auth'
import { logIn, logOut } from '../actions'

describe("auth", () => {
  describe("#LOG_IN", () => {
    it('returns isLoggedIn TRUE', () => {
      expect(auth({}, logIn())).toEqual({ isLoggedIn: true })
    })
  })

  describe("#LOG_OUT", () => {
    it('returns isLoggedIn FALSE', () => {
      expect(auth({}, logOut())).toEqual({ isLoggedIn: false })
    })
  })
})