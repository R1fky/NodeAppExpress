const transporter = require("../config/email");

exports.sendingEmail = async (req, res) => {
  const { name, email, message } = req.body;
  console.log("request Body : ", req.body);

  const mailOption = {
    from: `"${name}" <solobread11@gmail.com>`,
    to: "rifkiyuda11@gmail.com",
    subject: "Pesan dari Halaman Contact",
    text: `Nama : ${name}\nEmail: ${email}\nPesan : ${message}`,
  };

  try {
    await transporter.sendMail(mailOption);
    return res.status(200).json({
      success: true,
      message: "Sending Email Success",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed Send Email",
      error: error.message,
    });
  }
};
