import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class UsersService {
    private readonly users = [
        {
          userId: 1,
          name:'John',
          username: 'john',
          password: 'changeme123',
          email:'john@john.com'
        },
        {
          userId: 2,
          name:'Maria',
          username: 'maria',
          password: 'guess@123',
          email:'maria@mary.com'
        },
    ];

async findOne(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}
