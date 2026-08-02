import { MiraDocsApp } from "@uichat-mira/docs";
import "@uichat-mira/docs/styles.css";
import { miraConfig } from "../mira.config.ts";
import docs from "virtual:mira-docs/content";

function App() {
  return <MiraDocsApp config={miraConfig} docs={docs} />;
}

export default App;
