const DbPool = require("../config/database");
const bcrypt = require("bcrypt");

const getUser = () => {
  const sqlQuery = "SELECT * FROM users";

  return DbPool.execute(sqlQuery);
};

const createUser = async (body) => {
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(body.password, saltRounds);

  const sqlQuery = `  INSERT INTO users (username, password, nama, np) 
                        VALUES 
                        ('${body.username}', '${hashPassword}', '${body.name}', '${body.nomor_hp}')`;

  return DbPool.execute(sqlQuery);
};

const updateUser = async (body, idUser) => {
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(body.password, saltRounds);

  const sqlQuery = `  UPDATE users 
                        ('${body.username}', '${hashPassword}', '${body.nama}', '${body.np}') 
                        where id= ${idUser}`;

  return DbPool.execute(sqlQuery);
};

const deleteUser = (idUser) => {
  const sqlQuery = `  DELETE FROM users where id= ${idUser}`;

  return DbPool.execute(sqlQuery);
};

//regisUser
const regisUser = async (body) => {
  const saltRounds = 10;
  const hashPassword = await bcrypt.hash(body.password, saltRounds);

  const sqlQuery = `  INSERT INTO users (username, email, password) VALUES (
                        '${body.username}', '${body.email}', '${hashPassword}')`;

  return DbPool.execute(sqlQuery);
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  regisUser
};
