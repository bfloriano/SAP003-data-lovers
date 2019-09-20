const filtrar = (arr, condition) => {
  return arr.filter(item => (item.type == condition))
};

const filtrarf = (arr, condition) => {
  return arr.filter(item => item.weaknesses.includes(condition));
};

// const filtrart = (arr, condition) => {
//   return arr.filter(item => (item.weaknesses && item.type).includes(condition));
// };


// const x = arr.filter(item => (item.type == condition))
// exibeCartao(x)


// const ordenar = () => {
//  return alert("heeeeeelp");
// };




app = {
  filtrar: filtrar, 
  filtrarf: filtrarf,
  // filtrart: filtrart,
  // ordenar: ordenar
};
