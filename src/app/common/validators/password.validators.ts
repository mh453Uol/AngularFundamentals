import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    static confirmPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'mosh') {
                    resolve({ confirmPassword: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

    static passwordShouldMatch(control: AbstractControl): ValidationErrors | null {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value) {
            return ({ passwordShouldMatch: true });
        }
        return null;
    }
}