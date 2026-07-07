import RegisterService from "../../application/services/register.service.js";
import { RegisterDto } from "../../application/dtos/index.js";
import { toRegisterResponse } from "../mappers/index.js";
import userRepository from "../../repositories/user.repository.js"
import passwordService from "../../../../shared/infrastructure/auth/password.service.js";

const registerService = new RegisterService(userRepository, passwordService)

const registerController = async (req, res, next) => {
    const registerDto = new RegisterDto(req.validatedBody);
    try {
        const user = await registerService.execute(registerDto);
        const response = toRegisterResponse(user);
        res.status(201).json({ message: "User registered successfully!", response })
    } catch (err) {
        next(err);
    }
}

export default registerController;