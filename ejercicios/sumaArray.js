function sumaArray(array) {
  //   const suma = array.reduce((acumulador, value, index, array) => {
  //     acumulador[index] = value;
  //     return acumulador;
  //   }, {});
  const suma = array.reduce((acumulador, value, index, array) => {
    if (typeof value === "number") {
      return acumulador + value;
    } else {
      return acumulador;
    }
  });
  console.log(`🚀 ~ sumaArray ~ suma:`, suma);
}

module.exports = sumaArray;
