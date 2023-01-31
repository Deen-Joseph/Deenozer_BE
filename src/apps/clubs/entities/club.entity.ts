import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';


@Entity()
export class Club {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 80 })
  club_name: string;

  @Column({ type: 'varchar', length: 80 })
  league_name: string;

  @Column({ type: 'varchar', length: 50 })
  nationality: string;

  @Column()
  confederation: string;

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
