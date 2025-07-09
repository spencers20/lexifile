module.exports = {

"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/formidable [external] (formidable, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("formidable");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/mammoth [external] (mammoth, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mammoth", () => require("mammoth"));

module.exports = mod;
}}),
"[externals]/pdf-parse [external] (pdf-parse, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("pdf-parse", () => require("pdf-parse"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/langchain/text_splitter [external] (langchain/text_splitter, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("langchain/text_splitter");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/langchain/document [external] (langchain/document, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("langchain/document");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/cohere-ai [external] (cohere-ai, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("cohere-ai", () => require("cohere-ai"));

module.exports = mod;
}}),
"[externals]/dotenv/config [external] (dotenv/config, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("dotenv/config", () => require("dotenv/config"));

module.exports = mod;
}}),
"[externals]/@pinecone-database/pinecone [external] (@pinecone-database/pinecone, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@pinecone-database/pinecone", () => require("@pinecone-database/pinecone"));

module.exports = mod;
}}),
"[externals]/cookie [external] (cookie, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("cookie", () => require("cookie"));

module.exports = mod;
}}),
"[project]/pages/api/upserting.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$formidable__$5b$external$5d$__$28$formidable$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/formidable [external] (formidable, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mammoth__$5b$external$5d$__$28$mammoth$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mammoth [external] (mammoth, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pdf$2d$parse__$5b$external$5d$__$28$pdf$2d$parse$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/pdf-parse [external] (pdf-parse, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$text_splitter__$5b$external$5d$__$28$langchain$2f$text_splitter$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/langchain/text_splitter [external] (langchain/text_splitter, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$document__$5b$external$5d$__$28$langchain$2f$document$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/langchain/document [external] (langchain/document, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$cohere$2d$ai__$5b$external$5d$__$28$cohere$2d$ai$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/cohere-ai [external] (cohere-ai, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$dotenv$2f$config__$5b$external$5d$__$28$dotenv$2f$config$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/dotenv/config [external] (dotenv/config, cjs)");
// import { embedJobs } from "cohere-ai/api";
var __TURBOPACK__imported__module__$5b$externals$5d2f40$pinecone$2d$database$2f$pinecone__$5b$external$5d$__$2840$pinecone$2d$database$2f$pinecone$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@pinecone-database/pinecone [external] (@pinecone-database/pinecone, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$cookie__$5b$external$5d$__$28$cookie$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/cookie [external] (cookie, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$formidable__$5b$external$5d$__$28$formidable$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$text_splitter__$5b$external$5d$__$28$langchain$2f$text_splitter$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$document__$5b$external$5d$__$28$langchain$2f$document$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$formidable__$5b$external$5d$__$28$formidable$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$text_splitter__$5b$external$5d$__$28$langchain$2f$text_splitter$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$document__$5b$external$5d$__$28$langchain$2f$document$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
;
;
const pc = new __TURBOPACK__imported__module__$5b$externals$5d2f40$pinecone$2d$database$2f$pinecone__$5b$external$5d$__$2840$pinecone$2d$database$2f$pinecone$2c$__cjs$29$__["Pinecone"]({
    apiKey: process.env.PINECONE_API
});
const index = pc.index(process.env.INDEX_NAME, process.env.INDEX_HOST);
// const cohere = new CohereClient({});
const co = new __TURBOPACK__imported__module__$5b$externals$5d2f$cohere$2d$ai__$5b$external$5d$__$28$cohere$2d$ai$2c$__cjs$29$__["CohereClient"]({
    token: process.env.COHERE_API
});
const config = {
    api: {
        bodyParser: false
    }
};
// function to get the data 
async function getdata(file, ext) {
    const filepath = file.filepath;
    let text = '';
    let filetype = '';
    if (ext === 'pdf') {
        const dataBuffer = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filepath);
        const data = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$pdf$2d$parse__$5b$external$5d$__$28$pdf$2d$parse$2c$__cjs$29$__["default"])(dataBuffer);
        text = data.text;
        filetype = 'pdf';
    } else if (ext === 'txt') {
        text = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filepath, 'utf-8');
        filetype = 'txt';
    // }else if(ext==='csv'){
    //     const csvData = fs.readFileSync(filepath, 'utf-8');
    //       parse(csvData, { columns: true }, (err, output) => {
    //         if (err) return reject('CSV parsing error');
    //         text = JSON.stringify(output, null, 2);
    //         filetype = 'csv';
    //         resolve({ text, filetype });
    //       });
    //       return;
    } else if (ext === 'docx') {
        const buffer = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filepath);
        const result = await __TURBOPACK__imported__module__$5b$externals$5d2f$mammoth__$5b$external$5d$__$28$mammoth$2c$__cjs$29$__["default"].extractRawText({
            buffer
        });
        text = result.value;
        filetype = 'docx';
    } else {
        throw new Error('unsupported file ');
    }
    return {
        text
    };
}
// function to  chunk the documents using recursive
async function chunkdocs(text, filename) {
    try {
        const textsplitter = new __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$text_splitter__$5b$external$5d$__$28$langchain$2f$text_splitter$2c$__esm_import$29$__["RecursiveCharacterTextSplitter"]({
            chunkSize: 1800,
            chunkOverlap: 200,
            lengthFunction: (text)=>text.split(/\s+/).length
        });
        const doc = [
            new __TURBOPACK__imported__module__$5b$externals$5d2f$langchain$2f$document__$5b$external$5d$__$28$langchain$2f$document$2c$__esm_import$29$__["Document"]({
                pageContent: text,
                metadata: {
                    source: filename
                }
            })
        ];
        const allchunks = await textsplitter.splitDocuments(doc);
        return {
            allchunks
        };
    } catch (e) {
        console.log('error in chunking the documents');
        return {
            allchunks: []
        };
    }
}
async function generateembeddings(chunkeddata) {
    try {
        const text = chunkeddata.map((doc)=>doc.pageContent);
        const embed = await co.v2.embed({
            texts: text,
            model: "embed-english-v3.0",
            inputType: "search_document",
            embeddingTypes: [
                "float"
            ]
        });
        const embeddings = embed.embeddings?.float ?? [];
        return {
            embeddings
        };
    } catch (e) {
        console.log('errror in chunking the data', e);
        return {
            embeddings: []
        };
    }
}
function upsertingdoc(embeddings, chunkeddata) {
    try {
        const finaldoc = [];
        const texts = chunkeddata.map((doc)=>doc.pageContent);
        embeddings.forEach((embedding, i)=>{
            const text = texts[i];
            const doc = {
                id: String(i),
                values: embedding,
                metadata: {
                    text: text,
                    chunk_index: i
                }
            };
            finaldoc.push(doc);
        });
        return finaldoc;
    } catch (e) {
        console.log('error in preparing the upserting document');
        return [];
    }
}
function generateNamespace() {
    const prefix = 'lexi';
    const uuid = crypto.randomUUID().replace(/-/g, '').slice(0, 8);
    return `${prefix}-${uuid}`;
}
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(400).json({
            error: "wrong  request made"
        });
    }
    const form = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$formidable__$5b$external$5d$__$28$formidable$2c$__esm_import$29$__["default"])({
        keepExtensions: true
    });
    form.parse(req, async (err, fields, files)=>{
        try {
            if (err) {
                return res.status(500).json({
                    error: "an error occured in parsing the files"
                });
            }
            const actualfile = files.Document || undefined;
            const file = Array.isArray(actualfile) ? actualfile[0] : actualfile;
            if (!file) {
                console.log('no file detected');
                return res.status(400).json({
                    error: "no file detected please upload"
                });
            }
            const filename = file.originalFilename ?? "";
            const ext = filename.split('.').pop()?.toLowerCase();
            if (!ext) {
                throw new Error("File extension is missing or invalid.");
            }
            const { text } = await getdata(file, ext);
            const { allchunks } = await chunkdocs(text, filename);
            const { embeddings } = await generateembeddings(allchunks);
            const upsertdoc = upsertingdoc(embeddings, allchunks);
            const namespace = generateNamespace();
            // if (!namespace){
            // }
            // console.log()
            // console.log("upsertdoc reuslts",upsertdoc)
            console.log('namespace', namespace);
            const upserteddocs = await index.namespace(namespace).upsert(upsertdoc);
            // const host = req.headers.host; // example: localhost:3000 or yourdomain.com
            // const protocol = process.env.NODE_ENV === "development" ? "http" : "https";
            // const queryUrl = `${protocol}://${host}/api/namespace`;
            res.setHeader('Set-Cookie', (0, __TURBOPACK__imported__module__$5b$externals$5d2f$cookie__$5b$external$5d$__$28$cookie$2c$__cjs$29$__["serialize"])("namespace", namespace, {
                path: '/',
                httpOnly: true,
                sameSite: 'lax',
                maxAge: 60 * 5
            }));
            res.status(200).json({
                success: `success in upserting doc ${upserteddocs}`
            });
        } catch (e) {
            console.log("error in parsing / upserting data", e);
        }
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time truthy", 1) {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    } else {
        "TURBOPACK unreachable";
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouteKind": (()=>RouteKind)
});
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ __turbopack_context__.s({
    "hoist": (()=>hoist)
});
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ('then' in module && typeof module.then === 'function') {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === 'function' && name === 'default') {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
} //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/pages-api.js { INNER_PAGE => \"[project]/pages/api/upserting.ts [api] (ecmascript)\" } [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__),
    "routeModule": (()=>routeModule)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)");
// Import the userland code.
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$upserting$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/api/upserting.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$upserting$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$upserting$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$upserting$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'default');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$upserting$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'config');
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PagesAPIRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API,
        page: "/api/upserting",
        pathname: "/api/upserting",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$upserting$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
}); //# sourceMappingURL=pages-api.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__36e5308f._.js.map