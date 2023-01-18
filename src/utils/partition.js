export function partition(list, predicate) {
  const pass = [],
    noPass = []
  list.forEach((element) => (predicate(element) ? pass : noPass).push(element))
  return [pass, noPass]
}