import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import OndemandVideoSharpIcon from "@mui/icons-material/OndemandVideoSharp";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Head from "next/head";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { getProviders, signIn } from "next-auth/react";
import Link from 'next/link';
import image from "../public/mvsrlogo.jpeg"
function Home({ providers }) {
  return (
    <div className="space-y-10 relative">
      <Head>
        <title>StudentConnects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-around items-center py-4">
      <div className="relative w-40 h-20 ">
          <Image src={image} layout="fill" objectFit="contain" />
           <h2 className="text-3xl text-black md:text-5xl flex-end ml-32 mt-4">StudentConnects</h2>
          
        </div>
        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            {/* <HeaderLink Icon={ExploreIcon} text="Discover" hlink="jobSearch"/>
            <HeaderLink Icon={GroupIcon} text="People" hlink="jobSearch" /> */}
             <HeaderLink Icon={AppsOutlinedIcon} text="News" hlink="" feed />
            <HeaderLink Icon={OndemandVideoSharpIcon} text="Learning" hlink=""/>
            <HeaderLink Icon={BusinessCenterIcon} text="Jobs" hlink="" />
          </div>

          {/* {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <div className="pl-4">
                <button
                  className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign in
                </button>
              </div>
            </div>
          ))} */}
         <div className="flex gap-4" style={{ marginLeft: '0.5rem' }}></div>
          <button className="text-green-700 font-semibold rounded-full border border-green-700 px-5 py-1.5 transition-all hover:border-2" >
            <Link href='/login' className="text-2xl mt-1">Login</Link>
          </button> 
          {/* <button className="text-green-700 font-semibold rounded-full border border-green-700 px-5 py-1.5 transition-all hover:border-2">
            <Link href='/register' className="text-2xl mt-1 ">Register</Link>
          </button> */}
        </div>
      </header>

      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0">
            Welcome to your professional community
          </h1>
          <div className="space-y-4">
          <Link href="/">
            <div className="intent">
              <h2 className="text-xl">Search for a job</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            </Link>
            <Link href="/">
            <div className="intent">
              <h2 className="text-xl">News</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            </Link>
            <Link href="/">
            <div className="intent">
              <h2 className="text-xl">Learn a new skill</h2>
              <ArrowForwardIosRoundedIcon className="text-gray-700" />
            </div>
            </Link>
          </div>
        </div>

        <div className="relative xl:absolute w-80 h-80 xl:w-[650px] xl:h-[650px] top-14 right-5">
          <Image src="https://rb.gy/vkzpzt" layout="fill" priority />
        </div>
      </main>
    </div>
  );
}

export default Home;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}