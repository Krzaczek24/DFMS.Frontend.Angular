import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MenuComponent } from '../menu/menu.component'

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, MenuComponent],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
