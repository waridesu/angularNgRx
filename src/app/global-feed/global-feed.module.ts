import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { RouterModule, Routes } from "@angular/router";
import { FeedComponent } from "../shared/components/feed/feed.component";

const routes: Routes = [{
  path: '',
  component: GlobalFeedComponent
}]
@NgModule({
  declarations: [
    GlobalFeedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedComponent
  ]
})
export class GlobalFeedModule {}
