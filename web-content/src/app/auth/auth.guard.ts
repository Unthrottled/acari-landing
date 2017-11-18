/**
 * Created by alex on 9/15/17.
 */
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {Permissions} from "./Permissions.component";
import {UserPrincipal} from "./UserPrincipal.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService, private userToken: UserPrincipal) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        if (this.authService.isLoggedIn) {
            return Permissions.canActivate(this.userToken, route.routeConfig.path);
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return Observable.of(false);
    }
}
