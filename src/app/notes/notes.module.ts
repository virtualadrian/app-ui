import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NotesRoutingModule } from "./notes-routing.module";
import { NoteListComponent } from "./note-list/note-list.component";
import { NoteDetailComponent } from "./note-detail/note-detail.component";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "@app/core/core.module";
import { QuillModule } from "ngx-quill";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    QuillModule,
    NotesRoutingModule,
    FormsModule
  ],
  declarations: [NoteListComponent, NoteDetailComponent]
})
export class NotesModule { }
