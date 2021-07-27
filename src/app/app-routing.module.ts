import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  {
    path: '',
    component: TestComponent,
  }
]

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
