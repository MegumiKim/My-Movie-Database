import fetchFilm from "./film.js";

describe("fetchFilm", () => {
  it("get a specific film by ID and create HTML"),
    async () => {
      const html = await fetchFilm();
      expect(html.length).toBeGreaterThan(1);
    };
});

// test("It adds 1 and 2 and gets 3 as a result", () => {
//   expect(1 + 2).toEqual(3);
// });
