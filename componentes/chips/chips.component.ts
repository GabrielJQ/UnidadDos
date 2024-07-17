import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [MatChipsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css'
})
export class ChipsComponent {

}
