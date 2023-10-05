import { lazy,Suspense } from "react"
import { Route,Routes } from "react-router-dom"
const Home  = lazy(()=> import("../src/pages/home"))
const LatestArticles  = lazy(()=> import("../src/pages/LatestArticles"))
const Subscribe  = lazy(()=> import("../src/pages/Subscribe"))


function routes() {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
            <Route exact index path="/" element={<Home/>}></Route>
            <Route exact path="/latestArticles" element={<LatestArticles/>}></Route>
            <Route exact path="/subscribe" element={<Subscribe/>}></Route>
        </Routes>
    </Suspense>
  )
}

export default routes