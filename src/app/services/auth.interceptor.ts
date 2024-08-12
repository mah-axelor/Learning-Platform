import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UserService } from './user.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Inject AuthService to access the stored token
  const userService = inject(UserService);
console.log('intercept')
  // Retrieve the JWT token from the AuthService
  const authToken = userService.getToken();

  // If a token is present, clone the request and add the Authorization header
  if (authToken) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    console.log("req:",req)

    // Pass the cloned request instead of the original request to the next handle
    return next(authReq);
  }

  // If no token is present, pass the original request to the next handle
  return next(req);
};
