import { lazy,Suspense } from "react"
import { Route,Routes } from "react-router-dom"
const LatestArticles  = lazy(()=> import("./pages/latestarticles"))
const Sabscribe  = lazy(()=> import("./pages/sabscribe"))
const Home = lazy(()=> import("../src/pages/home"))


function routes() {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
            <Route exact index path="/" element={<Home/>}></Route>
            <Route exact path="/latestArticles" element={<LatestArticles/>}></Route>
            <Route exact path="/sabscribe" element={<Sabscribe/>}></Route>
        </Routes>
    </Suspense>
  )
}

export default routes