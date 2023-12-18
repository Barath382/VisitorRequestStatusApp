import Layout from "./RequestStatusComponent/Bars/Layout";
import Home from "./RequestStatusComponent/Home";
import NoPage from "./RequestStatusComponent/PageNotFound/NoPage";
import RequestMainCard from "./RequestStatusComponent/RequestDetailsPages/RequestMainCard";
import StatusShortCard from "./RequestStatusComponent/StatusShortCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Requeststatus" element={<StatusShortCard />} />
          <Route  path="/Requeststatus/:visitor" element={<RequestMainCard />} />
          <Route exact path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
