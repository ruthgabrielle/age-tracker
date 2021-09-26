import { AgeTracker } from "./AgeTracker";

jest.mock("./AgeTracker");

beforeEach(() => {
  AgeTracker.mockClear();
});

it("Verify that constructor have been called", () => {
  const ageTrackerConsumer = new AgeTracker();

  expect(AgeTracker).toHaveBeenCalled();
});
