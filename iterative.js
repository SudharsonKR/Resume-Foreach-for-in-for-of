console.log("Hi Guvi Team :)")
const resumeobj = {
Name : "Sudharson.KR",
"Father Name": "Ramakrishnan.K (Late)",
"Marital Status" : "Married",
"Languages Known" : "Tamil, English and Malayalam",
"Permanent Address" : "S.No. 6 and 7, Velus Avenue, S.N.M.V. College Road, Chettipalayam Road, Malumichampatti (po), Coimbatore -641050",
"Higher Qualification" : "MCA",
"Total Experience" : "12 Years-US Mortgage Process"
}
//console.log(resumeobj)
var resumeobjkeys = Object.keys(resumeobj)
//console.log(resumeobjkeys)
var resumeobjvalues = Object.values(resumeobj)
//console.log(resumeobjkeys, resumeobjvalues)
console.log('...For Each..')
resumeobjkeys.forEach((list, serial, array)=>{console.log(serial, list);})
resumeobjvalues.forEach((list, serial, array)=>{console.log(serial, list);})
console.log('...For in..')
for(resume in resumeobj)
console.log(resume,"-", resumeobj[resume])
console.log('...For of..')
for (str of resumeobjkeys)
console.log(str)