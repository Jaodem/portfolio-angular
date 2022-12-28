import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { PerfilComponent } from './presentacion/perfil/perfil.component';
import { AboutComponent } from './presentacion/about/about.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { InstitucionesComponent } from './educacion/instituciones/instituciones.component';
import { SkillsComponent } from './skills/skills.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbaradComponent } from './admin/navbarad/navbarad.component';
import { SalirComponent } from './modals/salir/salir.component';
import { RadminComponent } from './admin/navbarad/radmin/radmin.component';
import { BanneradComponent } from './admin/bannerad/bannerad.component';
import { ImgComponent } from './modals/imguno/img.component';
import { PresentadComponent } from './admin/presentad/presentad.component';
import { AboutadComponent } from './admin/presentad/aboutad/aboutad.component';
import { PerfiladComponent } from './admin/presentad/perfilad/perfilad.component';
import { ModperfilComponent } from './modals/modperfil/modperfil.component';
import { ModaboutComponent } from './modals/modabout/modabout.component';
import { ExperadComponent } from './admin/experad/experad.component';
import { EducadComponent } from './admin/educad/educad.component';
import { SkillsadComponent } from './admin/skillsad/skillsad.component';
import { ProyecadComponent } from './admin/proyecad/proyecad.component';
import { ModexpComponent } from './modals/modexp/modexp.component';
import { InstadComponent } from './admin/educad/instad/instad.component';
import { ModtecComponent } from './modals/modtec/modtec.component';
import { ModiesComponent } from './modals/modies/modies.component';
import { ModiesaComponent } from './modals/modiesa/modiesa.component';
import { ModuncaComponent } from './modals/modunca/modunca.component';
import { ModlinuxComponent } from './modals/modlinux/modlinux.component';
import { ModhtmlComponent } from './modals/modhtml/modhtml.component';
import { ModcssComponent } from './modals/modcss/modcss.component';
import { ModjsComponent } from './modals/modjs/modjs.component';
import { ModbootsComponent } from './modals/modboots/modboots.component';
import { ModskillsComponent } from './modals/modskills/modskills.component';
import { ModeducComponent } from './modals/modeduc/modeduc.component';
import { ModproComponent } from './modals/modpro/modpro.component';
import { ModangComponent } from './modals/modang/modang.component';
import { SkissComponent } from './admin/skillsad/skiss/skiss.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    BannerComponent,
    PresentacionComponent,
    PerfilComponent,
    AboutComponent,
    ExperienciaComponent,
    EducacionComponent,
    InstitucionesComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    AdminComponent,
    ErrorComponent,
    InicioComponent,
    NavbaradComponent,
    SalirComponent,
    RadminComponent,
    BanneradComponent,
    ImgComponent,
    PresentadComponent,
    AboutadComponent,
    PerfiladComponent,
    ModperfilComponent,
    ModaboutComponent,
    ExperadComponent,
    EducadComponent,
    SkillsadComponent,
    ProyecadComponent,
    ModexpComponent,
    InstadComponent,
    ModtecComponent,
    ModiesComponent,
    ModiesaComponent,
    ModuncaComponent,
    ModlinuxComponent,
    ModhtmlComponent,
    ModcssComponent,
    ModjsComponent,
    ModbootsComponent,
    ModskillsComponent,
    ModeducComponent,
    ModproComponent,
    ModangComponent,
    SkissComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
