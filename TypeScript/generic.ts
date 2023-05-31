 const arrayOfNumbers: Array<number> = [1, 2, 3]
 const arrayOfStrings: Array<string> = ['M', 'a', 'x']

 function reverse<T>(array: T[]): T[]{
    return array.reverse()
 }

 reverse(arrayOfNumbers)
 reverse(arrayOfStrings)