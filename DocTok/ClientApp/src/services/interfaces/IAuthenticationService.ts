import User from "../../models/responseModels/User";

export default interface IDocumentService{
    login(user: User) : Promise<User>

    register(user: User, password: string) : Promise<User>

    logout(user: User) : Promise<User>
}