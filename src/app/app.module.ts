import { GithubFollowersService } from './../services/github-followers.service';
import { AppErrorHandler } from './common/app-error-hander';
import { PostService } from '../services/post.service';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';

import { AuthorsService } from './authors/authors.service';
import { CoursesService } from './courses/courses.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { DirectiveComponent } from './directive/directive.component';
import { InputFormatDirective } from './input-format.directive';
import { ExpressionDirective } from './expression.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupReactiveComponent } from './signup-reactive/signup-reactive.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NestedgroupReactiveComponent } from './nestedgroup-reactive/nestedgroup-reactive.component';
import { FormarrayReactiveComponent } from './formarray-reactive/formarray-reactive.component';
import { ChangePasswordReactiveComponent } from './change-password-reactive/change-password-reactive.component';
import { PostsHttppComponent } from './posts-httpp/posts-httpp.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    AuthorsComponent,
    SummaryPipe,
    TitlecasePipe,
    FavouriteComponent,
    PanelComponent,
    LikeComponent,
    DirectiveComponent,
    InputFormatDirective,
    ExpressionDirective,
    ZippyComponent,
    TemplateFormsComponent,
    CourseFormComponent,
    SignupReactiveComponent,
    NestedgroupReactiveComponent,
    FormarrayReactiveComponent,
    ChangePasswordReactiveComponent,
    PostsHttppComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  //Angular create a single instance 
  //and shares it across multiple 
  //components (Singleton)
  providers: [
    CoursesService,
    AuthorsService,
    PostService,
    GithubFollowersService,
    {
      //Tell angular where it is used ErrorHander use
      //apperrorhandler
      provide: ErrorHandler,
      useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
