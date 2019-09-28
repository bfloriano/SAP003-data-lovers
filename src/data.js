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

const media = (arr) => (arr.map((i) => Number(i.replace(/[^0-9.,]+/g, ""))).reduce((pv, item) => (pv + item))/(arr.length));

app = {
  filtrar: filtrar, 
  ordenar: ordenar,
  media: media,
};

