import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:3030/infos", (req, res, ctx) => {
    return res(
      ctx.json([
        {
          firstName: "Ruth",
          age: 22,
        },
        {
          firstName: "Sarah",
          age: 25,
        },
      ])
    );
  }),
];
