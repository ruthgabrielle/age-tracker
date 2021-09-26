import { Server, Model } from "miragejs";

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
