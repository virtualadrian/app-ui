import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NoteListComponent } from "./note-list/note-list.component";
import { NoteDetailComponent } from "./note-detail/note-detail.component";
import { AuthGuardService } from "@app/auth/core/auth-guard.service";

const routes: Routes = [
  { path: "account/notes/all", component: NoteListComponent, canActivate: [AuthGuardService] },
  { path: "account/notes/:id", component: NoteDetailComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
