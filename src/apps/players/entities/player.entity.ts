import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

// enum Gender {
//   Male,
//   Female,
//   Others,
// }

// enum Position {
//   Forward,
//   Striker,
//   Secondary_Striker,
//   Left_Wing,
//   Right_Wing,
//   Left_Midfield,
//   Right_Midfield,
//   Centre_Attacking_Midfield,
//   Centre_Midfield,
//   Defensive_Midfield,
//   Left_back,
//   Right_back,
//   Left_Wing_Back,
//   Right_Wing_Back,
//   Centre_Back,
//   Goal_Keeper,
// }

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 80 })
  first_name: string;

  @Column({ type: 'varchar', length: 80 })
  last_name: string;

  @Column({ type: 'varchar', length: 50 })
  nationality: string;

  @Column()
  gender: string;

  @Column({ type: 'varchar', length: 50 })
  club: string;

  @Column()
  dob: Date;

  @Column({ type: 'text' })
  about: string;

  @Column()
  position: string;

  @Column()
  ranking: number;

  @Column({ type: 'varchar', length: 300, nullable: true })
  attachFile: string;

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
