import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NotesRoutingModule } from "./notes-routing.module";
import { NoteListComponent } from "./note-list/note-list.component";
import { NoteDetailComponent } from "./note-detail/note-detail.component";
import { NgxEditorModule } from "ngx-editor";
import { FormsModule } from "@angular/forms";
import { CoreModule } from "@app/core/core.module";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    NotesRoutingModule,
    FormsModule,
    NgxEditorModule
  ],
  declarations: [NoteListComponent, NoteDetailComponent]
})
export class NotesModule { }
