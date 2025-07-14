
// schemas/link.js
export default {
  name: 'link',
  title: 'Enlace',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Texto del botón/enlace',
      type: 'string',
      description: 'El texto que se mostrará en el botón o enlace.',
    },
    {
      name: 'internalLink',
      title: 'Enlace Interno',
      description: 'Selecciona una página dentro del sitio para enlazar.',
      type: 'reference',
      to: [{type: 'homePage'}, {type: 'paginaEncuentros'}], // Puedes añadir más tipos de página aquí
    },
    {
      name: 'externalUrl',
      title: 'Enlace Externo',
      description: 'Introduce una URL completa para un enlace externo (ej: https://www.instagram.com/espacionau).',
      type: 'url',
    },
  ],
};
