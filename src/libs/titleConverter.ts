export default function titleConverter(input: string): string {
  const words = input.split("-");
  const titleCaseWords = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const titleCaseString = titleCaseWords.join(" ");
  return titleCaseString;
}
