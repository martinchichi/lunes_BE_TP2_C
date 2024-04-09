function numeroMaximo(array) {
  //   console.log(`🚀 ~ numeroMaximo ~ array:`, ...array)
  // console.log(`🚀 ~ numeroMaximo ~ array:`, array)
  //   const maximo=Math.max(4,6,100,2)
  //   let maximo = array[0];
  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
  //     if (element > maximo) maximo = element;
  //   }
  //   console.log(`🚀 ~ numeroMaximo ~ maximo:`, maximo);
  // ------------
  const maximo = Math.max(...array);
  console.log(`🚀 ~ numeroMaximo ~ maximo:`, maximo);
}

module.exports = numeroMaximo;
