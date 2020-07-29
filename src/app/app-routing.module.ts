import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'favoritas',
    loadChildren: () => import('./favoritas/favoritas.module').then( m => m.FavoritasPageModule)
  },
  {
    path: 'home-logado',
    loadChildren: () => import('./home-logado/home-logado.module').then( m => m.HomeLogadoPageModule)
  },
  {
    path: 'cadastro-republica',
    loadChildren: () => import('./cadastro-republica/cadastro-republica.module').then( m => m.CadastroRepublicaPageModule)
  },
  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'republica',
    loadChildren: () => import('./republica/republica.module').then( m => m.RepublicaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
