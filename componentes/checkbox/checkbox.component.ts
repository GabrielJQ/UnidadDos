import {ChangeDetectionStrategy, Component, model} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule],
  changeDetection: ChangeDetectionStrategy.OnPush,  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  readonly checked = model(false);
  readonly indeterminate = model(false);
  readonly labelPosition = model<'before' | 'after'>('after');
  readonly disabled = model(false);
}
