import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, IsAlpha, isAlphanumeric } from "class-validator";
import { isUnique } from "src/validador";

export class RegistrarColaborador{
    @IsNotEmpty()
    @IsAlpha()
    @MaxLength(100)
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    @MaxLength(100)
    email: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(11)
    @isUnique({tableName: 'colaboradores', column: 'cpf'})
    cpf: string;

    @IsOptional() 
    @IsString()
    @MaxLength(11)
    celular: string;

    @IsNotEmpty()
    @IsString()
    conhecimentos: string;
}