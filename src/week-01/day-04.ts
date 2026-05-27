// ============================================================
// DAY 04 — Week 1
// ============================================================

// FONCTION 1
// Déduplique un tableau (garde l'ordre de première apparition)
// Ex: unique([1,2,2,3,1,4]) => [1,2,3,4]
export function unique<T>(arr: T[]): T[] {
  const result: T[] = [];
  for (const item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

/* La fonction unique de type générique T reçoit un tableau arr de 
type T et retourne un tableau de type T. On crée result, 
un tableau vide de type T. Pour chaque item du tableau arr, 
si item n'est pas déjà inclus dans result on le pousse dedans 
avec .push(). On retourne result en dehors de la boucle.
*/

//EN

/*

The function unique with generic type T receives an array arr of type 
T and returns an array of type T. We create result, an empty array of type T. 
For each item of the array arr, if item is not already included in result 
we push it in with .push(). We return result outside the loop.


*/

// FONCTION 2
// Compte les occurrences de chaque élément
// Ex: countOccurrences(['a','b','a','c','b','a']) => { a:3, b:2, c:1 }
export function countOccurrences<T extends string | number>(
  arr: T[],
): Record<string, number> {
  const res: Record<string, number> = {};
  for (const x of arr) {
    res[String(x)] = (res[String(x)] || 0) + 1;
  }
  return res;
}

/* La fonction countOccurrences de type générique T contraint à string ou number 
reçoit un tableau arr de type T et retourne un Record dont les clés sont des string 
et les valeurs des number. On crée res, un objet vide de type Record<string, number>. 
Pour chaque élément x du tableau, on convertit x en string et on l'utilise comme clé. 
Si la clé existe déjà on incrémente sa valeur de 1, sinon on la démarre à 1 avec || 0. 
On retourne res en dehors de la boucle. 
*/

//EN

/*
The function countOccurrences with generic type T constrained to string or number 
receives an array arr of type T and returns a Record where the keys 
are string and the values are number. We create res, an empty object of type 
Record<string, number>. For each element x of the array, 
we convert x to a string and use it as a key. 
If the key already exists we increment its value by 1, 
otherwise we start it at 1 with || 0. We return res outside the loop.

*/
