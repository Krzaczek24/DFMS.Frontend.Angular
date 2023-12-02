import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MenuComponent } from '../../components/menu/menu.component'

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, MenuComponent],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

}
