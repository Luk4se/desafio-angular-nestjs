import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { EntityManager } from "typeorm";

// decorator interface
export type IsUniqueInterface = {
    tableName: string,
    column: string
}

@ValidatorConstraint({name: 'IsUniqueConstraint', async: true})
@Injectable()
export class IsUniqueConstraint implements ValidatorConstraintInterface {
    constructor(private readonly entityManager: EntityManager) {}
    async validate(
        value: any,
        args?: ValidationArguments
        ): Promise<boolean> {
            // catch opções do decorator
            const {tableName, column}: IsUniqueInterface = args.constraints[0]

            // pesquisar no BD se já existe
            const dataExist = await this.entityManager.getRepository(tableName)
                .createQueryBuilder(tableName)
                .where({[column]: value})
                .getExists()
            
            return !dataExist
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        // retorna mensagem
        const field: string = validationArguments.property
        return `${field} já existe`
    }
}


// decorator function
export function isUnique(options: IsUniqueInterface, validationOptions?: ValidationOptions) {
    return function (object: any, propertyName: string) {
        registerDecorator({
            name: 'isUnique',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [options],
            validator: IsUniqueConstraint,
        })
    }
}