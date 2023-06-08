import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { HomePage } from "./pages/homePage/homePage";
import { ExercisePage } from "./pages/exercisePage/exercisePage";
import { NotFoundPage } from "./pages/notFoundPage/notFoundPage";
import { ExercisesPage } from "./pages/exercisesPage/exercisesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="exercises" element={<ExercisesPage />} />
          <Route path="exercises/:id" element={<ExercisePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
