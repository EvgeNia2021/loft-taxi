import { authMiddleware } from "./authMiddleware";
import { authorize } from "./actions";
import { serverLogIn } from "./api";

jest.mock("./api", () => ({ serverLogIn: jest.fn(() => true) }))

describe("authMiddleware", () => {

  describe("#AUTHORIZE", () => {
    it("authorizes through api", async () => {
      const dispatch = jest.fn()

      await authMiddleware({ dispatch })()(
        authorize("testlogin", "testpassword")
      )
      expect(serverLogIn).toBeCalledWith("testlogin", "testpassword")
      expect(dispatch).toBeCalledWith(
        { type: "LOG_IN" }
      )
    })
  })
})