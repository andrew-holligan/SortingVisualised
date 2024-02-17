import { AlgorithmPage } from "../page.js";
import { PageContent } from "../../content/parser/page-content.js";

import { QuickSort } from "../../algorithm/quick-sort.js";
import json from "../../content/json/quick-sort.json" assert { type: "json" };

const pageContent = new PageContent(json);
const quickSortPage = new AlgorithmPage(QuickSort, pageContent);
