import { Component } from '@angular/core';
import { Login } from './Models/login';
import { Register } from './Models/register';
import { JwtAuth } from './Models/jwtAuth';
import { AuthenticationService } from './Services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular LuftBorn';
  loginDto = new Login();
  registerDto = new Register();
  jwtDto = new JwtAuth();

  constructor(private authService: AuthenticationService){}

  Register(registerDto:Register){
    this.authService.register(registerDto).subscribe();
  }

  Login(loginDto:Login){
    this.authService.login(loginDto).subscribe((jwtDto)=>{
      localStorage.setItem('jwtToken',jwtDto.token);
    });
  }

  Weather(){
    this.authService.getWeather().subscribe((weatherData:any)=>{
      console.log(weatherData);
    });
  }

  // Products(){
  //   this.authService.getProducts().subscribe((productData:any)=>{
  //     debugger;
  //     console.log(productData);
  //   });
  // }
}
