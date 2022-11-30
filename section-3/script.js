function same(arr1, arr2) {
  const squaredArr1 = arr1.map((el) => el * el);
  const obj1 = {};
  const obj2 = {};

  for (var item of squaredArr1) {
    console.log(item);
    if (!obj1[item]) obj1[item] = 1;
    else obj1[item]++;
  }

  for (var item of arr2) {
    if (!obj2[item]) obj2[item] = 1;
    else obj2[item]++;
  }

  console.log(squaredArr1, arr2, obj1, obj2);
}

same([1, 2, 3, 3], [4, 1, 9]);
