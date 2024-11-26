import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({ email, password}: AuthRequest){
        //verificar se o email existe
        const user= await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(!user){
            throw new Error("User/password incorrect")
        }
        //preciso ferificar se a senha que ele mandou está correta.
        const passwordHash = await compare(password, user.password);

        if(!passwordHash){
            throw new Error("User/password incorrect")
        }

        //gerar um token JWT e devolver os dados do usuário com id , name e email

        return { ok: true}
    }
}

export { AuthUserService };