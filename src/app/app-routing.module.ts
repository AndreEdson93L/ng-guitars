import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuitarCataloguePage } from "./pages/guitar-catalogue/guitar-catalogue.page";
import { LoginPage } from "./pages/login/login.page";
import { ProfilePage } from "./pages/profile/profile.page";

const routes: Routes = [
    {
        path: "",
        component: LoginPage
    },
    {
        path: "guitars",
        component: GuitarCataloguePage
    },
    {
        path: "profile",
        component: ProfilePage
    }
]

@NgModule({
    //import a module
    imports:[
        RouterModule.forRoot(routes)
    ],
    //expose module and it's features
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{

}