import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return 'Sign Up API';
  }

  signin() {
    return 'Sign In API';
  }
}
