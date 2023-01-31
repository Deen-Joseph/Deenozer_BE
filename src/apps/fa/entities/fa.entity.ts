import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Fa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 80 })
  fa_name: string;

  @Column({ type: 'varchar', length: 50 })
  confederation: string;

  @Column({ type: 'varchar', length: 50 })
  nationality: string;

  @Column()
  dof: Date;

  @Column({ type: 'text' })
  about: string;

  @Column()
  ranking: number;

  @Column({ type: 'varchar', length: 300, nullable: true })
  attachFile: string;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
