import { signIn, signOut, useSession } from "next-auth/react"


function Header() {
  const { data: session, status } = useSession();

  console.log({ session, status });
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Next Js</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a href='/'>Home</a></li>
          <li><a href='/blog'>Blog</a></li>
          {(!session && (status === "loading" || "unauthenticated")) && (
            <li>
              <a
                href='api/auth/signin'
                onClick={e => {
                  e.preventDefault()
                  signIn('github')
                }}
              >
                Sign In
              </a>
            </li>
          )}
          {session && (
            <li>
              <a href='api/auth/signout'
                onClick={e => {
                  e.preventDefault()
                  signOut()
                }}>
                Sign Out
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
export default Header;