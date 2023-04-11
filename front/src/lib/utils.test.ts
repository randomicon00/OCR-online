import { formatSize, formatDate, countCharacters, countWords } from "moment.js";

describe("formatSize", () => {
  it("returns the correct value for a file size in bytes", () => {
    expect(formatSize(10)).toBe("10 B");
  });

  it("returns the correct value for a file size in kilobytes", () => {
    expect(formatSize(1024)).toBe("1.00 KB");
  });

  it("returns the correct value for a file size in megabytes", () => {
    expect(formatSize(1048576)).toBe("1.00 MB");
  });

  it("returns the correct value for a file size in gigabytes", () => {
    expect(formatSize(1073741824)).toBe("1.00 GB");
  });
});

describe("formatDate", () => {
  it("returns the formatted date in the correct format", () => {
    const date = new Date(2022, 1, 15);
    const format = "MM/DD/YYYY";
    expect(formatDate(date, format)).toBe("02/15/2022");
  });
});

describe("countCharacters", () => {
  it("returns the correct count for a string with no whitespace", () => {
    expect(countCharacters("abc")).toBe(3);
  });

  it("returns the correct count for a string with leading/trailing whitespace", () => {
    expect(countCharacters("   abc   ")).toBe(3);
  });
});

describe("countWords", () => {
  it("returns the correct count for a string with no whitespace", () => {
    expect(countWords("one")).toBe(1);
  });

  it("returns the correct count for a string with multiple words", () => {
    expect(countWords("one two three")).toBe(3);
  });

  it("returns the correct count for a string with leading/trailing whitespace", () => {
    expect(countWords("  one  two  ")).toBe(2);
  });
});
