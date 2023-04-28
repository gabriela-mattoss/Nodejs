// Importar o módulo EventEmitter
const EventEmitter = require('events');

// Criar uma classe personalizada que herda de EventEmitter
class MeuEvento extends EventEmitter {}

// Instanciar a classe personalizada
const meuEvento = new MeuEvento();

// Registrar um ouvinte de evento
meuEvento.on('meuEventoPersonalizado', () => {
  console.log('Evento personalizado disparado!');
});

// Emitir (disparar) o evento
meuEvento.emit('meuEventoPersonalizado');

