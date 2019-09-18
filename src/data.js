const filtrar = (arr, condition) => {
  return arr.filter(item => item.type.includes(condition));
};

const filtrarf = (arr, condition) => {
  return arr.filter(item => item.weaknesses.includes(condition));
};



// const ordenar = () => {
//  return alert("heeeeeelp");
// };




app = {
  filtrar: filtrar, 
  filtrarf: filtrarf,
  // ordenar: ordenar
};
