/// <reference types="vite/client" />

declare module "virtual:mira-docs/content" {
  import { MiraDoc } from "@uichat-mira/docs";
  const docs: MiraDoc[];
  export const roots: string[];
  export default docs;
}
