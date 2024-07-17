import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [MatListModule, MatDividerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css'
})
export class DividerComponent {

}
