
import { createCookieSessionStorage } from "@remix-run/node";

type SessionData = {
  userId: string;
}

type SessionFlashData = {
  error: string

}


const { getSession, commitSession, destroySession } = createCookieSessionStorage<SessionData, SessionFlashData>({
  cookie: {
    name: "__session",
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: "/",
    sameSite: "lax",
    secrets: ["superDuperSecretkey"]
    // secure: true
  }

})

export { getSession, commitSession, destroySession }
