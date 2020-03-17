import views from "koa-views";
import serve from "koa-static";
import path from "path";

export const serveViews = () => {
  return views(path.join(__dirname, "/../../../client/dist"), {});
};

export const serveStatic = () => {
  return serve(path.join(__dirname, "/../../../client/dist"), {});
};
