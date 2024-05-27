import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Footer from "../../components/footer/Footer"
import "./home.css"

export default function Home() {
  return (
    <>  
        <Header />
        <div className="home">
            <Posts />
           <Footer/>
        </div>
    </>
  )
}