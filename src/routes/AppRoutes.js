import { Routes, Route } from "react-router-dom";
import { PageNotFound } from "../pages/PageNotFound/PageNotFound";
import { ArchivePage } from "../pages/ArchivePage/ArchivePage";
import { HomePage } from "../pages/HomePage/HomePage";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archives" element={<ArchivePage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
