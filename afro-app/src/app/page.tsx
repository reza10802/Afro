import Body from "@/components/Body/Body"
import Header from "@/components/Header/Header"
export default function(){
  return(
    <div className="px-1">
      <header className="mx-20 py-5">
        <Header />
      </header>
      <hr/>
      <section className="mx-20 py-5">
        <Body />
      </section>
      <footer className="bg-orange-400">Footer Part</footer>
    </div>

  )
}