const bcrypt = require('bcryptjs');

const password = 'rituparna';

// bcrypt.hash(password, 12).then((hash) => {
//   console.log(hash);
// });

const hash = '$2a$12$vXTQDS38hsYstH2YQ5O4p.zeHM7Gs70ucSLhZFhqF/ejGE0A.eSmu';

bcrypt.compare(password, hash).then((compare) => {
  console.log(compare);
});
