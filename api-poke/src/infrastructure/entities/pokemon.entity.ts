import { Entity, Column, PrimaryGeneratedColumn, Index  } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Index({ unique: true })
  @Column('varchar', { length: 100, nullable: false })
  name: string;

  @Column('varchar', { length: 200, nullable: true })
  clase: string;

  @Column({ length: 200, nullable: true })
  power: string;
}
