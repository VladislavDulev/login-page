import { LoginRequest, LoginResponse } from "./interfaces/user.types";
import { PathParams, rest } from "msw";

const sessions = new Map<string, LoginResponse>();
const allowedUser = "hello@edited.com";
const allowedPassword = "hello123";

const userHandler = [
  rest.post<LoginRequest, PathParams<string>, LoginResponse>(
    "/login",
    async (req, res, ctx) => {
      const { password, username, rememberMe } =
        (await req.json()) as LoginRequest;

      if (!username || !password) {
        return res(ctx.status(400, "Username and password are required"));
      }

      if (username === allowedUser && password === allowedPassword) {
        const accessToken = "1a2b3c4d";
        const refreshable = "0l7n5ff";

        if (rememberMe) {
          document.cookie = `accessToken=${accessToken}; expires=Sun, 1 Jan 2023 00:00:00 UTC`;
          document.cookie = `refreshToken=${refreshable}; expires=Sun, 1 Jan 2023 00:00:00 UTC`;
        } else {
          sessions.set(username, { access: accessToken, refresh: refreshable });
        }

        return res(ctx.json({ access: accessToken, refresh: refreshable }));
      } else {
        return res(ctx.status(404, "Wrong username or password"));
      }
    }
  ),
];

export default userHandler;
