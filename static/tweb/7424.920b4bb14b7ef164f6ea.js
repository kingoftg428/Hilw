(self.webpackChunktelegram_t=self.webpackChunktelegram_t||[]).push([[7424],{31799:e=>{e.exports=function(e){const n="[A-Za-z_][0-9A-Za-z_]*",t={keyword:["if","for","while","var","new","function","do","return","void","else","break"],literal:["BackSlash","DoubleQuote","false","ForwardSlash","Infinity","NaN","NewLine","null","PI","SingleQuote","Tab","TextFormatting","true","undefined"],built_in:["Abs","Acos","All","Angle","Any","Area","AreaGeodetic","Array","Asin","Atan","Atan2","Attachments","Average","Back","Bearing","Boolean","Buffer","BufferGeodetic","Ceil","Centroid","Clip","Concatenate","Console","Constrain","Contains","ConvertDirection","Cos","Count","Crosses","Cut","Date","DateAdd","DateDiff","Day","Decode","DefaultValue","Densify","DensifyGeodetic","Dictionary","Difference","Disjoint","Distance","DistanceGeodetic","Distinct","Domain","DomainCode","DomainName","EnvelopeIntersects","Equals","Erase","Exp","Expects","Extent","Feature","FeatureSet","FeatureSetByAssociation","FeatureSetById","FeatureSetByName","FeatureSetByPortalItem","FeatureSetByRelationshipName","Filter","Find","First","Floor","FromCharCode","FromCodePoint","FromJSON","GdbVersion","Generalize","Geometry","GetFeatureSet","GetUser","GroupBy","Guid","Hash","HasKey","Hour","IIf","Includes","IndexOf","Insert","Intersection","Intersects","IsEmpty","IsNan","ISOMonth","ISOWeek","ISOWeekday","ISOYear","IsSelfIntersecting","IsSimple","Left|0","Length","Length3D","LengthGeodetic","Log","Lower","Map","Max","Mean","Mid","Millisecond","Min","Minute","Month","MultiPartToSinglePart","Multipoint","NextSequenceValue","None","Now","Number","Offset|0","OrderBy","Overlaps","Point","Polygon","Polyline","Pop","Portal","Pow","Proper","Push","Random","Reduce","Relate","Replace","Resize","Reverse","Right|0","RingIsClockwise","Rotate","Round","Schema","Second","SetGeometry","Simplify","Sin","Slice","Sort","Splice","Split","Sqrt","Stdev","SubtypeCode","SubtypeName","Subtypes","Sum","SymmetricDifference","Tan","Text","Timestamp","ToCharCode","ToCodePoint","Today","ToHex","ToLocal","Top|0","Touches","ToUTC","TrackAccelerationAt","TrackAccelerationWindow","TrackCurrentAcceleration","TrackCurrentDistance","TrackCurrentSpeed","TrackCurrentTime","TrackDistanceAt","TrackDistanceWindow","TrackDuration","TrackFieldWindow","TrackGeometryWindow","TrackIndex","TrackSpeedAt","TrackSpeedWindow","TrackStartTime","TrackWindow","Trim","TypeOf","Union","Upper","UrlEncode","Variance","Week","Weekday","When","Within","Year"]},a={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},i={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},r={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,i]};i.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,r,a,e.REGEXP_MODE];const o=i.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{name:"ArcGIS Arcade",case_insensitive:!0,keywords:t,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,r,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"symbol",begin:"\\$[datastore|feature|layer|map|measure|sourcefeature|sourcelayer|targetfeature|targetlayer|value|view]+"},a,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(return)\\b)\\s*",keywords:"return",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:o}]}]}],relevance:0},{beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{className:"title.function",begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:o}],illegal:/\[|%/},{begin:/\$[(.]/}],illegal:/#(?!!)/}}}}]);
//# sourceMappingURL=7424.920b4bb14b7ef164f6ea.js.map