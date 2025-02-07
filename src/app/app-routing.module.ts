import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
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
    path: 'adder',
    loadChildren: () => import('./adder/adder.module').then( m => m.AdderPageModule)
  },
  {
    path: 'number-translator',
    loadChildren: () => import('./number-translator/number-translator.module').then( m => m.NumberTranslatorPageModule)
  },
  {
    path: 'multi-table',
    loadChildren: () => import('./multi-table/multi-table.module').then( m => m.MultiTablePageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
