const filtrarTipo = (arr, condition) => {
  return arr.filter(item => item.type.includes(condition));
};

const filtrarFraqueza = (arr, condition) => {
  return arr.filter(item => item.weaknesses.includes(condition));
};

const ordemAlfabetica = (arr, condition) => {
  if (condition === "A - Z") {
    return arr.sort((a, b) => a.name > b.name ? 1: -1);
  }
  if (condition === "Z - A") {
    return arr.sort((a, b) => a.name < b.name ? 1: -1);
  }
};

const ordemRaridade = (arr, condition) => {
  if (condition === "maisRaros") {
    return arr.sort((a, b) => a.spawn_chance > b.spawn_chance ? 1: -1);
  }
  if (condition === "menosRaros") {
    return arr.sort((a, b) => a.spawn_chance < b.spawn_chance ? 1: -1);
  }
};

app = {
  filtrarTipo: filtrarTipo, 
  filtrarFraqueza: filtrarFraqueza,
  ordemAlfabetica: ordemAlfabetica,
  ordemRaridade: ordemRaridade,
};
