import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
export default function Profile() {
  return (
    <>
      <div className="bg-[url('/img/bg-image.jpg')] bg-cover bg-top relative">
        <div className="flex justify-center bg-gradient-to-b from-[#0D8292]/60 to-transparent bg-cover bg-center">
          <NavigationBar />
        </div>
        <div className="w-full h-screen flex justify-center">
        <div className="lg:bg-white w-screen lg:w-[190vh] mt-5 lg:h-[90vh] p-10 lg:rounded-2xl shadow-2xl  ">
          <div className="flex justify-center mt-[25vh]">
          <img src={"/img/logo_jalanku.jpg"} alt="jalanku_logo" className="flex justify-center object-center"/>
          </div>
         
          <h1 className="text-6xl font-bold text-center">Jalanku</h1>
          <h4 className="text-center">by nandiwaelur project</h4>

        </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
