import {
    IsAlphanumeric,
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
    IsAlpha,
    MaxLength,
    IsOptional,
    isEmpty
  } from 'class-validator';
  
  
  export class CriarColaboradorDto {
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
    //@isUnique({tableName: 'colaboradores', column: 'cpf'})
    cpf: string;


    @IsString()
    @MaxLength(11)
    @IsOptional()
    celular: string;

    @IsNotEmpty()
    @IsString()
    conhecimentos: string;

    @IsOptional()
    validacao: string;

    @IsOptional()
    dataAlteracao: Date;

  }