import AppError from "../../../../shared/errors/AppError.js";
import ErrorCodes from "../../../../shared/errors/errorCodes.js";
import { registerErrors } from "../../domain/errors/index.js"

export default class RegisterService {
    constructor(userRepository, passwordService) {
        this.userRepository = userRepository;
        this.passwordService = passwordService
    }
    async execute(registerDto) {
        const {
            username,
            email,
            password,
            name
        } = registerDto;

        const emailExists = await this.userRepository.existsByEmail(email);
        if (emailExists) {
            throw new AppError({ statusCode: 400, code: ErrorCodes.RESOURCE_CONFLICT, message: registerErrors.emailConflict });
        }

        const usernameExists = await this.userRepository.existsByUsername(username);
        if (usernameExists) {
            throw new AppError({ statusCode: 400, code: ErrorCodes.RESOURCE_CONFLICT, message: registerErrors.usernameConflict })
        }

        const hashedPassword = await this.passwordService.hashPassword(password);

        const user = await this.userRepository.create({
            username,
            email,
            passwordHash: hashedPassword,
            name: name
        });
        console.log("User: ", user)

        return user;
    }
}


