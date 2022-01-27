
import { Component } from '@angular/core';
import { Country } from './Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries: Country[] = [
    new Country("Shrekadonia", "English", "Shrekdonia.jpg", "Shrek", ["dark blue", "white", "red"]),
    new Country("Icantastan", "Icantaneese", "Icantistan.png", "Jim", ["cyan", "yellow"]),
    new Country("Roman Empire", "Latin", "RomanEmpire.png", "Julius Caesar", ["red", "selective yellow"]),
    new Country("Ukraine", "Ukrainian", "Ukraine.png", "Volodymyr Zelensky", ["blue", "yellow"]),
    new Country("Russia", "Russian", "Russia.png", "Vladimir Putin", ["white", "blue", "red"])
  ];
}