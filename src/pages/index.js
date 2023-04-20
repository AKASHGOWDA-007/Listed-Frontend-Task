import Head from "next/head";
import Link from "next/link";
import { useSession, signOut, getSession } from "next-auth/react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Home() {
  const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  }

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      {session ? User({ session, handleSignOut }) : Guest()}
    </>
  );
}

// Guest
function Guest() {
  return (
    <main>
      <h3>Guest Homepage</h3>
      <Link href={"/login"}>Login</Link>
    </main>
  );
}

// Authorize User
function User({ session, handleSignOut }) {
  return (
    <main className="main">
      <h3>Authorize User Homepage</h3>

      <div>
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div>
        <button className="btn signOut" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>

      <div>
        <Link className="btn" href={"/admin/dashboard"}>
          Dashboard <BsArrowUpRight />
        </Link>
      </div>
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
