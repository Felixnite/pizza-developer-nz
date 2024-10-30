const form = document.querySelector('#pizzaForm');
const result = document.querySelector('#totalCost');
const sizeSelect = document.querySelector('#size');

// Constantes
const costoPreparacion = 2.0; // Costo fijo de la mano de obra
const costoHarinaCM = 0.03; // Costo de harina por cm^2
const costoIngredientes = {
  '10': 1, // Pequeña
  '14': 2, // Mediana
  '16': 4 // Grande
};
const comision = 1.5
// const precios = {

// }


form.addEventListener('submit', (e) => {
  e.preventDefault()

  // Validar seleccion
  if (!sizeSelect.value) {
    sizeSelect.classList.add('is-invalid');
    return;
  } else {
    sizeSelect.classList.remove('is-invalid');
  }

  const size = parseFloat(sizeSelect.value)
  const ingredientesEscogidos = Array.from(document.querySelectorAll('.form-check-input:checked')).length
  
  //Calculamos el radio
  const radius = size / 2
  
  //Calcular el area de la pizza
  const area = Math.PI * (radius * radius)
  
  //Calcular el costo de harina 
  
  const costoHarina = area * costoHarinaCM
  
  //Calcular el costo de los ingredientes basandonos en el tamaño
  const costoPorIngrediente = costoIngredientes[size]
  const totalCostoIngredientes = ingredientesEscogidos * costoPorIngrediente
  
  //Calcular el costo total de preparacion
  
  const precioTotal = costoPreparacion + costoHarina + totalCostoIngredientes
  
  //Calcular el precio final
  const precioFinal = precioTotal * 1.5
  
  //Mostrar el resultado 
  result.innerText = `$${precioFinal.toFixed(2)}`

});





// function calcularArea(diametro) {
//   return (Math.PI * (diametro / 2) ** 2).toFixed(2);
// }
// // Calcula el costo de la pizza

// function calcularCosto(diametro, cantidadExtras, comision, costoPreparacion) {

//     // Costo base de la pizza
//     const costoBase = calcularArea(diametro) * costoHarinaCM;
//     // Costo de ingredientes
//     const costoIngredientes = cantidadExtras * costoIngredientes[diametro] || 0;
//     // Costo labor
//     const costoLabor = costoPreparacion * comision;
//     return costoBase + costoIngredientes + costoLabor
    
// }
// windows.on
// console.log(calcularCosto('10', 2, comision, costoPreparacion))
