import { CurrentUserInterface } from "../../shared/current-user.interface";
import { BackendErrorsInterface } from "../../shared/types/backend-errors.interface";

export interface AuthStateInterface {
  isLoading: boolean
  isSubmitting: boolean
  currentUser: CurrentUserInterface | null
  isLoggedIn: boolean | null
  validationErrors: BackendErrorsInterface | null
}
