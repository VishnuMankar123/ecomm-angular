import { createReducer, on} from "@ngrx/store";
import { LoginResponse } from "src/app/modules/loginresponse.model";
import { removeLoginData, setLoginData } from "./auth.actions";
import { inject } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

export const intialState:LoginResponse = AuthService.getLoginDataFromLocalStorage()?AuthService.getLoginDataFromLocalStorage():{
    jwtToken:'',
    userName:null,
    login:false,
}
export const authReducer = createReducer(intialState,
    on(setLoginData,(oldState,payload)=>{
        console.log("set login data action with reducer");
        //console.log(oldState);
        // Create a new state object spread operator is not work as expected
        const newState: LoginResponse = {
            jwtToken: payload.loginResponse.jwtToken,
            user: payload.loginResponse.user,
            login: true
        };

        return newState;
    
}),
on(removeLoginData,(state)=>{
    return {
        jwtToken:"",
        user:null,
        login:false,
    }
})
);