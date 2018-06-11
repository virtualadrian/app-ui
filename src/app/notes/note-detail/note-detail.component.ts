import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PathParamService } from "@app/core/path-param.service";

@Component({
  selector: "app-note-detail",
  templateUrl: "./note-detail.component.html",
  styleUrls: ["./note-detail.component.css"]
})
export class NoteDetailComponent implements OnInit {

  public editor;
  public editorContent = `This is your sample content. <strong>Note Id is</strong>: `;
  public editorConfig = {
    "editable": true,
    "spellcheck": true,
    "height": "425px",
    "minHeight": "425px",
    "width": "auto",
    "minWidth": "450px",
    "translate": "yes",
    "enableToolbar": true,
    "showToolbar": true,
    "placeholder": "Start entering your notes ...",
    "imageEndPoint": "",
    "toolbar": [
      ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
      ["fontName", "fontSize", "color"],
      ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
      ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
      ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
      ["link", "unlink", "image", "video"]
    ]
  };

  private noteId: number;

  constructor(private route: ActivatedRoute, private param: PathParamService) {
    this.param.set(route);
  }

  ngOnInit() {
    this.noteId = Number(this.param.get("id"));


    this.editorContent += `${this.noteId }`;
  }
}
