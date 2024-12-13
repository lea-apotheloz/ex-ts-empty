/**
 * Complete the function body
 *
 * To run the tests : `deno test src/arrays/arrays_test.ts`
 *
 * As you will see, TypeScript will considerably
 * improve the autocomplete experience in your editor.
 */

export function removeNumbersBelowThreshold(
  array: number[],
  threshold: number,
): number[] | [] {
  // Write your code here
    let array1 :number[] = []
        array.forEach((element) => {
            if (threshold <= element) {
                array1.push(element)
            }else{}
        })
    return array1
}

export function filterStringByLength(
  array: string[],
  minLength: number,
  maxLength: number,
): string[] | [] {
  // Write your code here
    const below: string[] = array.filter((array) => array.length >= minLength && array.length <= maxLength)
   return below

}

export function getOnlyTheLowercaseLettersOfTheString(string: string): string {
    // Write your code here
    return string.match(/[a-z]/g)?.join("") || "";
}