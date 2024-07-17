import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-autocompletar',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],  templateUrl: './autocompletar.component.html',
  styleUrl: './autocompletar.component.css'
})
export class AutocompletarComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
