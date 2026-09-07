import jwt from "jsonwebtoken";

// Simple single-admin login: credentials live in env vars, not the DB.
// There is no admin signup on purpose — only the person holding the
// ADMIN_EMAIL / ADMIN_PASSWORD env values can log in.
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(400).json({ message: "Invalid admin credentials" });
    }

    const token = jwt.sign({ role: "admin", email }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    res.json({
      message: "Admin login successful",
      token,
      admin: { email },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
