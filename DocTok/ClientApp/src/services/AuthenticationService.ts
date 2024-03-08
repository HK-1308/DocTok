import customAxios from "../customAxios";
import {createHash} from "crypto"
import Project from "../models/responseModels/User";
import IAuthenticationService from "./interfaces/IAuthenticationService";

export default class AuthenticationService implements IAuthenticationService{
    public async login(user: Project): Promise<Project> {
        const response = await customAxios.post('/authentication/login', user)
        return response.data
    }
    public async register(user: Project, password: string): Promise<Project> {
        user.hash = createHash('sha256').update(user.username.concat(password)).digest('hex');
        const response = await customAxios.post('/authentication/register', user)
        return response.data
    }
    logout(user: Project): Promise<Project> {
        throw new Error("Method not implemented.");
    }

}