'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0083c7eded495143cf822aebcff7097c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0d3fa80b51b111294780b16cb6c61e97",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_tex/js/flutter_tex.css": "062a3279da48d0913eeeeb0d2266e26f",
"assets/packages/flutter_tex/js/flutter_tex.js": "9402d83f805bfc891b50ffd62c918def",
"assets/packages/flutter_tex/js/katex/contrib/auto-render.js": "29b8804eed01840ffe0a8c8c395d1c67",
"assets/packages/flutter_tex/js/katex/contrib/auto-render.min.js": "28cd0b98cd3f4fa37d52f3ffe47ad9d4",
"assets/packages/flutter_tex/js/katex/contrib/auto-render.mjs": "94844c9ea38fea25908495b2f04d3451",
"assets/packages/flutter_tex/js/katex/contrib/copy-tex.css": "47d07259053164e2d1f80d07b8bf9fe4",
"assets/packages/flutter_tex/js/katex/contrib/copy-tex.js": "2a3166026a55ea5fe6735f0a310db749",
"assets/packages/flutter_tex/js/katex/contrib/copy-tex.min.css": "b1994d1b9785dd8801dbf655df7bf6d9",
"assets/packages/flutter_tex/js/katex/contrib/copy-tex.min.js": "bfaec7d1dea915d74a7a6d833f0ff62e",
"assets/packages/flutter_tex/js/katex/contrib/copy-tex.mjs": "517452ef2f72e59ee8947928a9c70747",
"assets/packages/flutter_tex/js/katex/contrib/mathtex-script-type.js": "abfc675dca0cb68e67fc3f795ca0a8b9",
"assets/packages/flutter_tex/js/katex/contrib/mathtex-script-type.min.js": "90790e1c9e92db3e2610cd0a4245d613",
"assets/packages/flutter_tex/js/katex/contrib/mathtex-script-type.mjs": "6843d4f2ad66c9420f99f17b2f133eae",
"assets/packages/flutter_tex/js/katex/contrib/mhchem.js": "186035127486ed5fd09ddfc0ae771cb4",
"assets/packages/flutter_tex/js/katex/contrib/mhchem.min.js": "1bbb252363e83547d4b2186a41eaca28",
"assets/packages/flutter_tex/js/katex/contrib/mhchem.mjs": "d26d7577a2a5ef0418e03de56de5af3d",
"assets/packages/flutter_tex/js/katex/contrib/render-a11y-string.js": "467f5417cd919ea8965d8a8b3059867a",
"assets/packages/flutter_tex/js/katex/contrib/render-a11y-string.min.js": "17ccbcf80a3140314060fd3bc579518b",
"assets/packages/flutter_tex/js/katex/contrib/render-a11y-string.mjs": "c46628600950c9f19690f6bae4c87ea8",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_AMS-Regular.ttf": "aaf4eee9fba9907d61c3935e0b6a54ae",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_AMS-Regular.woff": "7f06b4e30317f784d61d26686aed0ab2",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_AMS-Regular.woff2": "e78e28b4834954df047e4925e9dbf354",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Bold.ttf": "021dd4dc61ee5f5cdf315f43b48c094b",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Bold.woff": "1e802ca9dedc4ed4e3c6f645e4316128",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Bold.woff2": "4ec58befa687e9752c3c91cd9bcf1bcb",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Regular.ttf": "d49f2d55ce4f40f982d8ba63d746fbf9",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Regular.woff": "d3b46c3a530116933081d9d74e3e9fe8",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Caligraphic-Regular.woff2": "7edb53b6693d75b8a2232481eea1a52c",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Bold.ttf": "a31e7cba7b7221ebf1a2ae545fb306b2",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Bold.woff": "c4c8cab7d5be97b2bb283e531c077355",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Bold.woff2": "d5b59ec9764e10f4a82369ae29f3ac58",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Regular.ttf": "a48dad4f58c82e38a10da0ceebb86370",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Regular.woff": "b7d9c46bff5d51da6209e355cc4a235d",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Fraktur-Regular.woff2": "32a5339eb809f381a7357ba56f82aab3",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Bold.ttf": "9ceff51b3cb7ce6eb4e8efa8163a1472",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Bold.woff": "22086eb5d97009c3e99bcc1d16ce6865",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Bold.woff2": "8e1e01c4b1207c0a383d9a2b4f86e637",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-BoldItalic.ttf": "e8b44b990516dab7937bf240fde8b46a",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-BoldItalic.woff": "4c57dbc44bfff1fdf08a59cf556fdab3",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-BoldItalic.woff2": "284a17fe5baf72ff8217d4c7e70c0f82",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Italic.ttf": "29c86397e75cdcb3135af8295f1c2e28",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Italic.woff": "99be0e10c38cd42466e6fe1665ef9536",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Italic.woff2": "e533d5a2506cf053cd671b335ec04dde",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Regular.ttf": "5c94aef490324b0925dbe5f643e8fd04",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Regular.woff": "b741441f6d71014d0453ca3ebc884dd4",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Main-Regular.woff2": "5c734d78610fa35282f3379f866707f2",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-BoldItalic.ttf": "9a2834a9ff8ab411153571e0e55ac693",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-BoldItalic.woff": "b13731ef4e2bfc3d8d859271e39550fc",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-BoldItalic.woff2": "d747bd1e7a6a43864285edd73dcde253",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-Italic.ttf": "291e76b8871b84560701bd29f9d1dcc7",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-Italic.woff": "f0303906c2a67ac63bf1e8ccd638a89e",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Math-Italic.woff2": "4ad08b826b8065e1eab85324d726538c",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Bold.ttf": "7dc027cba9f7b11ec92af4a311372a85",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Bold.woff": "3fb419559955e3ce75619f1a5e8c6c84",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Bold.woff2": "6e0830bee40435e72165345e0682fbfc",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Italic.ttf": "4059868e460d2d2e6be18e180d20c43d",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Italic.woff": "727a9b0d97d72d2fc0228fe4e07fb4d8",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Italic.woff2": "fba01c9c6fb2866a0f95bcacb2c187a5",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Regular.ttf": "5c58d168c0b66d2c32234a6718e74dfb",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Regular.woff": "2555754a67062cac3a0913b715ab982f",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_SansSerif-Regular.woff2": "d929cd671b19f0cfea55b6200fb47461",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Script-Regular.ttf": "d12ea9efb375f9dc331f562e69892638",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Script-Regular.woff": "d524c9a5b62a17f98f4a97af37fea735",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Script-Regular.woff2": "755e2491f13b5269f0afd5a56f7aa692",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size1-Regular.ttf": "7342d45b052c3a2abc21049959fbab7f",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size1-Regular.woff": "08b5f00e7140f7a10e62c8e2484dfa5a",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size1-Regular.woff2": "048c39cba4dfb0460682a45e84548e4b",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size2-Regular.ttf": "eb130dcc661de766c999c60ba1525a88",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size2-Regular.woff": "af24b0e4b7e52656ca77914695c99930",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size2-Regular.woff2": "81d6b8d5ca77d63d5033d6991549a659",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size3-Regular.ttf": "7e02a40c41e52dc3b2b6b197bbdf05ea",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size3-Regular.woff": "0d8926405d832a4b065e516bd385d812",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size3-Regular.woff2": "b311ca09df2c89a10fbb914b5a053805",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size4-Regular.ttf": "ad7672524b64b730dfd176140a8945cb",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size4-Regular.woff": "68895bb880a61a7fc019dbfaa5121bb4",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Size4-Regular.woff2": "6a3255dfc1ba41c46e7e807f8ab16c49",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Typewriter-Regular.ttf": "257023560753aeb0b89b7e434d3da17f",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Typewriter-Regular.woff": "3fe216d2a5f736c560cde71984554b64",
"assets/packages/flutter_tex/js/katex/fonts/KaTeX_Typewriter-Regular.woff2": "6cc31ea5c223c88705a13727a71417fa",
"assets/packages/flutter_tex/js/katex/index.html": "3108eb0b2bf33f4e7a4e17fd6556e1ae",
"/": "d79875570284bb6091e9999fa3ddff70",
"assets/packages/flutter_tex/js/katex/katex.css": "622d22c4fe6d2bbcfd101183c49b4c9e",
"assets/packages/flutter_tex/js/katex/katex.js": "a893c9f2f4ac31bb3fa0397a0f63d0d3",
"assets/packages/flutter_tex/js/katex/katex.min.css": "27f0bd8419d8acb9009ed4d9c35be068",
"assets/packages/flutter_tex/js/katex/katex.min.js": "c158c9e823b681cf535f46596b5e4eac",
"assets/packages/flutter_tex/js/katex/katex.mjs": "4861b9ef0d8efa0b4a80877a24b134d7",
"assets/packages/flutter_tex/js/katex/README.md": "69042be8e9d0012bd6eb0295f3c5f393",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/accessibility-menu.js": "f88e05137b1384ba5aaebc50511d93c8",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/auto-collapse.js": "3966e3df9cc34d4a6e4d42c656ac597e",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/collapsible.js": "366101a50fa7af04905cf0e27e1b1ecb",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/explorer.js": "80692e447d355af77dffd3ef11a141a0",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/invalid_keypress.mp3": "43fd1ef4d03771f3adf2348371b9fbab",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/invalid_keypress.ogg": "32a420467788f3f7a4bb277cc3404f1a",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathjax-sre.js": "6e418579cf7aeadb30b9d693a5dfa550",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/functions/algebra.js": "766a8f780ae2140c47bd4a9376182f29",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/functions/elementary.js": "7073b77ff34f3c78492402d281b18ecf",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/functions/hyperbolic.js": "419c1f17cd460747b685b1366f61dc2d",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/functions/trigonometry.js": "ed1667c646e2a3983f7aef3bfd95a910",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/greek-capital.js": "786dbd22246a02d310fb09140779692b",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/greek-mathfonts-bold.js": "47258eda78b896d54a579edbeb58f647",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/greek-mathfonts-italic.js": "88051ebcc4647691f1000fe48ecde14a",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/greek-mathfonts-sans-serif-bold.js": "4ed29c044109c8603bc008b1ae23de44",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/greek-scripts.js": "16922c3674f9163ba8a539b473aa4793",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/greek-small.js": "d46bc70b7885c80c9e27096d21f52429",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/greek-symbols.js": "7bcd563b29cda132be2b273576deade7",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/hebrew_letters.js": "b263e9625b811b4e446b6cc86a7ccec5",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-lower-double-accent.js": "5c03513255289772b39d698c2396722b",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-lower-normal.js": "fffac7a7a8f4c686ee45f4f7fa60a9e0",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-lower-phonetic.js": "353110b7642b517470784cd9c12428c8",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-lower-single-accent.js": "2fe149cdafc8b3559cb11aac887d9cc6",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-mathfonts-bold-fraktur.js": "dc0b6606c3b73593ab3e49707433cfe4",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-mathfonts-bold-script.js": "7733edf23ad08333eba0eb006064b758",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-mathfonts-bold.js": "397c621590357c92c490e1543c207c55",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-mathfonts-double-struck.js": "67fadfe49629e05038a2c4ac550b14fd",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-mathfonts-fraktur.js": "c7895d1c459367a8661d33b43908a5fa",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-mathfonts-italic.js": "0375494f6c9a9414fa8897bf9019f3bc",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-mathfonts-monospace.js": "e21f62918fb862ea5e561d9a9f0055e0",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-mathfonts-sans-serif-bold.js": "f7e175862be032567365ea091e74d6f7",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-mathfonts-sans-serif-italic.js": "07a8e996556c8cba300dc5020af71032",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-mathfonts-sans-serif.js": "6f6ab28ad7364f69176bedde0083d5d2",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-mathfonts-script.js": "602cc1f3f5ccf2b1fc18ffb86647c861",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-rest.js": "3f842c76e3f16f21df72e7f3776fc8ba",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-upper-double-accent.js": "5d9b3886b1451a60fdef7f96324d7ace",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-upper-normal.js": "2d7ed5998f8d280ddac8b696d816e3ba",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/latin-upper-single-accent.js": "ba530a4a6446551615cb519628bba895",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/math_angles.js": "4105da7dca05714178422d1b8b16dde1",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/math_arrows.js": "a8d962a12cce04225dc91fb9d152bba3",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/math_characters.js": "bff5af0f56216ff8c47c291d404e1688",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/math_delimiters.js": "7e3b3a8f5385eb14931371cb2a1aa70a",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/math_digits.js": "37a3baa793e1605a7d76466137641b37",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/math_geometry.js": "830fb613b1d69d16654d58ee6d11431a",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/math_harpoons.js": "f7de9c6b13a62ebd00d105b517fbc747",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/math_non_characters.js": "d77f08189c99cdb03507fe50a47d0e2a",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/math_symbols.js": "54df1076a42b592e60322d208ae4121b",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/math_whitespace.js": "62a41c243ccf875f4d981647f7fbb33d",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/symbols/other_stars.js": "ce58a406fb24b692997d749f2953f98e",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/units/energy.js": "bccffaa04064e1ce1a7a7542188d5ef1",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/units/length.js": "ee03e90db1b19d3c49a983be5a45c799",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/units/memory.js": "ecd39e1c7950443a25cc3a808315332e",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/units/other.js": "fa237d8065dcde783e36ac2d3f9d053d",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/units/speed.js": "d68a4871f78ad1812582420ffa116bd3",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/units/temperature.js": "32a96be875ff5dbaed759e2e8fb705e5",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/units/time.js": "3635115a6b5879c2a540ea15d0898d9f",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/units/volume.js": "fd9f90773cde8160fdda63a5f2438e07",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/en/units/weight.js": "2dbdded7f730b4ee9a3204ed2263c9a8",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/functions/algebra.js": "1009eda6c8cb7d06ead6e49c2b7d6dbf",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/functions/elementary.js": "9c92d412602a23deb0e3dc2a67a32084",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/functions/hyperbolic.js": "47075541264b8778935342201b1a4e69",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/functions/trigonometry.js": "0a76c9b0788e0f19aad2c86c670ada2d",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/greek-capital.js": "ed3ee6897d9408fa14dee1a4b03cd895",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/greek-mathfonts-bold.js": "8e7e599ed2a930890f74195a469da974",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/greek-mathfonts-italic.js": "1b0fc9f8da5b4d54347fc8bf7428643c",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/greek-mathfonts-sans-serif-bold.js": "c1a5eec72269c8ff687a5d889b2d9933",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/greek-scripts.js": "cc04531ecb0530f06a916eadcfbff0e9",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/greek-small.js": "e2aed3fb34e02e18e5633f06b56bd631",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/greek-symbols.js": "f2bd8a2c711f290526ea5dfae77ede1b",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/hebrew_letters.js": "0af672d13176fe4c481f5cf8474a4a20",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-lower-double-accent.js": "08a82402d1c98b084226708c18cbc9ae",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-lower-normal.js": "5625a00246f470f7299d11ac1215be94",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-lower-phonetic.js": "e789eb6bdfc8c88481ecd1994cf0d2a9",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-lower-single-accent.js": "8a5179117dceca39995642572cd066a4",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-mathfonts-bold-fraktur.js": "227ed9ef31524ab76e1aab4cfe46dc4b",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-mathfonts-bold-script.js": "74665e77c1a8bf39fc60c3264447bbb7",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-mathfonts-bold.js": "01f3e1d40077cde096aff748eeb36e26",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-mathfonts-double-struck.js": "7ed56f6b8f768189b0cf78c059d4fd56",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-mathfonts-fraktur.js": "26b5a75789670d8a9c333268ddf71f3f",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-mathfonts-italic.js": "e54a2c9e5bd3d21ea322438958ae8797",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-mathfonts-monospace.js": "6090756d68894e341d17c9fa2dd53e48",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-mathfonts-sans-serif-bold.js": "312b62b5655f3b518eecd69f2123faf0",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-mathfonts-sans-serif-italic.js": "5515be292cb69cae080097f5c6b9be7a",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-mathfonts-sans-serif.js": "824f5d492e66c5696cd77705c62121d0",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-mathfonts-script.js": "f017af971c98f4a9ec7032300ab34bf8",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-rest.js": "25336778c71a07abf09b5f592c83a514",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-upper-double-accent.js": "d5d312487cf67b1926bfa87697d64c4d",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-upper-normal.js": "9707e61e31fe5e968d473551003713ed",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/latin-upper-single-accent.js": "216aa36a797dd991b838106e623e812d",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/math_angles.js": "1af1b2f631e842ed84b94826483f9068",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/math_arrows.js": "745d4b80c6de15de4bfe1b69fe6ad080",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/math_characters.js": "8083d5e02280e027f7a9ef553034fffd",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/math_delimiters.js": "0a1408c3276171229b8b21a41a813591",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/math_digits.js": "415fadc547c27758ee54914ee789b291",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/math_geometry.js": "b2b8786ab5f2de548041907996877a63",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/math_harpoons.js": "d9519a938f3a689ae9f4dc043f9feb73",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/math_non_characters.js": "3eef6bf48252648bdad08d366d73b5ad",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/math_symbols.js": "10420c1edc70fbfef1b331b08088a0ed",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/math_whitespace.js": "827dacf4c69a15d0f4ff239255866299",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/symbols/other_stars.js": "dd56e28e3b8a4a0aeb925efb38596675",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/units/energy.js": "40f2630ea1303cc4e79424992cecb166",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/units/length.js": "7576aa261a8926c574003e8307397ec7",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/units/memory.js": "aa584f3cfa04e760f7d6958f31294471",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/units/other.js": "1125c561315cbef85a525adea3e635aa",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/units/speed.js": "c61eef0f7eef27e756c6afdb13510ccd",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/units/temperature.js": "468a77a8b17be24f2819a33f221dc6ba",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/units/time.js": "7df4ebe771c68d51ad4a05974cd8b59b",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/units/volume.js": "4d39c86458af5b940d0413bc5705db7e",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/es/units/weight.js": "7a7a7880cbd0b862b94c8098eb422213",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/functions/algebra.js": "bca457f90e792e5ed8c6459b66cdfac3",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/functions/elementary.js": "a75281a473cd7931e875ed17f34c80e8",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/functions/functions_spanish.js": "c1338f01cee0aa42c951bd1586244e13",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/functions/hyperbolic.js": "58cc3af8ea28d16879dfac6a43df5a8e",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/functions/trigonometry.js": "33b245bc72664acdd637dd3d66f7dedc",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/mathmaps_ie.js": "b4c76df649e26544dfcba7ae6615298c",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/greek-capital.js": "3036a747a80bed90a4f1bb2a995196da",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/greek-mathfonts.js": "a9d8e256b52ce7b6636b914ff81d6cf9",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/greek-scripts.js": "a7c3abe4d591ae97dbc2597c77cbe685",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/greek-small.js": "5ea5be24065d7eb606c5eebf6561747e",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/greek-symbols.js": "4ecb811fef6dfbd2572d262437291f99",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/hebrew_letters.js": "f56afdc7bb1b52e7bcfa614c590a31d9",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/latin-lower-double-accent.js": "523812cd1c2191b89510c02a770571ef",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/latin-lower-normal.js": "8caeb774b4f8378c685bddb774035d7f",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/latin-lower-phonetic.js": "e8d3e69c8dae67b2713f91adfabdcdb8",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/latin-lower-single-accent.js": "8414add644a10ccf8efeb8e7904c3ea9",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/latin-mathfonts.js": "19fa2e549776266f3a6eb44e34ab0688",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/latin-rest.js": "40516959d49e3b6112c770d024603906",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/latin-upper-double-accent.js": "8a3489d279cbe63f4c0b3d778c43b8de",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/latin-upper-normal.js": "27c42bc1c21cb7f2c57ca1532b9de820",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/latin-upper-single-accent.js": "48baadbe14e9c1ea9ae6181ea99d6fa2",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/math_angles.js": "340bf3b5d03a2a59342e0c49426036cf",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/math_arrows.js": "ff53f8dd550412d24098e17980b8794f",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/math_characters.js": "7e5632fe52c4bb7541e070e390931c32",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/math_delimiters.js": "c519cedec91902ff4ebb19cd95cc1a95",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/math_digits.js": "5f5faafa97d5bd71fe180b7d9d7cb7af",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/math_geometry.js": "a58a202d5dda3a68a3ca16e2b2866fad",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/math_harpoons.js": "e33e2168b3465b40ebc146c838be39cf",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/math_non_characters.js": "758f938fa2a7966d013b01923552cd3c",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/math_symbols.js": "14bf4a1bf7e1d42c1ee863a658baeb6e",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/math_whitespace.js": "78d6831a6417d0ee4c63d8c31c9ab939",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/other_stars.js": "fe1b89cf39b9bd71c313bfe10db4844a",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/spanish.js": "144c9e4d52355446d5bfbc4791655350",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/symbols/spanish_mathfonts.js": "bdca8e0a8a5e3b2abe506d8e95f8a0dd",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/units/energy.js": "080b024acbf451d1d73f696b4449e562",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/units/length.js": "2d09769b1e28a0bffc7814484f2b773e",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/units/memory.js": "29e7742add20f007caac9b64e37283a4",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/units/other.js": "d97ff82ea6d392f3f67f9ed4430a07e4",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/units/speed.js": "5fd30b1fe6bb4ddf112362f296ae18d3",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/units/temperature.js": "70f559071c60d0187553d64740894de9",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/units/time.js": "06ee8528f43e08ab28a3271724cd2b89",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/units/units_spanish.js": "689146156e9a2a5af526a9eb5b9c6d69",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/units/volume.js": "4a2bb7d656d92c5e5a7780e94a845c8e",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/mathmaps/units/weight.js": "cd2cbb99bed0544c03e4d487ce7c04af",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/semantic-enrich.js": "cf83c1daf82fbecaf14dc3ca43402ac4",
"assets/packages/flutter_tex/js/mathjax/extensions/a11y/wgxpath.install.js": "07834545d708a87c534b6be9b2c6c9a3",
"assets/packages/flutter_tex/js/mathjax/extensions/AssistiveMML.js": "4625f114d1f7d3d1acc1a68125e3fa6e",
"assets/packages/flutter_tex/js/mathjax/extensions/FontWarnings.js": "adc6165e6898be2efc4d7dcf85b90347",
"assets/packages/flutter_tex/js/mathjax/extensions/HelpDialog.js": "5ef57f1392f2bb482298d4684afddbd6",
"assets/packages/flutter_tex/js/mathjax/extensions/jsMath2jax.js": "f766682df9f73b2a159608e5d6189322",
"assets/packages/flutter_tex/js/mathjax/extensions/MatchWebFonts.js": "ebd68fc72899c6994285f719c06a6dd7",
"assets/packages/flutter_tex/js/mathjax/extensions/MathEvents.js": "e03ba06145e77649aacdcf9b681e2adb",
"assets/packages/flutter_tex/js/mathjax/extensions/MathMenu.js": "cc27c871f2741f18351d3ecbff5c4f5f",
"assets/packages/flutter_tex/js/mathjax/extensions/MathZoom.js": "84b8502057699d85c6aee0d3cbf79521",
"assets/packages/flutter_tex/js/mathjax/extensions/Safe.js": "ddd775299f3a57b3e2b4d4867a33ee75",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/action.js": "60564952d012e5cc3a89b85cfb65048c",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/AMScd.js": "6250639389472c946075abe3dc1cbd01",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/AMSmath.js": "663bc035bcaa9342f81c0cc21ab20117",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/AMSsymbols.js": "f9102aa2bd2eaf779fce96e3e88bd46b",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/autobold.js": "f590ba2b87ae78dfa5a3e83400ba0289",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/autoload-all.js": "65a618fc23658ba41978975c7eb0228c",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/bbox.js": "b88a965638207a5563f93cf532f9cfe1",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/begingroup.js": "ebe4a9f8a23216795075adaf1802fb28",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/boldsymbol.js": "62425f6f608c4fc8e9226de418502fec",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/cancel.js": "8d52817373d21d4a1e40b52fec4660cd",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/color.js": "e29c224a405047ecf52438a215479038",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/enclose.js": "c2f222c99812ae995bb770f63d2ef49e",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/extpfeil.js": "3f72db76f65b0f24846f5c26ef9194cb",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/HTML.js": "387df16bdf0e2dc9a4f875a0312c40d7",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mathchoice.js": "fe71020796c2e27ad648c9fcf64211c2",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mediawiki-texvc.js": "6f7d00df15df3b50e5b5049bf2141911",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mhchem.js": "e22f0e0fc302ae5feffa703da86f9785",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/mhchem3/mhchem.js": "18360c2e0b6523340c7830eb3ca991a5",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/newcommand.js": "9b3bc06528f8a1d05a2548d4c1f30f1a",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/noErrors.js": "2b30eaf05d87f8e0a86b8eaf0b96d09f",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/noUndefined.js": "61e7bc7722582beab1403cbb10d09d38",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/unicode.js": "a617fb1830a9befebe3d452269769d0a",
"assets/packages/flutter_tex/js/mathjax/extensions/TeX/verb.js": "b850d086581d79fdb7c141586dff4b4f",
"assets/packages/flutter_tex/js/mathjax/extensions/tex2jax.js": "71fac37379b79cf7b0d5aa55ec33ee93",
"assets/packages/flutter_tex/js/mathjax/extensions/toMathML.js": "200f0d41e8867bcdddf3fdd9bffa976d",
"assets/packages/flutter_tex/js/mathjax/index.html": "467ed6812abf7e87d3acbd3fc8a4ac72",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/jax.js": "218b71acd0ab41f0d77dca3b57f2f3e0",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/Arrows.js": "319245f61251e9936626d0d8c1bb25ae",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/BasicLatin.js": "3f551263e3d6c186e62b1a700074af35",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/CombDiacritMarks.js": "7fd1ff8d926a4d85913c5a597588e3e3",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/CombDiactForSymbols.js": "6bffd53abbbf8bdd374448c12a0eb9be",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/Dingbats.js": "00af7b1ae4f475664df6bf4b8f54aa79",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/GeneralPunctuation.js": "6621f30d18dff3ff72075c06383a55a3",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/GeometricShapes.js": "89fd1f260fa6dc3f43bf15b379800b96",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/GreekAndCoptic.js": "70595aee24f2e75ff9f3b1a71f2200fd",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/Latin1Supplement.js": "6e889080710df67687e10dafd3f7bac5",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/LetterlikeSymbols.js": "0d18d07393e82e2c4010761c8e34e121",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MathOperators.js": "cb8913a3bcce47a3a78022a207729976",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscMathSymbolsA.js": "beef28a57b3b7884923491d9c4fe84a7",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscMathSymbolsB.js": "6606a1e51b77057663e1700be9e7055f",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscSymbolsAndArrows.js": "71ee6d53b4049f16d88492f664c7633f",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/MiscTechnical.js": "bf2a7e9a522250e25a287ae615104671",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SpacingModLetters.js": "325a6dc392a1218f9a3cc7f54a984fe2",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SupplementalArrowsA.js": "c559b0c48fe7db3f0650a960a7de596c",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SupplementalArrowsB.js": "378d4025cb44ce5ac6ae2ce188336542",
"assets/packages/flutter_tex/js/mathjax/jax/element/mml/optable/SuppMathOperators.js": "67f697ae2c83ac768051ff99a4ea9c3c",
"assets/packages/flutter_tex/js/mathjax/jax/input/TeX/config.js": "9376262506bc5c4b1ec1731412620e76",
"assets/packages/flutter_tex/js/mathjax/jax/input/TeX/jax.js": "f888f799cfc6b146382ecf2b0799eca8",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/annotation-xml.js": "6246464f1c0b5bdaf874443cfb9b5144",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/maction.js": "f91b910c57b6c6dc82d709d7e433a83e",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/menclose.js": "74227d083dfc4e6483ebbaa1994b011a",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/mglyph.js": "4cf569ea9c36ea9ee72b854f6508d3c8",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/mmultiscripts.js": "ad8220c89d88b53974c987772a3166ca",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/ms.js": "e051a4c765386a529ed0ceaa27011ad4",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/mtable.js": "eca2e36b1c11cb22f7e03277acde0a90",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/autoload/multiline.js": "ccd6259993048f3d5c73d46d6dd48bf0",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/config.js": "d1dc61d8ffb25670c5206f61ff2e2bfb",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Alphabets/Regular/Main.js": "6303cf52e3c5b66776a229c54c7b8c70",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Arrows/Regular/Main.js": "e0b3fa5a6b800534851c91a97916b99f",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/DoubleStruck/Regular/Main.js": "446086a65e5acc4addc209c1ceb65652",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/fontdata-extra.js": "fad039e277378c99cb34dd56514237d4",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/fontdata.js": "17ad8341e2a4e660b88329084761f716",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Fraktur/Regular/Main.js": "9623bcd560058a15d6e3708ef3b818af",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Latin/Regular/Main.js": "59c175c023fb4033463499407273704a",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Main/Regular/Main.js": "b9ced260d2c2c8018bed1c2f261352bb",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Marks/Regular/Main.js": "f7fe387c6d3bcf683135ae76b4d0d533",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Misc/Regular/Main.js": "9469e5e606e4c8e523f2f588c7698923",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Monospace/Regular/Main.js": "828af0b0cd10859ac130134303b229bc",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/NonUnicode/Regular/Main.js": "c24cf9ec0ef0fdc0486efc465955f877",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Normal/Regular/Main.js": "7cddfc4dbd31774063d15daaca024a2a",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Operators/Regular/Main.js": "4f193dafca069b231cd09af63cb99cd0",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/SansSerif/Regular/Main.js": "c547c40a23eeadbce50f23d68486d00f",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Script/Regular/Main.js": "f60d31e4ed8332bd74c9beecb33f1a99",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Shapes/Regular/Main.js": "e54a61d0434674e96f875fa0b1c54d6b",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size1/Regular/Main.js": "c905c53f59845396269755274f9cb5f4",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size2/Regular/Main.js": "dbb593e72d2d845667439edf6db567f3",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size3/Regular/Main.js": "c38bbace253c8f5b3a197f1359deb69b",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size4/Regular/Main.js": "ee51c49314d00d7c356a81badc2a78f5",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size5/Regular/Main.js": "87f4ee4c3a42f44e394aaf2db662de87",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Size6/Regular/Main.js": "3610670a8e0bd92b035d9d2aa308f8b3",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Symbols/Regular/Main.js": "0a018eb464ac3373f62d0def86749f8a",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/fonts/Gyre-Pagella/Variants/Regular/Main.js": "5d794b78b2fb2be08857d51e4f246c96",
"assets/packages/flutter_tex/js/mathjax/jax/output/SVG/jax.js": "439ad7eb66c05d8c683cd22a974a157a",
"assets/packages/flutter_tex/js/mathjax/MathJax.js": "7801b32abc81fe93b01bc6e95097d470",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "d79875570284bb6091e9999fa3ddff70",
"main.dart.js": "ccc26b9ddc679dbf553539adbce94351",
"manifest.json": "e4790a9e02dfdad3353be5672c0f864b",
"version.json": "71cc2c55425b276ed94da33cf4667d68"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
