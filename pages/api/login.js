import User from "../../models/user";
import connectDB from "../../utils/connectDB";
export default async function  handler(req,res){
      await connectDB();      
    const data = req.body
    const email = data.email
    const password =  data.password
    const emailExist = await User.findOne({email:email})
    console.log(emailExist)
    console.log("here")
    if(!emailExist) return res.status(400).json({message:"Invalid Credentials"});
    if (emailExist.password == password){
       return  res.send({logged:emailExist.email});
    } else{
      return res.status(400).json({message:"Invalid Credentials"});
    }
}
import PrimaryLayout from "@/components/layouts/PrimaryLayout";
import { NextPageWithLayout } from "./page";
import Hero from "@/components/Hero";
import Skills from "@/components/brands/Skills";
import About from "@/components/About";
// import Portfolio from "@/components/work/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";


const Home: NextPageWithLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <About />
      {/* <Portfolio /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
