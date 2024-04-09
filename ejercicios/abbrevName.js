function abbrevName(string) {
  // const iniciales=string.split(" ")
  // const letras=iniciales.map(value=>value[0])
  // const unirLetras=letras.join(".").toUpperCase()
  // console.log(`🚀 ~ abbrevName ~ iniciales:`, iniciales)
  // console.log(`🚀 ~ abbrevName ~ letras:`, letras)
  // console.log(`🚀 ~ abbrevName ~ unirLetras:`, unirLetras)
  // -----------------

  const iniciales = string
    .split(" ")
    .map((value) => value[0])
    .join(".")
    .toUpperCase();
  console.log(`🚀 ~ abbrevName ~ iniciales:`, iniciales);
}

module.exports = abbrevName;
