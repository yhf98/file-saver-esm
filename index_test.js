import { saveAs } from ".";

saveAs(new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"}), "test.txt")