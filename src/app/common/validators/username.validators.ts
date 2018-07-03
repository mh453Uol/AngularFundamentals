import { AbstractControl } from "@angular/forms";
import { ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl, args?: string[]): ValidationErrors | null {
        if (args != null) {
            console.log(args);
        }
        if ((control.value as string).indexOf(' ') === -1) {
            return null;
        }
        return { cannotContainSpace: true };
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'mosh') {
                    resolve({ shouldBeUnique: true });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}