const filtrar = (arr, condition, key) => {
  return arr.filter(item => item[key].includes(condition));
};

const ordenar = (arr, condition, key) => {
  if (condition == "A - Z" || condition == "maisRaros") {
    return arr.sort((a, b) => a[key] > b[key] ? 1: -1);
  } if (condition == "Z - A" || condition == "menosRaros") {
    return arr.sort((a, b) => a[key] < b[key] ? 1: -1);
  }
};

app = {
  filtrar: filtrar, 
  ordenar: ordenar,
};
