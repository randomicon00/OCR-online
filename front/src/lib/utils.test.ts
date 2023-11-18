import { formatSize, formatDate, countCharacters, countWords } from "moment.js";

describe("formatSize", () => {
  // Test bytes
  it("returns the correct value for a file size in bytes", () => {
    expect(formatSize(10)).toBe("10 B");
  });

  // Test upper limit of bytes
  it("returns the correct value for the upper limit of bytes", () => {
    expect(formatSize(1023)).toBe("1023 B");
  });

  // Test kilobytes
  it("returns the correct value for a file size in kilobytes", () => {
    expect(formatSize(1024)).toBe("1.00 KB");
  });

  // Test upper limit of kilobytes
  it("returns the correct value for the upper limit of kilobytes", () => {
    expect(formatSize(1048575)).toBe("1023.99 KB");
  });

  // Test megabytes
  it("returns the correct value for a file size in megabytes", () => {
    expect(formatSize(1048576)).toBe("1.00 MB");
  });

  // Test upper limit of megabytes
  it("returns the correct value for the upper limit of megabytes", () => {
    expect(formatSize(1073741823)).toBe("1023.99 MB");
  });

  // Test gigabytes
  it("returns the correct value for a file size in gigabytes", () => {
    expect(formatSize(1073741824)).toBe("1.00 GB");
  });

  // Test different precisions
  it("returns the correct value with different precisions", () => {
    expect(formatSize(1500, 2)).toBe("1.46 KB");
    expect(formatSize(1500, 0)).toBe("1 KB");
  });

  // Test negative values
  it("returns 'Invalid size' for negative values", () => {
    expect(formatSize(-1024)).toBe("Invalid size");
  });
});

describe("countCharacters", () => {

  // Test simple string
  it("returns the correct count for a string with no whitespace", () => {
    expect(countCharacters("abc")).toBe(3);
  });

  // Test whitespace trimmed
  it("returns the correct count for a string with leading/trailing whitespace", () => {
    expect(countCharacters("   abc   ")).toBe(3);
  });

  // Test empty string
  it("returns 0 for an empty string", () => {
    expect(countCharacters("")).toBe(0);
  });

  // Test multi-language
  it("returns the correct count for a multi-language string", () => {
    expect(countCharacters("abcäöüd")).toBe(7);
  });
});

describe("countWords", () => {

  // Test single word
  it("returns the correct count for a string with no whitespace", () => {
    expect(countWords("one")).toBe(1);
  });

  // Test multiple words
  it("returns the correct count for a string with multiple words", () => {
    expect(countWords("one two three")).toBe(3);
  });

  // Test leading/trailing whitespace
  it("returns the correct count for a string with leading/trailing whitespace", () => {
    expect(countWords("  one  two  ")).toBe(2);
  });

  // Test empty string
  it("returns 0 for an empty string", () => {
    expect(countWords("")).toBe(0);
  });

  // Test punctuation
  it("returns the correct count for a string with punctuation", () => {
    expect(countWords("one, two, three, four!")).toBe(4);
  });

  // Test multi-language
  it("returns the correct count for a multi-language string", () => {
    expect(countWords("uno dos tres četiri")).toBe(4);
  });
});

