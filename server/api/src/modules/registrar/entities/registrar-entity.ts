import { Column, Entity, PrimaryGeneratedColumn,  } from 'typeorm';

@Entity()
export class Colaborador {
  /**
   * gerar id automaticamente.
   */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nome: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 11 })
  cpf: string;

  @Column({ type: 'varchar' })
  conhecimento: string;

  @Column({ type: 'varchar' })
  /**
   * t - validado
   * f - não validado
   */
  validacao: string;

  @Column({ type: 'timestamptz', nullable:true})
  dataAlteracao: Date;

  @Column({ type: 'varchar', length: 11, nullable:true })
  celular: string;
}