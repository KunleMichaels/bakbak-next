import Router from "next/router";
import { MyContext } from "../web/types/MyContext";

export default (context: MyContext | null, target: string) => {
  if (context && context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, { Location: target });
    context.res.end();
  } else {
    // In the browser, we just pretend like this never even happened ;)
    Router.replace(target);
  }
};
