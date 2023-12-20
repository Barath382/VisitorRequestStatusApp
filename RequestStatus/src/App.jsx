import Layout from "./Component/Bars/Layout";
import RequestMainCard from "./Component/RequestDetailsPages/RequestMainCard";
import StatusShortCard from "./Component/StatusShortCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
     <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<StatusShortCard />} />
          <Route  path="/:visitor" element={<RequestMainCard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
