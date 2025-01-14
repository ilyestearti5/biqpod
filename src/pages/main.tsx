import "../server";
import { Test } from "@/pages/Test";
import { startApplication } from "../app/application";
import { BrowserRouter } from "react-router-dom";
startApplication({
  app: (
    <BrowserRouter>
      <Test />
    </BrowserRouter>
  ),
  isDev: import.meta.env.DEV,
});
