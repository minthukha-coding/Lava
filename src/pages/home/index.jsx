import React from "react";
import Licon from "../../components/Licon";

function Home() {
  return (
    <>
      <section className="bg-[url('https://i.pinimg.com/736x/0f/67/8d/0f678d9a30a06408900aa27ea3144c9a.jpg')]">
        <nav className="flex items-center justify-between mx-5 mt-3">
          <Licon />
          <div>
            <a href="" className="mr-4">
              ABOUT
            </a>
            <a href="" className="mr-4">
              ARTICLES
            </a>
            <a href="">SABSCRIBE</a>
          </div>
        </nav>
        <section className="relative top-[250px] left-[200px]">
          <h1>Lava</h1>
          <h3>BLACK SAND BEACH</h3>
        </section>
      </section>
    </>
  );
}

export default Home;
