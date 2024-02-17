import { AlgorithmPage } from "../page.js";
import { PageContent } from "../../content/parser/page-content.js";

import { HeapSort } from "../../algorithm/heap-sort.js";
import json from "../../content/json/heap-sort.json" assert { type: "json" };

const pageContent = new PageContent(json);
const heapSortPage = new AlgorithmPage(HeapSort, pageContent);
