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
    "height": "auto",
    "minHeight": "625px",
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

  public toolbarOptions = [
    ["bold", "italic", "underline", "strike"],        // toggled buttons
    ["blockquote", "code-block"],

    [{ "header": 1 }, { "header": 2 }],               // custom button values
    [{ "list": "ordered"}, { "list": "bullet" }],
    [{ "script": "sub"}, { "script": "super" }],      // superscript/subscript
    [{ "indent": "-1"}, { "indent": "+1" }],          // outdent/indent
    [{ "direction": "rtl" }],                         // text direction

    [{ "size": ["small", false, "large", "huge"] }],  // custom dropdown
    [{ "header": [1, 2, 3, 4, 5, 6, false] }],

    [{ "color": [] }, { "background": [] }],          // dropdown with defaults from theme
    [{ "font": [] }],
    [{ "align": [] }],

    ["clean"]                                         // remove formatting button
  ];

  private noteId: number;

  constructor(private route: ActivatedRoute, private param: PathParamService) {
    this.param.set(route);
  }

  ngOnInit() {
    this.noteId = Number(this.param.get("id"));


    this.editorContent += `${this.noteId }`;
  }
}
