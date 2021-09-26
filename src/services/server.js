import { Server, Model } from "miragejs";
var cors_proxy = require("cors-anywhere");

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || "127.0.0.1";

// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 3000;

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, host, function () {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      info: Model,
    },

    seeds(server) {
      server.db.loadData({
        infos: [
          { id: "1", firstName: "Ruth", age: 22 },
          { id: "2", firstName: "Sarah", age: 25 },
          { id: "3", firstName: "Artur", age: 30 },
        ],
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/infos", () => {
        return this.schema.all("info");
      });

      this.post("/infos", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.create("info", data);
      });
    },
  });
  return server;
}
