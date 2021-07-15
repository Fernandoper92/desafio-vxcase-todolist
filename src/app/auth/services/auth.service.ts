import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserRegister } from 'src/app/shared/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  getLoggedUser(): User {
    const user = localStorage.getItem('loggedUser');
    return JSON.parse(user);
  }

  login(user: UserRegister) {
    if (user) {
      localStorage.setItem('loggedUser', JSON.stringify({username: user.username}));
      this.router.navigateByUrl('/tarefas');
    }
  }

  loggout() {
    localStorage.removeItem('loggedUser');
    this.router.navigateByUrl('/login');
  }
}
