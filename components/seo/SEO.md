"title" : {
"type" : "StructuredText",
"config" : {
"single" : "heading1",
"label" : "Title",
"placeholder" : "Page Title [40-65 chars]"
}
},
"description" : {
"type" : "StructuredText",
"config" : {
"single" : "paragraph",
"label" : "Description",
"placeholder" : "Page Description [70-155 chars]"
}
},
"featured_image" : {
"type" : "Image",
"config" : {
"constraint" : {
"width" : 1200,
"height" : 600
},
"thumbnails" : [ {
"name" : "large",
"width" : 1024,
"height" : 524
}, {
"name" : "medium",
"width" : 300,
"height" : 150
}, {
"name" : "thumbnail",
"width" : 150,
"height" : 150
} ],
"label" : "Featured Image"
}
},
