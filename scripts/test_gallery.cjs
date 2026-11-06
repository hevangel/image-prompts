const fs = require("node:fs"), vm = require("node:vm"), path = require("node:path");
function node(){return {value:"",hidden:false,style:{},children:[],classList:{add(){},remove(){},toggle(){}},addEventListener(){},setAttribute(){},appendChild(x){this.children.push(x)},querySelector(){return node()},set innerHTML(x){this.markup=x;this.children=[]},get innerHTML(){return this.markup||""}};}
const nodes={},document={getElementById(id){return nodes[id] ||= node()},createElement:node};
const manifest=JSON.parse(fs.readFileSync("index.json","utf8"));
const ctx=vm.createContext({document,console,manifest,fetch:async file=>({json:async()=>JSON.parse(fs.readFileSync(file,"utf8"))})});
const html=fs.readFileSync("index.html","utf8");
vm.runInContext(html.match(/<script>([\s\S]*?)<\/script>/)[1].split('fetch("index.json")')[0],ctx);
vm.runInContext("MANIFEST = manifest",ctx);
(async()=>{
 await vm.runInContext("loadGenerations()",ctx);
 const rows=vm.runInContext("allGenerations()",ctx);
 const expected=manifest.samples.reduce((n,s)=>n+Object.keys(s.outputs).length+JSON.parse(fs.readFileSync(s.generations_file)).generations.filter(g=>g.comparison&&g.output&&!Object.values(s.outputs).includes(path.posix.join(path.posix.dirname(s.input),g.output))).length,0);
 if(rows.length!==expected)throw Error("Gallery count mismatch");
 vm.runInContext("renderInputList(); renderGenGrid();",ctx);
 if(nodes["gen-grid"].children.length!==expected+manifest.samples.length)throw Error("Original cards missing");
 for(const model of new Set(rows.map(r=>r.gen?.model).filter(Boolean))){
  nodes["sample-model"].value=model;vm.runInContext("renderGenGrid()",ctx);
  const selected=rows.filter(r=>r.gen?.model===model);
  if(nodes["gen-grid"].children.length!==selected.length+new Set(selected.map(r=>r.sample.slug)).size)throw Error("Model filter mismatch: "+model);
 }
 console.log(JSON.stringify({galleryRows:rows.length,models:[...new Set(rows.map(r=>r.gen?.model).filter(Boolean))],checks:"gallery count, original cards and provider filters passed"}));
})().catch(e=>{console.error(e);process.exitCode=1});
