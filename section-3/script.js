function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function same(arr1, arr2) {
  const squaredArr1 = arr1.map((el) => el * el);
  const obj1 = {};
  const obj2 = {};

  for (var item of squaredArr1) {
    // console.log(item);
    if (!obj1[item]) obj1[item] = 1;
    else obj1[item]++;
  }

  for (var item of arr2) {
    if (!obj2[item]) obj2[item] = 1;
    else obj2[item]++;
  }

  const keys1 = Object.keys(obj1)
    .map((item) => Number(item))
    .sort();
  const keys2 = Object.keys(obj2)
    .map((item) => Number(item))
    .sort();

  const values1 = Object.values(obj1)
    .map((item) => Number(item))
    .sort();
  const values2 = Object.values(obj2)
    .map((item) => Number(item))
    .sort();

  const keysCheck = arrayEquals(keys1, keys2);
  const valuesCheck = arrayEquals(values1, values2);

  if (keysCheck && valuesCheck) console.log("true");
  else console.log("false");
}

same([1, 3, 3, 2], [4, 1, 9, 9]);
