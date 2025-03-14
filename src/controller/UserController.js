const userModel = require("../models/users");

exports.getAllUsers = async (req, res) => {
  try {
    const [datas] = await userModel.getUser();
    res.render("users", {
      title: "Users Page",
      datas: datas,
      layout: "layouts/main-layout",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message, // Pastikan hanya mengirim error message untuk keamanan
    });
  }
};

exports.insertUser = async (req, res) => {
  const { body } = req;
  try {
    await userModel.createUser(body);
    console.log(body);
    res.status(200).json({
      success: true,
      message: "Create New User Success",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      ErrorMessage: error,
    });
  }
};

exports.updateUsers = async (req, res) => {
  const { idUser } = req.params;
  console.log(idUser);
  const { body } = req;

  try {
    await userModel.updateUser(body, idUser);
    res.status(200).json({
      message: "Update Data Success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      ErrorMessage: error,
    });
  }

  res.json({
    message: "Update data Success",
    data: userData,
  });
};

exports.deleteUser = async (req, res) => {
  const { idUser } = req.params;

  try {
    await userModel.deleteUser(idUser);
    res.status(200).json({
      success : true, 
      message: "Delete Data Success",
    });
  } catch (error) {
    res.status(500).json({
      success : false, 
      message: "Delete Data Failed",
      ErrorMessage : error
    })
  }
};
