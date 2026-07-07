import createAppError from "../../../../shared/errors/factories/createAppError.js";
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
            throw createAppError(registerErrors.emailAlreadyExists);
        }

        const usernameExists = await this.userRepository.existsByUsername(username);
        if (usernameExists) {
            throw createAppError(registerErrors.usernameAlreadyExists);
        }

        const hashedPassword = await this.passwordService.hashPassword(password);

        const user = await this.userRepository.create({
            username,
            email,
            passwordHash: hashedPassword,
            name: name
        });

        return user;
    }
}


