import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import './roles.template.htm'

@Component({
    selector: 'roles-input',
    template: require('./roles.template.htm')
})
export class RolesComponent implements OnInit {
    roles: string[] = ["admin", "editor", "writer", "reader"];
    model: any = {
        role: 'reader'
    };
    @Output()
    private role = new EventEmitter<string>();

    private _selectedRole: string = 'reader';

    @Input()
    get selectedRole(): string {
        return this._selectedRole;
    }

    set selectedRole(value: string) {
        this._selectedRole = value;
    }

    ngOnInit(): void {
        this.role.emit(this.selectedRole);
    }

    setRole(role: string) {
        this.selectedRole = role;
        this.ngOnInit();
    }

}