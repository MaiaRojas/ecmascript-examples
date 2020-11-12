// function hello() {
//     return 'Hello!';
// };

const hello = () => console.log('Hello');

module.exports = hello;

// export function hello() {
//     return 'Hello!'
// };

// export const bye = 'Bye!';
let number = 4;
const saludar = () => "¡Hola!";
const goodbye = () => "¡Adiós!";
class Clase {}

export { number }; // Se crea un módulo y se añade number
export { saludar, goodbye as despedir }; // Se añade saludar y despedir al módulo
export { Clase as default }; // Se añade Clase al módulo (default)
export { saludar as otroNombre }; // Se añade otroNombre al módulo