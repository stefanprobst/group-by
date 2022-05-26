export function groupBy<T extends object, K extends string | number>(
  values: Array<T>,
  key: (value: T) => K
): Record<K, Array<T>> {
  const groups = Object.create(null);

  values.forEach((value) => {
    const id = key(value)
    if (!Object.hasOwn(groups, id)) {
      groups[id] = [value];
    } else {
      groups[id].push(value);
    }
  });

  return groups;
}

export function groupByToMap<T extends object, K extends any>(
  values: Array<T>,
  key: (value: T) => K
): Map<K, Array<T>> {
  const groups = new Map();

  values.forEach((value) => {
    const id = key(value)
    if (!groups.has(id)) {
      groups.set(id, [value]);
    } else {
      groups.get(id)!.push(value);
    }
  });

  return groups;
}
