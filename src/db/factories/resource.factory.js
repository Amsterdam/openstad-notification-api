import db from '../../bootstrap/sequelize';

const Resource = db.resource;
console.log('resource')
console.log('resource2')
console.log(Resource)

// export function resourceFactory() {
//   return Resource.create({
//     label: 'idea',
//     userId: 1,
//   });
// }
