import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
// 2
// create a new module and register it as a routing

// register routing and components that are responsible for them
// http://localhost:4200/ -> HomeComponent
// http://localhost:4200/about -> AboutComponent
// http://localhost:4200/posts -> PostsComponent
const routes: Routes = [
    {path: '', component: HomeComponent},
    //9
    //using Children we add a nested page passing the path and the component
    {path: 'about', component: AboutComponent, children: [
        {path: 'extra', component: AboutExtraComponent}
    ] },
    {path: 'posts', component: PostsComponent},
    // 6
    // to go follow the link to add the route of the post with ID
    {path: 'posts/:id', component: PostComponent}
];

@NgModule({
    // register the array we created
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
