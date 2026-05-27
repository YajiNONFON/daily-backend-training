// ============================================================
// DAY 03 — Week 1
// ============================================================

// FONCTION 1
// Groupe les éléments d'un tableau par une clé
// Ex: groupBy([{role:'admin',name:'Alice'},{role:'user',name:'Bob'},{role:'admin',name:'Carol'}], 'role')
// => { admin: [{...}, {...}], user: [{...}] }
export function groupBy<T>(arr: T[], key: keyof T): Record<string, T[]> {
  const res: Record<string, T[]> = {};

  for (const x of arr) {
    const k = String(x[key]);

    res[k] = res[k] || [];
    res[k].push(x);
  }

  return res;
}

/*
 La fonction groupBy de type générique T reçoit un tableau arr de type T 
 et une clé key qui doit être une propriété existante de T. 
 Elle retourne un Record dont les clés sont des string et les valeurs sont des tableaux de T. 
 On crée res, un objet vide de type Record<string, T[]>. 
 Pour chaque élément x du tableau, on récupère la valeur de la clé key et on la convertit 
 en string pour obtenir k. Si le groupe res[k] n'existe pas encore on crée un tableau vide, 
 ensuite on pousse x dedans. On retourne res en dehors de la boucle.
 */

//EN

/*
 The function groupBy with generic type T receives an array arr 
 of type T and a key that must be an existing property of T. 
 It returns a Record where the keys are string and the values 
 are arrays of T. We create res, an empty object of type 
 Record<string, T[]>. For each element x of the array, 
 we retrieve the value of the key key and convert it 
 to a string to get k. If the group res[k] does not exist 
 yet we create an empty array, then we push x into it. 
 We return res outside the loop.

 */

// FONCTION 2
// Aplatit un tableau de tableaux (un seul niveau)
// Ex: flatten([[1,2],[3],[4,5,6]]) => [1,2,3,4,5,6]
export function flatten<T>(arr: T[][]): T[] {
  return arr.flat();
}

/*La fonction flatten de type générique T reçoit un tableau de tableaux arr de type T 
  et retourne un tableau simple de type T. Elle retourne directement le résultat de .flat() 
  qui fusionne tous les sous-tableaux en un seul niveau. 
 */

//EN

/*
  The function flatten with generic type T receives an array of arrays arr of type T 
  and returns a simple array of type T. It directly returns the result of .flat() 
  which merges all sub-arrays into a single level.
  
  */
