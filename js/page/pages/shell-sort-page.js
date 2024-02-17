import { AlgorithmPage } from "../page.js";
import { PageContent } from "../../content/parser/page-content.js";

import { ShellSort } from "../../algorithm/shell-sort.js";
import json from "../../content/json/shell-sort.json" assert { type: "json" };

const pageContent = new PageContent(json);
const shellSortPage = new AlgorithmPage(ShellSort, pageContent);
