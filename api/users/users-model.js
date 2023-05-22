const { v4: uuidv4 } = require("uuid");
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

function getId() {
  return uuidv4();
}

let allUsers = [
  { id: getId(), username: "Burcu", password: "1234" },
  { id: getId(), username: "Burcu2", password: "1234" },
];

function getAllUsers() {
  return allUsers;
}
function insertUser(user) {
  user.id = getId();
  allUser.push(user);
  return user;
}
function login(user) {
  for (let i = 0; i < allUsers.length; i++) {
    const item = allUsers[i];
    if (item.username === user.username && item.password === user.password) {
      existUser = item;
      break;
    }
  }
  return existUser;
}

module.exports = {
  getAllUsers,
  insertUser,
  login,
};
