/**
 * Triple Sorting - Sort & Stringify a list by 3 attributes
 * https://www.codewars.com/kata/5829c2c8ef8d4474300000fa/train/javascript
 *
 */

const sort = students =>
  students
    .sort((s1, s2) => {
      if (s1.gpa !== s2.gpa) return s2.gpa - s1.gpa

      const lastName1 = s1.fullName.split(' ')[1]
      const lastName2 = s2.fullName.split(' ')[1]

      if (lastName1[0] !== lastName2[0]) {
        return lastName1[0].localeCompare(lastName2[0])
      }

      return s1.age - s2.age
    })
    .map(s => s.fullName)
    .join(',')
