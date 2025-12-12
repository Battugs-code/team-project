import {
  sighUpService,
  sighInService,
  getCurrentUserService,
} from "../services/user.service.js";
export const sighUpControllers = async (req, res) => {
  const { email, password, username, phone } = req.body;
};
export const sighInService = async (req, res) => {
  const { email, password, username, phone } = req.body;
};
export const getUserControllers = async (req, res) => {
  const { email, password, username, phone } = req.body;
};
