import "../server";
import { Test } from "@/pages/Test";
import { startApplication } from "../app/application";
import { BrowserRouter } from "react-router-dom";
startApplication(
  <BrowserRouter>
    <Test />
  </BrowserRouter>,
  {
    isDev: import.meta.env.DEV,
    projectId: "JUpVtX2PlR3Qa7AJgOj9",
  },
);
