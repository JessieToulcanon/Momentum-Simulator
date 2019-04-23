const bcrypt = require("bcrypt");

const bcryptSalt = 10;


module.exports = [
  {
    "username": "Admin",
    "role": true,
    "intern": true,
    "email": "mendezdickerson@coash.com",
    "position": "Projet",
    "password": bcrypt.hashSync("1234", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    "username": "Mendez Dickerson",
    "role": false,
    "intern": true,
    "email": "mendezdickerson@coash.com",
    "position": "data-scientist",
    "password": bcrypt.hashSync("+33 (903) 461-2638", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    "username": "Brandi Foley",
    "role": false,
    "intern": false,
    "email": "brandifoley@coash.com",
    "position": "Finance",
    "password": bcrypt.hashSync("+33 (842) 537-2364", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    "username": "Flores Black",
    "role": false,
    "intern": true,
    "email": "floresblack@coash.com",
    "position": "Finance",
    "password": bcrypt.hashSync("+33 (971) 550-2128", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    "username": "Cecilia Perez",
    "role": false,
    "intern": false,
    "email": "ceciliaperez@coash.com",
    "position": "autre",
    "password": bcrypt.hashSync("+33 (839) 573-2883", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    "username": "Mindy Sampson",
    "role": false,
    "intern": false,
    "email": "mindysampson@coash.com",
    "position": "UX/UI",
    "password": bcrypt.hashSync("+33 (909) 499-2799", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    "username": "Kim Roman",
    "role": false,
    "intern": true,
    "email": "kimroman@coash.com",
    "position": "développeur",
    "password": bcrypt.hashSync("+33 (805) 434-2818", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    "username": "Elena Clarke",
    "role": false,
    "intern": true,
    "email": "elenaclarke@coash.com",
    "position": "data-scientist",
    "password": bcrypt.hashSync("+33 (972) 498-2848", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    "username": "Charity Richmond",
    "role": false,
    "intern": true,
    "email": "charityrichmond@coash.com",
    "position": "Finance",
    "password": bcrypt.hashSync("+33 (929) 590-3356", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    "username": "Billie Ewing",
    "role": false,
    "intern": false,
    "email": "billieewing@coash.com",
    "position": "UX/UI",
    "password": bcrypt.hashSync("+33 (936) 420-3912", bcrypt.genSaltSync(bcryptSalt))
  },
  {
    "username": "Millicent Branch",
    "role": false,
    "intern": true,
    "email": "millicentbranch@coash.com",
    "position": "Projet",
    "password": bcrypt.hashSync("+33 (912) 484-3568", bcrypt.genSaltSync(bcryptSalt))
  }
]