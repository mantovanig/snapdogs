import { getBreedsOptions } from "../breeds";

import mockBreed from "./breedsMock.json";

describe("breeds utils", () => {
  it("getBreedsOptions", () => {
    const expectedRes = [
      { label: "Affenpinscher", value: "affenpinscher" },
      { label: "Bulldog Boston", value: "bulldog-boston" },
      { label: "Bulldog French", value: "bulldog-french" },
      { label: "Bullterrier Staffordshire", value: "bullterrier-staffordshire" }
    ];

    const res = getBreedsOptions(mockBreed);

    expect(Array.isArray(res)).toBe(true);
    expect(res).toEqual(expectedRes);
  });
});
